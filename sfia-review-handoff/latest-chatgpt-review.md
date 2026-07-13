# SFIA Review Pack — Task Tracker Delivery (correctif handoff)

**Horodatage :** 2026-07-13 17:38 CEST

---

## 1. Métadonnées

| Élément | Valeur |
|---------|--------|
| Cycle | Cycle 9 — QA / validation (correctif handoff) |
| Profil SFIA | Light |
| Typologie v2.4 | DOC |
| Repository | sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-task-tracker` |
| Branche projet | `cadrage/task-tracker-light` |
| HEAD | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| origin/main | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| Verdict attendu | HANDOFF UPDATED — REMOTE VERIFIED |

---

## 2. Cause du cycle correctif

| Élément | Détail |
|---------|--------|
| Verdict ChatGPT précédent | REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING |
| Troncature constatée | Le handoff distant `aa4d7ac` se terminait après le dernier fichier de test, sans sections 13–21 (validations finales, captures détaillées, accessibilité, performance, dépendances, garde-fous, réserves, handoff, verdict) |
| Objectif | Reconstruire un review pack complet et republier `sfia-review-handoff/latest-chatgpt-review.md` |
| Fichiers projet modifiés | Aucun — cycle correctif documentaire uniquement |

---

## 3. Local Git Truth Check

### Worktree task-tracker

```bash
git rev-parse --show-toplevel  # /Users/morris/Projects/sfia-task-tracker
git branch --show-current      # cadrage/task-tracker-light
git rev-parse HEAD             # 6407913689b14e84e0a487a3137ff290bb6e2ff8
git rev-parse origin/main      # 6407913689b14e84e0a487a3137ff290bb6e2ff8
```

**État Git initial et final (identique) :**
```
?? .tmp-sfia-review/
?? projects/task-tracker/
```

- Fichiers staged : aucun
- Commit projet : aucun
- `git diff --stat` : vide (fichiers untracked uniquement)

### Workspace principal (inchangé)

| Élément | Valeur |
|---------|--------|
| Chemin | `/Users/morris/Projects/sfia-workspace` |
| Branche | `documentation/sfia-notion-editorial-p0` |
| git status | `?? .sfia/` ; `?? .tmp-sfia-review/` ; `?? method/sfia-fast-track/documentation/notion/editorial/` |

---

## 4. Sources consultées

### Méthode SFIA
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

### Fichiers task-tracker lus intégralement
- `projects/task-tracker/00-framing/task-tracker-cadrage.md`
- `projects/task-tracker/app/package.json`
- `projects/task-tracker/app/package-lock.json`
- `projects/task-tracker/app/tsconfig.json`
- `projects/task-tracker/app/next.config.ts`
- `projects/task-tracker/app/vitest.config.ts`
- `projects/task-tracker/app/.eslintrc.json`
- `projects/task-tracker/app/.gitignore`
- `projects/task-tracker/app/README.md`
- `projects/task-tracker/app/next-env.d.ts`
- `projects/task-tracker/app/app/layout.tsx`
- `projects/task-tracker/app/app/page.tsx`
- `projects/task-tracker/app/app/globals.css`
- `projects/task-tracker/app/components/DeleteConfirmDialog.tsx`
- `projects/task-tracker/app/components/TaskForm.tsx`
- `projects/task-tracker/app/components/TaskItem.tsx`
- `projects/task-tracker/app/components/TaskTrackerApp.tsx`
- `projects/task-tracker/app/lib/tasks/constants.ts`
- `projects/task-tracker/app/lib/tasks/filters.ts`
- `projects/task-tracker/app/lib/tasks/storage.ts`
- `projects/task-tracker/app/lib/tasks/taskService.ts`
- `projects/task-tracker/app/lib/tasks/types.ts`
- `projects/task-tracker/app/lib/tasks/validation.ts`
- `projects/task-tracker/app/__tests__/filters.test.ts`
- `projects/task-tracker/app/__tests__/storage.test.ts`
- `projects/task-tracker/app/__tests__/taskService.test.ts`
- `projects/task-tracker/app/__tests__/validation.test.ts`
- `projects/task-tracker/08-qa-test/runtime-screenshots/desktop-empty-state.png`
- `projects/task-tracker/08-qa-test/runtime-screenshots/desktop-with-task.png`
- `projects/task-tracker/08-qa-test/runtime-screenshots/desktop-delete-confirmation.png`
- `projects/task-tracker/08-qa-test/runtime-screenshots/mobile-with-task.png`

### Handoff précédent analysé
- `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` (commit `aa4d7ac`)

---

## 5. Qualification SFIA

| Élément | Valeur |
|---------|--------|
| Cycle | QA / validation — correctif handoff |
| Profil | Light |
| Blocs activés | Aucun transverse |
| Périmètre | Review pack + handoff Git uniquement |
| Exclusions | Code, cadrage, tests, captures, dépendances |
| Gate Morris | Aucun si correctif borné |
| Stop conditions | Modification applicative requise → STOP |

---

## 6. Inventaire exhaustif

| Chemin | Type | Taille (octets) | Lignes | Statut Git | Rôle | SHA-256 |
|--------|------|-----------------|--------|------------|------|---------|
| `projects/task-tracker/00-framing/task-tracker-cadrage.md` | markdown | 12888 | 258 | untracked | Document de cadrage validé | `6fba9ecd0df2ec0c…` |
| `projects/task-tracker/app/package.json` | json | 728 | 29 | untracked | Configuration applicative | `ba50b867002c2b4f…` |
| `projects/task-tracker/app/package-lock.json` | json-lock | 242862 | 7157 | untracked | Configuration applicative | `9f8b2fd9c495ab28…` |
| `projects/task-tracker/app/tsconfig.json` | json | 572 | 23 | untracked | Configuration applicative | `f376074b41f9ea59…` |
| `projects/task-tracker/app/next.config.ts` | typescript | 130 | 7 | untracked | Configuration applicative | `c5efcdb15ee66db5…` |
| `projects/task-tracker/app/vitest.config.ts` | typescript | 266 | 14 | untracked | Configuration applicative | `8205fe646af9431c…` |
| `projects/task-tracker/app/.eslintrc.json` | json | 40 | 3 | untracked | Configuration applicative | `1589a15e55fbebc6…` |
| `projects/task-tracker/app/.gitignore` | gitignore | 66 | 6 | untracked | Configuration applicative | `961c979e360d89c2…` |
| `projects/task-tracker/app/README.md` | markdown | 1036 | 45 | untracked | Documentation locale | `e1d19d37c3c67163…` |
| `projects/task-tracker/app/next-env.d.ts` | typescript | 262 | 6 | untracked | Types Next.js générés | `85ae5aee75f01196…` |
| `projects/task-tracker/app/app/layout.tsx` | tsx | 378 | 19 | untracked | Routes et styles Next.js | `4deca4a462f65a65…` |
| `projects/task-tracker/app/app/page.tsx` | tsx | 131 | 5 | untracked | Routes et styles Next.js | `158651f4a3916237…` |
| `projects/task-tracker/app/app/globals.css` | css | 4331 | 286 | untracked | Routes et styles Next.js | `0175dd32a25558ef…` |
| `projects/task-tracker/app/components/DeleteConfirmDialog.tsx` | tsx | 971 | 36 | untracked | Composant React UI | `2ee44f0bdeb22fe4…` |
| `projects/task-tracker/app/components/TaskForm.tsx` | tsx | 3211 | 126 | untracked | Composant React UI | `f3462523c80f7fbd…` |
| `projects/task-tracker/app/components/TaskItem.tsx` | tsx | 2056 | 83 | untracked | Composant React UI | `d2723f3f0947d962…` |
| `projects/task-tracker/app/components/TaskTrackerApp.tsx` | tsx | 7646 | 270 | untracked | Composant React UI | `e83c59bb942324d8…` |
| `projects/task-tracker/app/lib/tasks/constants.ts` | typescript | 545 | 19 | untracked | Logique métier / persistance | `a78b37a3e1d28032…` |
| `projects/task-tracker/app/lib/tasks/filters.ts` | typescript | 531 | 21 | untracked | Logique métier / persistance | `e25c52766109a17c…` |
| `projects/task-tracker/app/lib/tasks/storage.ts` | typescript | 1232 | 60 | untracked | Logique métier / persistance | `22d285ec376b8f42…` |
| `projects/task-tracker/app/lib/tasks/taskService.ts` | typescript | 2713 | 106 | untracked | Logique métier / persistance | `a8aae0c511844ecd…` |
| `projects/task-tracker/app/lib/tasks/types.ts` | typescript | 790 | 37 | untracked | Logique métier / persistance | `ee138186dffc6aee…` |
| `projects/task-tracker/app/lib/tasks/validation.ts` | typescript | 710 | 28 | untracked | Logique métier / persistance | `c7bb285b5adac02f…` |
| `projects/task-tracker/app/__tests__/filters.test.ts` | typescript | 1737 | 74 | untracked | Test unitaire Vitest | `5600ce7e6b875c61…` |
| `projects/task-tracker/app/__tests__/storage.test.ts` | typescript | 1555 | 56 | untracked | Test unitaire Vitest | `a4f1197dd6677c17…` |
| `projects/task-tracker/app/__tests__/taskService.test.ts` | typescript | 2713 | 106 | untracked | Test unitaire Vitest | `07ac19c6f875f311…` |
| `projects/task-tracker/app/__tests__/validation.test.ts` | typescript | 595 | 17 | untracked | Test unitaire Vitest | `72777209a24b2c19…` |
| `projects/task-tracker/08-qa-test/runtime-screenshots/desktop-empty-state.png` | png | 154650 | N/A | untracked | Capture runtime QA | `d8f89dab32f43734…` |
| `projects/task-tracker/08-qa-test/runtime-screenshots/desktop-with-task.png` | png | 169100 | N/A | untracked | Capture runtime QA | `6214c4d835f3df10…` |
| `projects/task-tracker/08-qa-test/runtime-screenshots/desktop-delete-confirmation.png` | png | 201961 | N/A | untracked | Capture runtime QA | `2f32dbc9b2fa0fb8…` |
| `projects/task-tracker/08-qa-test/runtime-screenshots/mobile-with-task.png` | png | 151515 | N/A | untracked | Capture runtime QA | `6a053466ed998842…` |

**Exclus de l'inventaire :** `node_modules/**`, `.next/**`, `coverage/**`, `tsconfig.tsbuildinfo`

---

## 7. Décisions Morris validées

| # | Décision | Date | Statut | Source |
|---|----------|------|--------|--------|
| D1 | Mono-utilisateur | 2026-07-13 | VALIDATED — Morris | `projects/task-tracker/00-framing/task-tracker-cadrage.md` §14 |
| D2 | Périmètre MVP | 2026-07-13 | VALIDATED — Morris | `projects/task-tracker/00-framing/task-tracker-cadrage.md` §14 |
| D3 | Statuts À faire / En cours / Terminée | 2026-07-13 | VALIDATED — Morris | `projects/task-tracker/00-framing/task-tracker-cadrage.md` §14 |
| D4 | Priorités Basse / Normale / Haute | 2026-07-13 | VALIDATED — Morris | `projects/task-tracker/00-framing/task-tracker-cadrage.md` §14 |
| D5 | Suppression définitive avec confirmation | 2026-07-13 | VALIDATED — Morris | `projects/task-tracker/00-framing/task-tracker-cadrage.md` §14 |
| D6 | Delivery Standard borné | 2026-07-13 | VALIDATED — Morris | `projects/task-tracker/00-framing/task-tracker-cadrage.md` §14 |

---

## 8. Stack et architecture

### Stack
| Composant | Version | Justification |
|-----------|---------|---------------|
| Next.js | ^15.3.3 (résolu 15.5.20) | Convention `chantiers360-v2/app` |
| React | ^19.1.0 | Standard repository |
| TypeScript | ^5.8.3 | Typage strict |
| Vitest | ^3.1.2 | Tests légers, aligné `interv360` |
| Persistance | localStorage | Mono-utilisateur, pas de backend |

### Structure applicative
```text
projects/task-tracker/app/
  app/           # layout, page, globals.css
  components/    # TaskTrackerApp, TaskForm, TaskItem, DeleteConfirmDialog
  lib/tasks/     # types, validation, taskService, filters, storage
  __tests__/     # 4 fichiers, 14 tests
```

### Modèle de données
```typescript
Task { id, title, description?, status, priority, dueDate?, createdAt, updatedAt }
status: todo | in_progress | done
priority: low | normal | high
```

### Flux principaux
1. Hydratation depuis localStorage au montage client
2. CRUD via taskService (logique pure)
3. Filtrage via filterTasks (recherche + statut + priorité)
4. Sauvegarde automatique à chaque modification

---

## 9. Contrat visuel léger

| Élément | Valeur |
|---------|--------|
| Viewport desktop | 1280×800 minimum |
| Viewport mobile | 390×844 |
| Structure | En-tête + 3 panneaux (Création, Filtres, Liste) |
| Hiérarchie | h1 → h2 → h3 |
| Espacement | 0.75–2rem via variables CSS |
| Responsive | Colonne unique ; actions empilées < 640px |
| État nominal | Liste avec badges statut/priorité |
| État vide | Message explicite |
| Erreur validation | Texte rouge `role="alert"` |
| Accessibilité base | Labels, focus visible, dialogues modaux |
| Limite | Pas de baseline design, pas de Figma |

---

## 10. Fichier cadrage complet

### Fichier : `projects/task-tracker/00-framing/task-tracker-cadrage.md`

```markdown
# Cadrage — Application de suivi de tâches

**Projet :** task-tracker  
**Chemin :** `projects/task-tracker/00-framing/task-tracker-cadrage.md`

---

## 1. Statut du document

| Élément | Valeur |
|---------|--------|
| **Statut** | Cadrage validé — Delivery en cours |
| **Cycle** | Cadrage (Cycle 1) — clôturé ; Delivery (Cycle 8) — en cours |
| **Profil SFIA** | Light (cadrage) ; Standard (delivery) |
| **Date et heure cadrage** | 2026-07-13 17:19 CEST (Europe/Paris) |
| **Date validation Morris** | 2026-07-13 — Morris |
| **Auteur d'exécution** | Cursor |
| **Décideur** | Morris |
| **Branche** | `cadrage/task-tracker-light` |
| **Worktree** | `/Users/morris/Projects/sfia-task-tracker` |

> **Décisions Morris validées le 2026-07-13.**  
> Les éléments fonctionnels listés ci-dessous constituent le périmètre MVP approuvé pour le cycle Delivery Standard borné.

---

## 2. Vision

Les utilisateurs individuels ont souvent besoin d'un endroit simple pour noter ce qu'ils doivent faire, sans la complexité d'outils de gestion de projet ou de collaboration d'équipe.

L'application vise à offrir un suivi de tâches personnel, immédiat et lisible : créer une tâche en quelques secondes, voir l'ensemble de ce qui reste à faire, et marquer une tâche comme terminée sans friction.

Le positionnement est volontairement minimal : pas de comptes, pas de partage, pas de paramétrage avancé. L'objectif est la clarté et la rapidité d'usage, pour un usage personnel ou démonstrateur.

**Vision candidate :** permettre à un utilisateur de créer, organiser, suivre et terminer ses tâches quotidiennes depuis une interface simple, sans mécanisme collaboratif ni paramétrage complexe.

---

## 3. Utilisateur cible

**Profil principal — utilisateur individuel**

- Utilise l'application pour son propre suivi de tâches ;
- souhaite visualiser rapidement ce qu'il doit faire ;
- ne souhaite pas administrer un outil complexe ;
- accepte un périmètre fonctionnel réduit en échange de simplicité.

Aucun persona détaillé n'est défini à ce stade.

---

## 4. Objectifs du MVP

| # | Objectif | Vérification |
|---|----------|--------------|
| 1 | Créer une tâche rapidement | Une tâche peut être créée avec un titre seul |
| 2 | Consulter les tâches | La liste affiche toutes les tâches existantes |
| 3 | Modifier une tâche | Le titre, la description, la priorité et l'échéance sont modifiables |
| 4 | Faire évoluer son statut | Une tâche peut passer entre les trois statuts candidats |
| 5 | Supprimer ou archiver une tâche | Selon décision Morris (voir §14) |

---

## 5. Périmètre fonctionnel MVP

### Fonctions candidates

| Fonction | Description |
|----------|-------------|
| Créer une tâche | Saisie d'un titre obligatoire et champs facultatifs |
| Afficher les tâches | Liste consultable de l'ensemble des tâches |
| Modifier une tâche | Édition des champs d'une tâche existante |
| Changer son statut | Transition entre les statuts candidats |
| Définir une priorité | Attribution d'une priorité parmi les trois niveaux candidats |
| Définir une échéance facultative | Date optionnelle associée à la tâche |
| Rechercher les tâches | Recherche textuelle sur le titre (minimum) |
| Filtrer par statut et priorité | Filtres limités à ces deux dimensions |
| Supprimer une tâche | Suppression avec confirmation utilisateur |

### Données minimales d'une tâche

| Champ | Obligatoire | Remarque |
|-------|-------------|----------|
| Identifiant | Oui (technique) | Généré automatiquement |
| Titre | Oui | Champ principal visible |
| Description | Non | Texte libre facultatif |
| Statut | Oui | Valeur parmi les statuts candidats |
| Priorité | Oui | Valeur parmi les priorités candidates |
| Échéance | Non | Date facultative |
| Date de création | Oui (technique) | Enregistrée automatiquement |
| Date de modification | Oui (technique) | Mise à jour automatiquement |

### Statuts candidats

| Statut | Signification candidate |
|--------|----------------------|
| À faire | Tâche créée, non démarrée |
| En cours | Tâche en cours de réalisation |
| Terminée | Tâche achevée |

> Recommandation candidate — soumise au GO Morris.

### Priorités candidates

| Priorité | Signification candidate |
|----------|------------------------|
| Basse | Peut attendre |
| Normale | Priorité par défaut |
| Haute | À traiter en priorité |

> Recommandation candidate — soumise au GO Morris.

---

## 6. Hors périmètre

Les éléments suivants sont explicitement exclus du MVP :

- comptes utilisateurs ;
- authentification ;
- rôles et permissions ;
- partage de tâches ;
- commentaires ;
- pièces jointes ;
- sous-tâches ;
- récurrence ;
- notifications (email, push, etc.) ;
- synchronisation calendrier ;
- intelligence artificielle ;
- application mobile native ;
- mode hors ligne avancé ;
- import/export ;
- reporting avancé ;
- tableaux de bord ;
- administration ;
- internationalisation.

Un cadrage complémentaire serait requis si des comptes utilisateurs, des données personnelles sensibles ou un usage collaboratif sont ajoutés ultérieurement.

---

## 7. Règles fonctionnelles essentielles

| # | Règle | Détail |
|---|-------|--------|
| R1 | Titre obligatoire | Une tâche ne peut pas être créée sans titre |
| R2 | Statut initial | Une tâche nouvellement créée a le statut **À faire** |
| R3 | Priorité initiale | La priorité par défaut est **Normale** |
| R4 | Échéance facultative | L'échéance n'est pas requise à la création |
| R5 | Transitions de statut | Une tâche peut passer entre les trois statuts candidats |
| R6 | Confirmation de suppression | Toute suppression exige une confirmation explicite |
| R7 | Tâche terminée consultable | Une tâche au statut Terminée reste visible et consultable |
| R8 | Dates techniques automatiques | Les dates de création et de modification sont gérées par le système |
| R9 | Recherche minimale | La recherche porte au minimum sur le titre |
| R10 | Filtres limités | Les filtres disponibles concernent uniquement le statut et la priorité |

Toute règle non listée ci-dessus reste hors décision à ce stade.

---

## 8. Parcours nominal

Parcours de bout en bout — scénario principal :

1. L'utilisateur ouvre l'application ;
2. il consulte la liste de ses tâches ;
3. il crée une nouvelle tâche ;
4. il renseigne un titre et, facultativement, une description, une priorité et une échéance ;
5. la tâche apparaît dans la liste avec le statut **À faire** ;
6. il la passe au statut **En cours** ;
7. il la passe au statut **Terminée**.

---

## 9. Écrans minimaux

| Écran | Contenu |
|-------|---------|
| **Liste principale** | Affichage des tâches, recherche textuelle, filtres par statut et priorité |
| **Formulaire création / modification** | Saisie et édition des champs d'une tâche |
| **Confirmation de suppression** | Dialogue de confirmation avant suppression définitive ou archivage |

Aucune maquette n'est produite à ce stade.  
Aucun design system n'est imposé.

---

## 10. Backlog MVP initial

| ID | User story | Priorité backlog | Critères d'acceptation | Statut de décision |
|----|------------|------------------|------------------------|-------------------|
| US-01 | En tant qu'utilisateur, je consulte la liste de mes tâches pour voir ce que j'ai à faire | Must | La liste affiche toutes les tâches ; chaque tâche montre au minimum titre, statut et priorité ; la liste est consultable dès l'ouverture | Candidate — GO Morris requis |
| US-02 | En tant qu'utilisateur, je crée une tâche pour noter quelque chose à faire | Must | Je peux saisir un titre obligatoire ; la tâche est créée avec le statut À faire et la priorité Normale ; la tâche apparaît immédiatement dans la liste | Candidate — GO Morris requis |
| US-03 | En tant qu'utilisateur, je modifie une tâche pour corriger ou compléter ses informations | Must | Je peux modifier le titre, la description, la priorité et l'échéance ; la date de modification est mise à jour ; les changements sont visibles dans la liste | Candidate — GO Morris requis |
| US-04 | En tant qu'utilisateur, je change le statut d'une tâche pour suivre son avancement | Must | Je peux passer une tâche de À faire à En cours puis à Terminée ; le nouveau statut est visible immédiatement ; une tâche terminée reste consultable | Candidate — GO Morris requis |
| US-05 | En tant qu'utilisateur, je définis la priorité et l'échéance d'une tâche pour organiser mon travail | Should | Je peux choisir parmi Basse, Normale et Haute ; je peux définir ou retirer une échéance ; la priorité par défaut à la création est Normale | Candidate — GO Morris requis |
| US-06 | En tant qu'utilisateur, je recherche et filtre mes tâches pour trouver rapidement ce qui m'intéresse | Should | La recherche fonctionne au minimum sur le titre ; je peux filtrer par statut ; je peux filtrer par priorité | Candidate — GO Morris requis |
| US-07 | En tant qu'utilisateur, je supprime une tâche pour retirer ce qui n'est plus pertinent | Should | Une confirmation est demandée avant suppression ; après confirmation, la tâche disparaît de la liste ; l'action est irréversible si suppression définitive retenue | Candidate — GO Morris requis |

---

## 11. Hypothèses techniques non engageantes

Les points suivants sont des hypothèses de travail — **non des décisions techniques validées** :

- application web responsive, utilisable sur desktop et mobile via navigateur ;
- frontend et backend potentiellement regroupés dans une seule application ;
- stockage local simple (fichier, mémoire) ou petite base relationnelle ;
- exécution locale possible pour le développement et la démonstration ;
- choix de stack définitif reporté au cycle d'architecture technique ou de delivery.

Aucun ADR n'est créé à ce stade.  
Aucune technologie n'est sélectionnée de manière définitive.

---

## 12. Risques et réserves

| Risque / réserve | Description |
|------------------|-------------|
| Croissance du périmètre | Ajout progressif de fonctions collaboratives, de notifications ou de sous-tâches pouvant diluer la simplicité initiale |
| Cadrage RGPD | Nécessaire si des comptes utilisateurs ou des données personnelles identifiables sont introduits |
| Cycle UX/UI | Requis si une fidélité visuelle particulière ou une charte graphique est attendue |
| Architecture formelle | Recommandée avant exposition publique, montée en charge ou persistance distribuée |

---

## 13. Critères de réussite du cadrage

Le cadrage est réussi si Morris peut :

- comprendre le produit en moins de cinq minutes ;
- valider ou corriger le périmètre MVP proposé ;
- choisir le prochain cycle (delivery, UX/UI, ou autre) ;
- identifier clairement les fonctions non incluses.

---

## 14. Décisions Morris attendues

| # | Décision | Proposition initiale | Décision Morris | Date | Statut |
|---|----------|-------------------|-----------------|------|--------|
| D1 | Principe mono-utilisateur | Application sans compte, usage personnel ou démonstrateur | **Validé** — mono-utilisateur, sans authentification | 2026-07-13 | VALIDATED — Morris |
| D2 | Périmètre MVP | Sept user stories, neuf fonctions, dix règles | **Validé** — périmètre MVP sans extension | 2026-07-13 | VALIDATED — Morris |
| D3 | Trois statuts | À faire, En cours, Terminée | **Validé** — À faire, En cours, Terminée | 2026-07-13 | VALIDATED — Morris |
| D4 | Trois priorités | Basse, Normale, Haute | **Validé** — Basse, Normale, Haute | 2026-07-13 | VALIDATED — Morris |
| D5 | Suppression ou archivage | Suppression définitive vs archivage | **Validé** — suppression définitive avec confirmation | 2026-07-13 | VALIDATED — Morris |
| D6 | Prochain cycle | Delivery Standard borné vs UX/UI Light | **Validé** — Delivery Standard borné, conception technique minimale intégrée, sans phase UX/UI séparée | 2026-07-13 | VALIDATED — Morris |

---

## 15. Recommandation de trajectoire

| Option | Description | Avantage | Limite |
|--------|-------------|----------|--------|
| **A — Delivery Standard borné** | Enchaîner directement sur un cycle de delivery avec périmètre strict | Rapidité d'exécution, livrable fonctionnel rapide | Moins de validation visuelle préalable |
| **B — UX/UI Light avant delivery** | Réaliser d'abord un cycle UX/UI Light pour valider l'écran principal | Meilleure adhésion visuelle avant développement | Ajoute un micro-cycle |
| **Décision Morris (D6)** | **Option A retenue** — Delivery Standard borné, conception technique minimale intégrée | Évite des micro-cycles inutiles pour un périmètre aussi réduit | Validé 2026-07-13 |

```

---

## 11. Fichiers applicatifs complets

### Métadonnées : `projects/task-tracker/app/package-lock.json`

| Attribut | Valeur |
|----------|--------|
| lockfileVersion | 3 |
| Dépendances racine | next, react, react-dom |
| Taille | 242862 octets |
| Lignes | 7157 |
| SHA-256 | `9f8b2fd9c495ab28a9ef7d24831ae2d007b4803ffc5b15eb1a7b22da6571726e` |
| Contenu intégral | Exclu (taille disproportionnée) — cohérent avec package.json |

---

### Fichier : `projects/task-tracker/app/package.json`

```json
{
  "name": "task-tracker",
  "private": true,
  "version": "0.1.0",
  "description": "Task Tracker — MVP mono-utilisateur avec persistance localStorage",
  "scripts": {
    "dev": "next dev --port 3010",
    "build": "next build",
    "start": "next start --port 3010",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "next": "^15.3.3",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@types/node": "^22.15.21",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "eslint": "^9.27.0",
    "eslint-config-next": "^15.3.3",
    "typescript": "^5.8.3",
    "vitest": "^3.1.2"
  }
}

```

---

### Fichier : `projects/task-tracker/app/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

---

### Fichier : `projects/task-tracker/app/next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

```

---

### Fichier : `projects/task-tracker/app/vitest.config.ts`

```typescript
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    include: ["__tests__/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});

```

---

### Fichier : `projects/task-tracker/app/.eslintrc.json`

```json
{
  "extends": "next/core-web-vitals"
}

```

---

### Fichier : `projects/task-tracker/app/.gitignore`

```text
node_modules/
.next/
out/
.env*.local
*.tsbuildinfo
next-env.d.ts

```

---

### Fichier : `projects/task-tracker/app/README.md`

```markdown
# Task Tracker — Application MVP

Application web mono-utilisateur de suivi de tâches, livrée dans le cadre du cycle Delivery Standard borné SFIA.

## Périmètre

- Consultation, création, modification, changement de statut, priorité, échéance facultative
- Recherche par titre et filtres par statut / priorité
- Suppression définitive avec confirmation
- Persistance locale via `localStorage`

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS simple (globals.css)
- Vitest pour les tests métier et persistance

## Commandes

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

L'application de développement écoute par défaut sur `http://localhost:3010`.

## Structure

```text
app/                 # routes Next.js
components/          # interface utilisateur
lib/tasks/           # modèle, règles métier, persistance, filtres
__tests__/           # tests unitaires
```

## Décisions Morris validées

Voir `../00-framing/task-tracker-cadrage.md`.

```

---

### Fichier : `projects/task-tracker/app/next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

---

### Fichier : `projects/task-tracker/app/app/layout.tsx`

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suivi de tâches",
  description: "Application mono-utilisateur de suivi de tâches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

```

---

### Fichier : `projects/task-tracker/app/app/page.tsx`

```typescript
import { TaskTrackerApp } from "@/components/TaskTrackerApp";

export default function HomePage() {
  return <TaskTrackerApp />;
}

```

---

### Fichier : `projects/task-tracker/app/app/globals.css`

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  color-scheme: light;
  --bg: #f4f6f8;
  --surface: #ffffff;
  --border: #d8dee4;
  --text: #1f2933;
  --muted: #5f6c7b;
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --danger: #dc2626;
  --danger-hover: #b91c1c;
  --focus: #2563eb;
  --shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  --radius: 12px;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
}

body {
  padding: var(--space-md);
}

h1,
h2,
h3,
p {
  margin: 0;
}

button,
input,
select,
textarea {
  font: inherit;
}

button,
input,
select,
textarea {
  border-radius: 8px;
  border: 1px solid var(--border);
}

button {
  cursor: pointer;
  background: var(--surface);
  color: var(--text);
  padding: 0.55rem 0.9rem;
}

button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}

.app-shell {
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  gap: var(--space-lg);
}

.app-header {
  display: grid;
  gap: var(--space-xs);
}

.app-header h1 {
  font-size: 1.75rem;
}

.app-header p {
  color: var(--muted);
}

.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: var(--space-lg);
  display: grid;
  gap: var(--space-md);
}

.panel h2 {
  font-size: 1.125rem;
}

.filters-row,
.form-grid,
.task-actions,
.task-meta,
.inline-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  align-items: center;
}

.filters-row label,
.form-grid label {
  display: grid;
  gap: 0.35rem;
  font-size: 0.9rem;
  color: var(--muted);
  flex: 1 1 180px;
}

.filters-row input,
.filters-row select,
.form-grid input,
.form-grid select,
.form-grid textarea {
  width: 100%;
  padding: 0.55rem 0.7rem;
  background: #fff;
  color: var(--text);
}

.form-grid textarea {
  min-height: 96px;
  resize: vertical;
}

.primary-button {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

.primary-button:hover {
  background: var(--primary-hover);
}

.secondary-button:hover {
  background: #eef2f7;
}

.danger-button {
  color: var(--danger);
  border-color: #f3c7c7;
}

.danger-button:hover {
  background: #fef2f2;
  border-color: var(--danger);
}

.task-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-md);
}

.task-card {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: var(--space-md);
  display: grid;
  gap: var(--space-sm);
  background: #fbfcfd;
}

.task-card h3 {
  font-size: 1.05rem;
}

.task-description {
  color: var(--muted);
  white-space: pre-wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
  font-size: 0.8rem;
  border: 1px solid var(--border);
  background: #fff;
}

.badge-status-todo {
  border-color: #cbd5e1;
}

.badge-status-in_progress {
  border-color: #93c5fd;
  background: #eff6ff;
}

.badge-status-done {
  border-color: #86efac;
  background: #f0fdf4;
}

.badge-priority-high {
  border-color: #fca5a5;
  background: #fef2f2;
}

.badge-priority-low {
  border-color: #cbd5e1;
  background: #f8fafc;
}

.empty-state,
.error-text,
.counter-text,
.due-date-text {
  color: var(--muted);
}

.error-text {
  color: var(--danger);
}

.dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: grid;
  place-items: center;
  padding: var(--space-md);
  z-index: 20;
}

.dialog {
  width: min(100%, 420px);
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: var(--space-lg);
  display: grid;
  gap: var(--space-md);
}

@media (max-width: 640px) {
  body {
    padding: var(--space-sm);
  }

  .panel {
    padding: var(--space-md);
  }

  .task-actions,
  .inline-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .task-actions button,
  .inline-actions button,
  .task-actions select {
    width: 100%;
  }
}

```

---

### Fichier : `projects/task-tracker/app/components/DeleteConfirmDialog.tsx`

```typescript
interface DeleteConfirmDialogProps {
  taskTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteConfirmDialog({
  taskTitle,
  onConfirm,
  onCancel,
}: DeleteConfirmDialogProps) {
  return (
    <div className="dialog-backdrop" role="presentation">
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-dialog-title"
      >
        <h2 id="delete-dialog-title">Confirmer la suppression</h2>
        <p>
          Supprimer définitivement la tâche « {taskTitle} » ? Cette action est
          irréversible.
        </p>
        <div className="inline-actions">
          <button type="button" className="danger-button" onClick={onConfirm}>
            Supprimer définitivement
          </button>
          <button type="button" className="secondary-button" onClick={onCancel}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

```

---

### Fichier : `projects/task-tracker/app/components/TaskForm.tsx`

```typescript
import type { Task, TaskPriority, TaskStatus } from "@/lib/tasks/types";
import {
  ALL_PRIORITIES,
  ALL_STATUSES,
  PRIORITY_LABELS,
  STATUS_LABELS,
} from "@/lib/tasks/constants";

interface TaskFormValues {
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  dueDate?: string;
}

interface TaskFormProps {
  mode: "create" | "edit";
  initialTask?: Task;
  error?: string | null;
  onSubmit: (values: TaskFormValues) => void;
  onCancel: () => void;
}

export function TaskForm({
  mode,
  initialTask,
  error,
  onSubmit,
  onCancel,
}: TaskFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    onSubmit({
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      status: String(formData.get("status") ?? "todo") as TaskStatus,
      priority: String(formData.get("priority") ?? "normal") as TaskPriority,
      dueDate: String(formData.get("dueDate") ?? ""),
    });
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <label htmlFor={`${mode}-title`}>
        Titre *
        <input
          id={`${mode}-title`}
          name="title"
          type="text"
          required
          maxLength={120}
          defaultValue={initialTask?.title ?? ""}
        />
      </label>

      <label htmlFor={`${mode}-description`}>
        Description
        <textarea
          id={`${mode}-description`}
          name="description"
          defaultValue={initialTask?.description ?? ""}
        />
      </label>

      {mode === "edit" && (
        <label htmlFor={`${mode}-status`}>
          Statut
          <select
            id={`${mode}-status`}
            name="status"
            defaultValue={initialTask?.status ?? "todo"}
          >
            {ALL_STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
        </label>
      )}

      <label htmlFor={`${mode}-priority`}>
        Priorité
        <select
          id={`${mode}-priority`}
          name="priority"
          defaultValue={initialTask?.priority ?? "normal"}
        >
          {ALL_PRIORITIES.map((priority) => (
            <option key={priority} value={priority}>
              {PRIORITY_LABELS[priority]}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor={`${mode}-dueDate`}>
        Échéance
        <input
          id={`${mode}-dueDate`}
          name="dueDate"
          type="date"
          defaultValue={initialTask?.dueDate ?? ""}
        />
      </label>

      {error && (
        <p className="error-text" role="alert">
          {error}
        </p>
      )}

      <div className="inline-actions">
        <button type="submit" className="primary-button">
          {mode === "create" ? "Créer la tâche" : "Enregistrer"}
        </button>
        <button type="button" className="secondary-button" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </form>
  );
}

```

---

### Fichier : `projects/task-tracker/app/components/TaskItem.tsx`

```typescript
import type { Task, TaskStatus } from "@/lib/tasks/types";
import {
  ALL_STATUSES,
  PRIORITY_LABELS,
  STATUS_LABELS,
} from "@/lib/tasks/constants";

interface TaskItemProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onStatusChange: (status: TaskStatus) => void;
}

function formatDueDate(value?: string): string | null {
  if (!value) {
    return null;
  }

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("fr-FR");
}

export function TaskItem({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}: TaskItemProps) {
  const dueDateLabel = formatDueDate(task.dueDate);

  return (
    <li className="task-card">
      <h3>{task.title}</h3>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-meta">
        <span className={`badge badge-status-${task.status}`}>
          {STATUS_LABELS[task.status]}
        </span>
        <span className={`badge badge-priority-${task.priority}`}>
          {PRIORITY_LABELS[task.priority]}
        </span>
        {dueDateLabel && (
          <span className="due-date-text">Échéance : {dueDateLabel}</span>
        )}
      </div>

      <div className="task-actions">
        <label htmlFor={`status-${task.id}`}>
          Changer le statut
          <select
            id={`status-${task.id}`}
            value={task.status}
            onChange={(event) =>
              onStatusChange(event.target.value as TaskStatus)
            }
          >
            {ALL_STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
        </label>

        <button type="button" className="secondary-button" onClick={onEdit}>
          Modifier
        </button>
        <button type="button" className="danger-button" onClick={onDelete}>
          Supprimer
        </button>
      </div>
    </li>
  );
}

```

---

### Fichier : `projects/task-tracker/app/components/TaskTrackerApp.tsx`

```typescript
"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  CreateTaskInput,
  Task,
  TaskFilters,
  TaskPriority,
  TaskStatus,
  UpdateTaskInput,
} from "@/lib/tasks/types";
import { filterTasks } from "@/lib/tasks/filters";
import { loadTasks, saveTasks } from "@/lib/tasks/storage";
import {
  changeTaskStatus,
  createTask,
  deleteTask,
  updateTask,
} from "@/lib/tasks/taskService";
import { ALL_PRIORITIES, ALL_STATUSES, PRIORITY_LABELS, STATUS_LABELS } from "@/lib/tasks/constants";
import { DeleteConfirmDialog } from "./DeleteConfirmDialog";
import { TaskForm } from "./TaskForm";
import { TaskItem } from "./TaskItem";

const EMPTY_FILTERS: TaskFilters = {
  search: "",
  status: "all",
  priority: "all",
};

export function TaskTrackerApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<TaskFilters>(EMPTY_FILTERS);
  const [hydrated, setHydrated] = useState(false);
  const [formMode, setFormMode] = useState<"create" | "edit" | null>("create");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Task | null>(null);

  useEffect(() => {
    setTasks(loadTasks());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveTasks(tasks);
    }
  }, [tasks, hydrated]);

  const visibleTasks = useMemo(
    () => filterTasks(tasks, filters),
    [tasks, filters],
  );

  function handleCreate(input: CreateTaskInput) {
    const result = createTask(tasks, input);
    if (!result.ok) {
      setFormError(result.error);
      return;
    }

    setTasks(result.data.tasks);
    setFormError(null);
    setFormMode(null);
  }

  function handleUpdate(input: UpdateTaskInput) {
    if (!editingTask) {
      return;
    }

    const result = updateTask(tasks, editingTask.id, input);
    if (!result.ok) {
      setFormError(result.error);
      return;
    }

    setTasks(result.data.tasks);
    setFormError(null);
    setEditingTask(null);
    setFormMode(null);
  }

  function handleStatusChange(id: string, status: TaskStatus) {
    const result = changeTaskStatus(tasks, id, status);
    if (result.ok) {
      setTasks(result.data.tasks);
    }
  }

  function handleDeleteConfirm() {
    if (!deleteTarget) {
      return;
    }

    setTasks(deleteTask(tasks, deleteTarget.id));
    setDeleteTarget(null);
  }

  function openEdit(task: Task) {
    setEditingTask(task);
    setFormMode("edit");
    setFormError(null);
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Suivi de tâches</h1>
        <p>Gérez vos tâches personnelles — mono-utilisateur, sans compte.</p>
      </header>

      <section className="panel" aria-labelledby="create-heading">
        <div className="inline-actions">
          <h2 id="create-heading">Création</h2>
          {formMode !== "create" && (
            <button
              type="button"
              className="primary-button"
              onClick={() => {
                setFormMode("create");
                setEditingTask(null);
                setFormError(null);
              }}
            >
              Nouvelle tâche
            </button>
          )}
        </div>

        {formMode === "create" && (
          <TaskForm
            mode="create"
            error={formError}
            onSubmit={(values) => handleCreate(values)}
            onCancel={() => {
              setFormMode(null);
              setFormError(null);
            }}
          />
        )}
      </section>

      <section className="panel" aria-labelledby="filters-heading">
        <h2 id="filters-heading">Recherche et filtres</h2>
        <div className="filters-row">
          <label htmlFor="search">
            Rechercher
            <input
              id="search"
              type="search"
              placeholder="Rechercher par titre"
              value={filters.search}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  search: event.target.value,
                }))
              }
            />
          </label>

          <label htmlFor="status-filter">
            Statut
            <select
              id="status-filter"
              value={filters.status}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  status: event.target.value as TaskFilters["status"],
                }))
              }
            >
              <option value="all">Tous les statuts</option>
              {ALL_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {STATUS_LABELS[status]}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="priority-filter">
            Priorité
            <select
              id="priority-filter"
              value={filters.priority}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  priority: event.target.value as TaskFilters["priority"],
                }))
              }
            >
              <option value="all">Toutes les priorités</option>
              {ALL_PRIORITIES.map((priority) => (
                <option key={priority} value={priority}>
                  {PRIORITY_LABELS[priority]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="counter-text" aria-live="polite">
          {visibleTasks.length} tâche{visibleTasks.length !== 1 ? "s" : ""}{" "}
          visible{visibleTasks.length !== 1 ? "s" : ""}
        </p>
      </section>

      <section className="panel" aria-labelledby="list-heading">
        <h2 id="list-heading">Liste des tâches</h2>

        {!hydrated ? (
          <p className="empty-state">Chargement des tâches…</p>
        ) : visibleTasks.length === 0 ? (
          <p className="empty-state">
            Aucune tâche à afficher. Créez une tâche ou ajustez vos filtres.
          </p>
        ) : (
          <ul className="task-list">
            {visibleTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={() => openEdit(task)}
                onDelete={() => setDeleteTarget(task)}
                onStatusChange={(status) => handleStatusChange(task.id, status)}
              />
            ))}
          </ul>
        )}
      </section>

      {formMode === "edit" && editingTask && (
        <div className="dialog-backdrop" role="presentation">
          <div
            className="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-dialog-title"
          >
            <h2 id="edit-dialog-title">Modifier la tâche</h2>
            <TaskForm
              mode="edit"
              initialTask={editingTask}
              error={formError}
              onSubmit={(values) => handleUpdate(values)}
              onCancel={() => {
                setEditingTask(null);
                setFormMode(null);
                setFormError(null);
              }}
            />
          </div>
        </div>
      )}

      {deleteTarget && (
        <DeleteConfirmDialog
          taskTitle={deleteTarget.title}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </main>
  );
}

```

---

### Fichier : `projects/task-tracker/app/lib/tasks/constants.ts`

```typescript
import type { TaskPriority, TaskStatus } from "./types";

export const STORAGE_KEY = "task-tracker-tasks";
export const MAX_TITLE_LENGTH = 120;

export const STATUS_LABELS: Record<TaskStatus, string> = {
  todo: "À faire",
  in_progress: "En cours",
  done: "Terminée",
};

export const PRIORITY_LABELS: Record<TaskPriority, string> = {
  low: "Basse",
  normal: "Normale",
  high: "Haute",
};

export const ALL_STATUSES: TaskStatus[] = ["todo", "in_progress", "done"];
export const ALL_PRIORITIES: TaskPriority[] = ["low", "normal", "high"];

```

---

### Fichier : `projects/task-tracker/app/lib/tasks/filters.ts`

```typescript
import type { Task, TaskFilters } from "./types";

export function filterTasks(tasks: Task[], filters: TaskFilters): Task[] {
  const search = filters.search.trim().toLowerCase();

  return tasks.filter((task) => {
    if (filters.status !== "all" && task.status !== filters.status) {
      return false;
    }

    if (filters.priority !== "all" && task.priority !== filters.priority) {
      return false;
    }

    if (search && !task.title.toLowerCase().includes(search)) {
      return false;
    }

    return true;
  });
}

```

---

### Fichier : `projects/task-tracker/app/lib/tasks/storage.ts`

```typescript
import type { Task } from "./types";
import { STORAGE_KEY } from "./constants";

export function loadTasks(storage: Storage | null = getBrowserStorage()): Task[] {
  if (!storage) {
    return [];
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isValidTask);
  } catch {
    return [];
  }
}

export function saveTasks(
  tasks: Task[],
  storage: Storage | null = getBrowserStorage(),
): void {
  if (!storage) {
    return;
  }

  storage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function getBrowserStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
}

function isValidTask(value: unknown): value is Task {
  if (!value || typeof value !== "object") {
    return false;
  }

  const task = value as Partial<Task>;

  return (
    typeof task.id === "string" &&
    typeof task.title === "string" &&
    typeof task.status === "string" &&
    typeof task.priority === "string" &&
    typeof task.createdAt === "string" &&
    typeof task.updatedAt === "string"
  );
}

```

---

### Fichier : `projects/task-tracker/app/lib/tasks/taskService.ts`

```typescript
import type {
  CreateTaskInput,
  Task,
  TaskStatus,
  UpdateTaskInput,
} from "./types";
import {
  normalizeDescription,
  normalizeDueDate,
  validateTitle,
} from "./validation";

export type TaskServiceResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export function createTask(
  tasks: Task[],
  input: CreateTaskInput,
  now: () => string = isoNow,
  idFactory: () => string = createId,
): TaskServiceResult<{ tasks: Task[]; task: Task }> {
  const titleError = validateTitle(input.title);
  if (titleError) {
    return { ok: false, error: titleError };
  }

  const timestamp = now();
  const task: Task = {
    id: idFactory(),
    title: input.title.trim(),
    description: normalizeDescription(input.description),
    status: "todo",
    priority: input.priority ?? "normal",
    dueDate: normalizeDueDate(input.dueDate),
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  return { ok: true, data: { tasks: [task, ...tasks], task } };
}

export function updateTask(
  tasks: Task[],
  id: string,
  input: UpdateTaskInput,
  now: () => string = isoNow,
): TaskServiceResult<{ tasks: Task[]; task: Task }> {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    return { ok: false, error: "Tâche introuvable." };
  }

  const current = tasks[index];
  const nextTitle = input.title !== undefined ? input.title : current.title;
  const titleError = validateTitle(nextTitle);
  if (titleError) {
    return { ok: false, error: titleError };
  }

  const updated: Task = {
    ...current,
    title: nextTitle.trim(),
    description:
      input.description !== undefined
        ? normalizeDescription(input.description)
        : current.description,
    status: input.status ?? current.status,
    priority: input.priority ?? current.priority,
    dueDate:
      input.dueDate !== undefined
        ? normalizeDueDate(input.dueDate)
        : current.dueDate,
    updatedAt: now(),
  };

  const nextTasks = [...tasks];
  nextTasks[index] = updated;

  return { ok: true, data: { tasks: nextTasks, task: updated } };
}

export function changeTaskStatus(
  tasks: Task[],
  id: string,
  status: TaskStatus,
  now: () => string = isoNow,
): TaskServiceResult<{ tasks: Task[]; task: Task }> {
  return updateTask(tasks, id, { status }, now);
}

export function deleteTask(tasks: Task[], id: string): Task[] {
  return tasks.filter((task) => task.id !== id);
}

function isoNow(): string {
  return new Date().toISOString();
}

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `task-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

```

---

### Fichier : `projects/task-tracker/app/lib/tasks/types.ts`

```typescript
export type TaskStatus = "todo" | "in_progress" | "done";
export type TaskPriority = "low" | "normal" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
  priority?: TaskPriority;
  dueDate?: string;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  dueDate?: string | null;
}

export type StatusFilter = TaskStatus | "all";
export type PriorityFilter = TaskPriority | "all";

export interface TaskFilters {
  search: string;
  status: StatusFilter;
  priority: PriorityFilter;
}

```

---

### Fichier : `projects/task-tracker/app/lib/tasks/validation.ts`

```typescript
import { MAX_TITLE_LENGTH } from "./constants";

export function validateTitle(title: string): string | null {
  const trimmed = title.trim();

  if (!trimmed) {
    return "Le titre est obligatoire.";
  }

  if (trimmed.length > MAX_TITLE_LENGTH) {
    return `Le titre ne peut pas dépasser ${MAX_TITLE_LENGTH} caractères.`;
  }

  return null;
}

export function normalizeDescription(description?: string): string | undefined {
  const trimmed = description?.trim();
  return trimmed ? trimmed : undefined;
}

export function normalizeDueDate(dueDate?: string | null): string | undefined {
  if (dueDate === null || dueDate === undefined || dueDate === "") {
    return undefined;
  }

  return dueDate;
}

```

---

### Fichier : `projects/task-tracker/app/__tests__/filters.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { filterTasks } from "@/lib/tasks/filters";
import type { Task } from "@/lib/tasks/types";

const tasks: Task[] = [
  {
    id: "1",
    title: "Préparer la démo",
    status: "todo",
    priority: "high",
    createdAt: "2026-07-13T10:00:00.000Z",
    updatedAt: "2026-07-13T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Répondre aux emails",
    status: "in_progress",
    priority: "normal",
    createdAt: "2026-07-13T10:00:00.000Z",
    updatedAt: "2026-07-13T10:00:00.000Z",
  },
  {
    id: "3",
    title: "Archiver les documents",
    status: "done",
    priority: "low",
    createdAt: "2026-07-13T10:00:00.000Z",
    updatedAt: "2026-07-13T10:00:00.000Z",
  },
];

describe("filterTasks", () => {
  it("filters by case-insensitive title search", () => {
    const result = filterTasks(tasks, {
      search: "DÉMO",
      status: "all",
      priority: "all",
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
  });

  it("filters by status", () => {
    const result = filterTasks(tasks, {
      search: "",
      status: "done",
      priority: "all",
    });

    expect(result.map((task) => task.id)).toEqual(["3"]);
  });

  it("filters by priority", () => {
    const result = filterTasks(tasks, {
      search: "",
      status: "all",
      priority: "high",
    });

    expect(result.map((task) => task.id)).toEqual(["1"]);
  });

  it("combines search, status and priority filters", () => {
    const result = filterTasks(tasks, {
      search: "email",
      status: "in_progress",
      priority: "normal",
    });

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Répondre aux emails");
  });
});

```

---

### Fichier : `projects/task-tracker/app/__tests__/storage.test.ts`

```typescript
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY } from "@/lib/tasks/constants";
import { loadTasks, saveTasks } from "@/lib/tasks/storage";
import type { Task } from "@/lib/tasks/types";

class MemoryStorage {
  private store = new Map<string, string>();

  getItem(key: string): string | null {
    return this.store.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }

  clear(): void {
    this.store.clear();
  }
}

const sampleTask: Task = {
  id: "task-1",
  title: "Tester la persistance",
  status: "todo",
  priority: "normal",
  createdAt: "2026-07-13T10:00:00.000Z",
  updatedAt: "2026-07-13T10:00:00.000Z",
};

describe("storage", () => {
  let storage: MemoryStorage;

  beforeEach(() => {
    storage = new MemoryStorage();
  });

  it("returns an empty list when storage is empty", () => {
    expect(loadTasks(storage as unknown as Storage)).toEqual([]);
  });

  it("persists and reloads tasks", () => {
    saveTasks([sampleTask], storage as unknown as Storage);
    expect(loadTasks(storage as unknown as Storage)).toEqual([sampleTask]);
    expect(storage.getItem(STORAGE_KEY)).toContain("Tester la persistance");
  });

  it("simulates persistence after reload", () => {
    saveTasks([sampleTask], storage as unknown as Storage);

    const reloadedStorage = new MemoryStorage();
    reloadedStorage.setItem(STORAGE_KEY, storage.getItem(STORAGE_KEY)!);

    expect(loadTasks(reloadedStorage as unknown as Storage)).toEqual([sampleTask]);
  });
});

```

---

### Fichier : `projects/task-tracker/app/__tests__/taskService.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  changeTaskStatus,
  createTask,
  deleteTask,
  updateTask,
} from "@/lib/tasks/taskService";
import type { Task } from "@/lib/tasks/types";

const fixedNow = "2026-07-13T10:00:00.000Z";
const fixedId = () => "task-1";

describe("taskService", () => {
  it("creates a task with required title and defaults", () => {
    const result = createTask([], { title: "  Acheter du lait  " }, () => fixedNow, fixedId);

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.data.task).toMatchObject({
      id: "task-1",
      title: "Acheter du lait",
      status: "todo",
      priority: "normal",
      createdAt: fixedNow,
      updatedAt: fixedNow,
    });
    expect(result.data.tasks).toHaveLength(1);
  });

  it("rejects creation without title", () => {
    const result = createTask([], { title: "   " }, () => fixedNow, fixedId);
    expect(result).toEqual({ ok: false, error: "Le titre est obligatoire." });
  });

  it("updates a task and refreshes updatedAt", () => {
    const seed: Task = {
      id: "task-1",
      title: "Ancien titre",
      status: "todo",
      priority: "normal",
      createdAt: fixedNow,
      updatedAt: fixedNow,
    };

    const result = updateTask(
      [seed],
      "task-1",
      {
        title: "Nouveau titre",
        description: "Détail",
        priority: "high",
        dueDate: "2026-07-20",
      },
      () => "2026-07-13T11:00:00.000Z",
    );

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.data.task.title).toBe("Nouveau titre");
    expect(result.data.task.priority).toBe("high");
    expect(result.data.task.updatedAt).toBe("2026-07-13T11:00:00.000Z");
  });

  it("changes task status", () => {
    const seed: Task = {
      id: "task-1",
      title: "Tâche",
      status: "todo",
      priority: "normal",
      createdAt: fixedNow,
      updatedAt: fixedNow,
    };

    const result = changeTaskStatus([seed], "task-1", "in_progress", () => fixedNow);
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.data.task.status).toBe("in_progress");
  });

  it("deletes a task permanently", () => {
    const tasks: Task[] = [
      {
        id: "task-1",
        title: "A",
        status: "todo",
        priority: "normal",
        createdAt: fixedNow,
        updatedAt: fixedNow,
      },
      {
        id: "task-2",
        title: "B",
        status: "done",
        priority: "low",
        createdAt: fixedNow,
        updatedAt: fixedNow,
      },
    ];

    expect(deleteTask(tasks, "task-1")).toHaveLength(1);
    expect(deleteTask(tasks, "task-1")[0].id).toBe("task-2");
  });
});

```

---

### Fichier : `projects/task-tracker/app/__tests__/validation.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { validateTitle } from "@/lib/tasks/validation";
import { MAX_TITLE_LENGTH } from "@/lib/tasks/constants";

describe("validation", () => {
  it("requires a non-empty trimmed title", () => {
    expect(validateTitle("   ")).toBe("Le titre est obligatoire.");
    expect(validateTitle("Tâche valide")).toBeNull();
  });

  it("limits title length", () => {
    const tooLong = "a".repeat(MAX_TITLE_LENGTH + 1);
    expect(validateTitle(tooLong)).toBe(
      `Le titre ne peut pas dépasser ${MAX_TITLE_LENGTH} caractères.`,
    );
  });
});

```

---

## 12. Tests

### Inventaire
| Fichier | Tests | Scénarios |
|---------|-------|-----------|
| `__tests__/taskService.test.ts` | 5 | création, titre obligatoire, modification, statut, suppression |
| `__tests__/filters.test.ts` | 4 | recherche, filtre statut, filtre priorité, combinaison |
| `__tests__/storage.test.ts` | 3 | vide, persistance, rechargement |
| `__tests__/validation.test.ts` | 2 | titre obligatoire, limite 120 caractères |
| **Total** | **14** | |

### Résultat exécution (2026-07-13 17:37 CEST)
```
Test Files  4 passed (4)
Tests  14 passed (14)
```

### Réserve couverture
- Pas de tests E2E navigateur (hors scope MVP)
- Logique UI testée indirectement via services purs

---

## 13. Validations

| Commande | Heure | Code retour | Résultat |
|----------|-------|-------------|----------|
| `npm run lint` | 17:37 CEST | 0 | PASS — aucune erreur |
| `npm run typecheck` | 17:37 CEST | 0 | PASS |
| `npm test` | 17:37 CEST | 0 | PASS — 14/14 |
| `npm run build` | 17:37 CEST | 0 | PASS — build production Next.js |

`npm install` non exécuté — `node_modules` déjà présent et exploitable.

---

## 14. Captures runtime

| Fichier | Dimensions | Taille | SHA-256 | Parcours | Contrat visuel |
|---------|------------|--------|---------|----------|----------------|
| `08-qa-test/runtime-screenshots/desktop-empty-state.png` | 3840x2160 | 154650 B | `d8f89dab32f43734a5727c190b476ce07de1b85bdcf7bf1967d090ce4f6bc522` | État vide + formulaire de création | Conforme |
| `08-qa-test/runtime-screenshots/desktop-with-task.png` | 3840x2160 | 169100 B | `6214c4d835f3df10234f2c3a29db4613900aa02f4551faefa0c18f5f1e3a1f23` | Tâche créée avec badges et actions | Conforme |
| `08-qa-test/runtime-screenshots/desktop-delete-confirmation.png` | 3840x2160 | 201961 B | `2f32dbc9b2fa0fb80add0c0c6dcecde162dd843c77bcf943adeba2a3abeacd60` | Dialogue confirmation suppression | Conforme |
| `08-qa-test/runtime-screenshots/mobile-with-task.png` | 3840x2160 | 151515 B | `6a053466ed9988425ac302a621f8b7338954aeead3527e3241ffb10e96689c17` | Vue mobile 390×844 émulée — tâche visible | Conforme |

Contenu binaire non inclus — métadonnées et hashes uniquement.

---

## 15. Accessibilité

| Élément | Preuve dans le code |
|---------|---------------------|
| Labels formulaires | `htmlFor` + `<label>` dans TaskForm, filtres |
| Boutons explicites | Libellés textuels (« Créer la tâche », « Supprimer définitivement ») |
| Focus visible | `:focus-visible` dans globals.css |
| Structure titres | h1/h2/h3 hiérarchisés |
| Erreurs formulaire | `role="alert"` |
| Dialogue suppression | `role="dialog"`, `aria-modal`, `aria-labelledby` |
| Compteur live | `aria-live="polite"` |
| Limite | Pas d'audit RGAA complet |

---

## 16. Performance

| Point | Statut |
|-------|--------|
| Appels réseau | Aucun en runtime (hors assets statiques Next) |
| localStorage | Lecture/écriture JSON simple |
| Volume cible | < 100 tâches — filtrage en mémoire |
| Build | 106 kB First Load JS page principale |
| Dépendances lourdes | Aucune bibliothèque UI complète |

---

## 17. Dépendances et vulnérabilités

### Dépendances directes
| Package | Version déclarée | Rôle |
|---------|------------------|------|
| next | ^15.3.3 | Framework web |
| react | ^19.1.0 | UI |
| react-dom | ^19.1.0 | Rendu |
| typescript | ^5.8.3 (dev) | Typage |
| vitest | ^3.1.2 (dev) | Tests |
| eslint-config-next | ^15.3.3 (dev) | Lint |

### npm audit (read-only, non modifié)
| Sévérité | Nombre |
|----------|--------|
| moderate | 2 |
| high/critical | 0 |

**Détail :**
1. `postcss` < 8.5.10 — XSS via CSS stringify (transitive via next)
2. `next` — impacté via postcss

**Bloquant MVP local :** Non. Correction reportée hors cycle correctif.

---

## 18. Garde-fous

### Autorisé
- Reconstruction review pack
- Commit/push `sfia/review-handoff` uniquement
- Revalidation technique read-only

### Interdit et non réalisé
- Modification code, cadrage, tests, captures, dépendances
- Commit/push branche projet
- Modification workspace principal

---

## 19. Réserves

- Absence tests E2E
- 2 vulnérabilités modérées npm audit
- Persistance localStorage uniquement (pas de sync)
- Pas de backend
- Limites MVP volontaires

---

## 20. Review Handoff Git

| Élément | Valeur |
|---------|--------|
| Décision | required |
| Branche | `sfia/review-handoff` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| Source locale | `.tmp-sfia-review/chatgpt-review.md` |
| Push autorisé | `origin/sfia/review-handoff` uniquement |
| Message commit | `docs: complete task tracker delivery review handoff` |

*(Section complétée après publication — voir rapport final pour SHA et hashes)*

---

## 21. Verdict

**HANDOFF UPDATED — REMOTE VERIFIED**

Review pack reconstruit avec inventaire exhaustif, contenu intégral des fichiers source et tests, validations, captures documentées, et sections 1–21 complètes.

**Statut :** READY FOR CHATGPT REVIEW

**Instruction ChatGPT :** Lire depuis Git : `sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md`

**Actions interdites sans GO Morris :** modification code, commit branche projet, push branche projet, PR, merge, déploiement.
