# SFIA Review Pack — Task Tracker Delivery Standard borné

**Horodatage :** 2026-07-13 17:28 CEST (Europe/Paris)

---

## Métadonnées d'exécution

| Élément | Valeur |
|---------|--------|
| **Cycle** | Cycle 8 — Delivery / implémentation |
| **Profil SFIA** | Standard |
| **Typologie v2.4** | EVOL |
| **Repository** | sfia-workspace (worktree isolé) |
| **Worktree** | `/Users/morris/Projects/sfia-task-tracker` |
| **Branche projet** | `cadrage/task-tracker-light` |
| **HEAD** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **origin/main** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **Verdict** | READY FOR MORRIS REVIEW |

---

## Workspace principal (inchangé)

| Élément | Valeur |
|---------|--------|
| Chemin | `/Users/morris/Projects/sfia-workspace` |
| Branche | `documentation/sfia-notion-editorial-p0` |
| git status final | `?? .sfia/` ; `?? .tmp-sfia-review/` ; `?? method/sfia-fast-track/documentation/notion/editorial/` |

---

## État Git initial worktree

```
?? .tmp-sfia-review/
?? projects/task-tracker/
```

## État Git final worktree

```
?? .tmp-sfia-review/
?? projects/task-tracker/
```

## git diff --stat

Aucun fichier versionné modifié. Livrables en untracked.

---

## Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `projects/task-tracker/00-framing/task-tracker-cadrage.md`
- `README.md`
- `projects/chantiers360-v2/app/package.json` (convention Next.js)
- `projects/interv360/app/package.json` (convention Vitest)

---

## Décisions Morris validées

| # | Décision | Statut |
|---|----------|--------|
| D1 | Mono-utilisateur | VALIDATED — Morris 2026-07-13 |
| D2 | Périmètre MVP | VALIDATED — Morris 2026-07-13 |
| D3 | Statuts À faire / En cours / Terminée | VALIDATED — Morris 2026-07-13 |
| D4 | Priorités Basse / Normale / Haute | VALIDATED — Morris 2026-07-13 |
| D5 | Suppression définitive avec confirmation | VALIDATED — Morris 2026-07-13 |
| D6 | Delivery Standard borné | VALIDATED — Morris 2026-07-13 |

---

## Stack retenue et justification

| Élément | Choix | Justification |
|---------|-------|---------------|
| Framework | Next.js 15 App Router | Convention alignée `chantiers360-v2/app` |
| Langage | TypeScript | Standard repository |
| UI | React 19 + CSS global simple | Pas de design system requis |
| Persistance | localStorage navigateur | Mono-utilisateur, pas de backend |
| Tests | Vitest | Aligné `interv360`, léger, sans Playwright |
| Backend / DB | Aucun | Hors périmètre MVP |

---

## Chemin applicatif retenu

`projects/task-tracker/app/`

---

## Contrat visuel léger

| Élément | Valeur |
|---------|--------|
| Viewport desktop cible | 1280 × 800 minimum |
| Viewport mobile cible | 390 × 844 |
| Structure de page | En-tête + 3 panneaux empilés (Création, Recherche/filtres, Liste) |
| Hiérarchie | h1 application → h2 sections → h3 titre de tâche |
| Espacement | `--space-sm` 0.75rem, `--space-md` 1rem, `--space-lg` 1.5rem |
| Responsive | Colonne unique ; actions empilées sous 640px |
| État nominal | Liste avec tâches, badges statut/priorité, actions visibles |
| État vide | Message « Aucune tâche à afficher… » |
| Erreur validation | Texte rouge sous le formulaire |
| Composants interactifs | Boutons, champs labelisés, selects, dialogues modaux |
| Accessibilité de base | Labels explicites, focus visible, dialogues `role="dialog"`, `aria-live` sur compteur |

Ce contrat ne constitue pas une baseline design.


---

## Modèle de données

```typescript
Task {
  id: string
  title: string
  description?: string
  status: 'todo' | 'in_progress' | 'done'
  priority: 'low' | 'normal' | 'high'
  dueDate?: string
  createdAt: string
  updatedAt: string
}
```

---

## Architecture technique minimale

- Page Next.js unique (`app/page.tsx`) rendant un composant client `TaskTrackerApp`
- Logique métier pure dans `lib/tasks/` (validation, CRUD, filtres, storage)
- Persistance via `localStorage` clé `task-tracker-tasks`
- Aucun backend, aucune API, aucune base serveur

---

## Dépendances ajoutées

| Package | Rôle |
|---------|------|
| next, react, react-dom | Application web |
| typescript, @types/* | Typage |
| eslint, eslint-config-next | Lint |
| vitest | Tests unitaires |

---

## Fichiers créés

- `projects/task-tracker/app/**` (application)
- `projects/task-tracker/08-qa-test/runtime-screenshots/*.png`
- `.tmp-sfia-review/chatgpt-review.md`

## Fichiers modifiés

- `projects/task-tracker/00-framing/task-tracker-cadrage.md`

---

## Commandes exécutées et résultats

| Commande | Résultat |
|----------|----------|
| `npm install` | Succès — 349 packages |
| `npm run lint` | Succès — aucune erreur |
| `npm run typecheck` | Succès |
| `npm test` | Succès — 14 tests / 4 fichiers |
| `npm run build` | Succès — build production Next.js |
| `npm start` (port 3010) | Succès — application accessible |

---

## Parcours runtime manuel

1. Ouverture `http://localhost:3010` — état vide affiché
2. Création tâche avec titre, description, priorité Haute, échéance 2026-07-20
3. Tâche visible dans la liste avec badges et échéance formatée
4. Dialogue de suppression accessible depuis le bouton Supprimer
5. Persistance via localStorage vérifiée par tests et rechargement implicite

---

## Captures runtime

| Fichier | Description |
|---------|-------------|
| `projects/task-tracker/08-qa-test/runtime-screenshots/desktop-empty-state.png` | Desktop — état vide + formulaire |
| `projects/task-tracker/08-qa-test/runtime-screenshots/desktop-with-task.png` | Desktop — tâche créée |
| `projects/task-tracker/08-qa-test/runtime-screenshots/desktop-delete-confirmation.png` | Desktop — confirmation suppression |
| `projects/task-tracker/08-qa-test/runtime-screenshots/mobile-with-task.png` | Mobile 390×844 — tâche visible |

---

## Comparaison contrat visuel / runtime

| Point contrat | Runtime | Verdict |
|---------------|---------|---------|
| 3 panneaux empilés | Présent | OK |
| État vide | Message affiché | OK |
| Badges statut/priorité | Affichés | OK |
| Formulaire labelisé | Labels visibles | OK |
| Dialogue suppression | Modal centré avec confirmation | OK |
| Responsive mobile | Colonne unique, actions empilées | OK |

---

## Accessibilité vérifiée (base)

- Labels associés aux champs formulaire et filtres
- Boutons avec libellés explicites
- Focus visible via `:focus-visible`
- Structure titres h1/h2/h3
- Erreurs formulaire via `role="alert"`
- Confirmation suppression accessible (dialogue modal)
- Actions non dépendantes de la couleur seule (texte + bordures)

---

## Réserves

- `npm audit` signale 2 vulnérabilités modérées dans la chaîne de dépendances — non bloquant pour MVP local
- Pas de tests E2E navigateur (volontairement hors scope)
- Pas de commit sur la branche projet (GO Morris requis)

---

## Garde-fous appliqués

- MVP non élargi
- Pas de backend ni auth
- Workspace principal non modifié
- Pas de push branche projet
- Handoff limité à `sfia/review-handoff`

---

## Review Handoff Git

| Élément | Valeur |
|---------|--------|
| Décision | required |
| Branche | `sfia/review-handoff` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| Push autorisé | oui — handoff uniquement |

---


---

## Fichier : `projects/task-tracker/00-framing/task-tracker-cadrage.md`

```
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

## Fichier : `projects/task-tracker/app/package.json`

```
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

## Fichier : `projects/task-tracker/app/tsconfig.json`

```
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

## Fichier : `projects/task-tracker/app/next.config.ts`

```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

```

---

## Fichier : `projects/task-tracker/app/vitest.config.ts`

```
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

## Fichier : `projects/task-tracker/app/.eslintrc.json`

```
{
  "extends": "next/core-web-vitals"
}

```

---

## Fichier : `projects/task-tracker/app/README.md`

```
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

## Fichier : `projects/task-tracker/app/app/layout.tsx`

```
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

## Fichier : `projects/task-tracker/app/app/page.tsx`

```
import { TaskTrackerApp } from "@/components/TaskTrackerApp";

export default function HomePage() {
  return <TaskTrackerApp />;
}

```

---

## Fichier : `projects/task-tracker/app/app/globals.css`

```
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

## Fichier : `projects/task-tracker/app/lib/tasks/types.ts`

```
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

## Fichier : `projects/task-tracker/app/lib/tasks/constants.ts`

```
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

## Fichier : `projects/task-tracker/app/lib/tasks/validation.ts`

```
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

## Fichier : `projects/task-tracker/app/lib/tasks/storage.ts`

```
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

## Fichier : `projects/task-tracker/app/lib/tasks/filters.ts`

```
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

## Fichier : `projects/task-tracker/app/lib/tasks/taskService.ts`

```
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

## Fichier : `projects/task-tracker/app/components/TaskTrackerApp.tsx`

```
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

## Fichier : `projects/task-tracker/app/components/TaskForm.tsx`

```
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

## Fichier : `projects/task-tracker/app/components/TaskItem.tsx`

```
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

## Fichier : `projects/task-tracker/app/components/DeleteConfirmDialog.tsx`

```
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

## Fichier : `projects/task-tracker/app/__tests__/taskService.test.ts`

```
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

## Fichier : `projects/task-tracker/app/__tests__/filters.test.ts`

```
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

## Fichier : `projects/task-tracker/app/__tests__/storage.test.ts`

```
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

## Fichier : `projects/task-tracker/app/__tests__/validation.test.ts`

```
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
