# Review Pack Full — EventOps POC visible slice 01

## 1. Date et heure
2026-07-31 14:38:07 CEST (Europe/Paris)

## 2. Cycle, profil et typologie
- Cycle : 8 — Delivery / implémentation
- Profil SFIA : Standard
- Typologie v2.4 : INC — incrément fonctionnel borné
- Niveau QA : Standard local
- Review pack : Full

## 3. Repository
mcleland147/sfia-workspace (`/Users/morris/Projects/sfia-workspace`)

## 4. Branche projet
`delivery/eventops-poc-visible-slice-01`

## 5. HEAD initial
`e1befcb80ed5e3c789a7de9036a8207d6b3e6771` (égal à origin/main au moment du switch)

## 6. origin/main initial
`e1befcb80ed5e3c789a7de9036a8207d6b3e6771`
(valeur préparée ChatGPT : e1befcb80ed5e3c789a7de9036a8207d6b3e6771 — **identique**)

## 7. Working tree initial
Avant création de branche : working tree tracked propre ; seul untracked `.tmp-sfia-review/` présent.
Branche précédente observée : `delivery/sfia-studio-control-tower-fast-track`.
Après Truth Check : création `delivery/eventops-poc-visible-slice-01` depuis `origin/main`.
`projects/eventops-poc` n’existait pas.
Aucun fichier staged.

## 8. Sources consultées
1. README.md
2. projects/README.md
3. projects/interv360/README.md
4. projects/sfia-studio/app/package.json (+ tsconfig/vitest/eslint/next.config en lecture stack)
5. prompts/templates/sfia-cycle-execution-template.md
6. method/sfia-fast-track/core/sfia-cycle-routing-guide.md
7. method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
8. method/sfia-fast-track/core/sfia-rules-and-guardrails.md
9. method/sfia-fast-track/checklists/sfia-validation-checklist.md
10. method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
11. method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
12. scripts/sfia/README.md

## 9. Sections réellement utilisées
- Template exécution : périmètre borné, review pack Full, handoff publish-in-cycle, QA Standard
- Routing guide : cycle 8 Delivery, handoff required
- Operating model : Cursor exécuteur, Git source de vérité, one useful result
- Guardrails : un cycle = un résultat, scope before execution
- Validation checklist : contrôles lint/typecheck/tests/build + périmètre
- Cycles method candidate : type Delivery + profil Standard + typologie INC
- CKC synthetic map : cycle 8 Delivery — anti scope creep
- scripts/sfia README : publisher canonique Review Handoff
- sfia-studio package.json : versions Next/React/Vitest de référence (sans copie d’identité)

## 10. Objectif et périmètre
Objectif : prototype local interactif EventOps POC (brief → tâches déterministes → rétroplanning → affectation → exécution → validation manager).
Périmètre autorisé uniquement : `projects/eventops-poc/**` et `.tmp-sfia-review/chatgpt-review.md`.
Hors périmètre : backend, auth, API, Supabase, IA, notifications, Figma, commit/push/PR projet.

## 11. Fichiers créés
- `projects/eventops-poc/01-cadrage/01-fast-track-poc-contract.md`- `projects/eventops-poc/README.md`- `projects/eventops-poc/app/.gitignore`- `projects/eventops-poc/app/__tests__/generate-tasks.test.ts`- `projects/eventops-poc/app/__tests__/workflow.test.ts`- `projects/eventops-poc/app/app/globals.css`- `projects/eventops-poc/app/app/layout.tsx`- `projects/eventops-poc/app/app/page.tsx`- `projects/eventops-poc/app/components/EventOpsApp.tsx`- `projects/eventops-poc/app/eslint.config.mjs`- `projects/eventops-poc/app/lib/date-utils.ts`- `projects/eventops-poc/app/lib/generate-tasks.ts`- `projects/eventops-poc/app/lib/indicators.ts`- `projects/eventops-poc/app/lib/labels.ts`- `projects/eventops-poc/app/lib/storage.ts`- `projects/eventops-poc/app/lib/task-rules.ts`- `projects/eventops-poc/app/lib/team.ts`- `projects/eventops-poc/app/lib/types.ts`- `projects/eventops-poc/app/lib/validate-brief.ts`- `projects/eventops-poc/app/lib/workflow.ts`- `projects/eventops-poc/app/next-env.d.ts`- `projects/eventops-poc/app/next.config.ts`- `projects/eventops-poc/app/package-lock.json`- `projects/eventops-poc/app/package.json`- `projects/eventops-poc/app/tsconfig.json`- `projects/eventops-poc/app/vitest.config.ts`
## 12. Fichiers modifiés
Aucun fichier existant modifié hors périmètre. Tous les fichiers listés sont des créations.

## 13–14. Contenu complet des fichiers documentaires et sources

### `projects/eventops-poc/01-cadrage/01-fast-track-poc-contract.md`

```markdown
# Contrat Fast Track — EventOps POC (tranche visible 01)

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-31 14:31 Europe/Paris |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Standard |
| **Typologie v2.4** | INC |
| **Branche** | `delivery/eventops-poc-visible-slice-01` |
| **Statut** | Prototype local de validation méthodologique |

## Observation initiale

Morris a donné le GO le 31 juillet 2026 pour cadrer et livrer rapidement un prototype local de pilotage opérationnel d’événements. Le besoin immédiat n’est pas une plateforme complète, mais une première tranche démontrable de la boucle brief → tâches → rétroplanning → affectation → exécution → validation.

## Problème à résoudre

Les équipes événementielles peinent à transformer un brief en plan d’action opérationnel cohérent, avec responsabilités, échéances relatives à la date J, et un circuit simple de validation. Sans outil, la méthode reste implicite et difficile à tester.

## Utilisateurs (simulation locale)

| Rôle simulé | Persona fictive | Intention |
|-------------|-----------------|-----------|
| Manager opérationnelle | Sarah | Cadre l’événement, affecte, valide |
| Collaborateur | Louis | Exécute et soumet des tâches |
| Collaboratrice | Amina | Exécute et soumet des tâches |

## Proposition de valeur

En quelques minutes, un brief local produit un plan de tâches déterministe, un rétroplanning lisible et un circuit d’affectation / validation démontrable — sans backend ni authentification.

## Périmètre fonctionnel

- Formulaire de cadre événementiel minimal.
- Génération déterministe de tâches (socle + règles conditionnelles).
- Statuts et transitions manager / collaborateur.
- Affectation unitaire et en masse.
- Vue collaborateur (pool + tâches assignées).
- Validation / réouverture manager.
- Vues Liste et Rétroplanning.
- Tableau de bord d’indicateurs.
- Persistance `localStorage` + réinitialisation.
- Événement exemple chargeable.

## Hors périmètre

Authentification réelle ; comptes ; backend ; API ; Supabase ; base de données ; sync temps réel ; emails / SMS / push ; calendrier ; modèle IA ; appels réseau métier ; documents / pièces jointes ; fournisseurs complets ; facturation / paiement ; mobile natif ; déploiement ; CI/CD ; observabilité prod ; design premium ; Figma ; pixel-perfect.

## Hypothèses

- Une simulation de rôle locale suffit pour démontrer le workflow.
- Un moteur de règles déterministe suffit pour valider la méthode (pas d’IA).
- `localStorage` suffit pour une démo mono-navigateur.
- Les noms Sarah / Louis / Amina sont fictifs et adéquats pour le POC.
- Desktop-first est acceptable pour cette tranche.

## Règles de génération

Socle commun : brief, budget, déroulé, invitations, inscriptions, logistique, briefing équipe, contrôle final, jour J, bilan.

Conditionnelles :

- présentiel / hybride → lieu, aménagement, accueil physique ;
- distanciel / hybride → plateforme, test technique, consignes ;
- ≥ 50 participants → flux, capacité, plan d’accueil ;
- budget ≥ 5 000 € → prestataires, suivi budgétaire ;
- budget ≥ 15 000 € → validation managériale renforcée, contrôle contractuel (démo) ;
- conférence / lancement → communication externe, intervenants ;
- événement interne → communication interne, disponibilités équipe.

Les échéances sont calculées en décalage relatif à la date de l’événement (J-x / J+x). Une échéance dépassée est signalée sans mutation automatique du statut métier.

## Critères de succès

- Prototype local interactif démontrable.
- CA-01 à CA-16 satisfaits (ou réserves non bloquantes documentées).
- Lint, typecheck, tests et build verts.
- Review pack Full + Review Handoff publié et vérifié à distance.
- Aucun commit / push / PR / merge de la branche projet dans ce cycle.

## Risques

| Risque | Mitigation |
|--------|------------|
| Scope creep vers produit complet | Périmètre fermé + gates Morris |
| Dates d’exemple obsolètes | Date exemple calculée dynamiquement dans le futur |
| Confusion POC / MVP | Distinction explicite dans README et contrat |
| Persistance fragile | Isolation storage + reset visible |

## Inconnues reportées

- Stack de production cible.
- Besoin réel d’un backend et d’une auth.
- Nom commercial / marque.
- Place éventuelle d’un modèle IA.
- Multi-tenant et notifications externes.

## Gates Morris

- **GO déjà donné** : exécution locale de cette tranche (31 juillet 2026).
- **Nouveau GO obligatoire** avant : backend, API, auth, Supabase, IA, notification externe, modification d’un autre projet, push de la branche projet, PR ou merge.
- Push L3 Review Handoff autorisé uniquement sur `sfia/review-handoff`.

## Trajectoire suivante candidate

Revue fonctionnelle Morris du prototype local → décision de clôture POC, d’une tranche UI suivante, ou d’un GO backend (hors scope tant que non décidé).

## Décisions validées

- Livrer un POC local démontrable de la boucle opérationnelle.
- Stack locale Next.js 15 / React 19 / TypeScript / Vitest / localStorage.
- Personas fictives Sarah / Louis / Amina.
- Typologie INC, profil Standard, cycle Delivery.
- Pas de commit / push projet dans ce cycle.

## Décisions non validées

- Nom commercial.
- Stack de production.
- Supabase.
- Architecture backend.
- Modèle IA.
- Multi-tenant.
- Notification externe.
- Déploiement.
- Modèle économique.
```

### `projects/eventops-poc/README.md`

```markdown
# EventOps POC

Prototype local de validation méthodologique pour le pilotage opérationnel d’événements.

**Statut :** prototype local de validation méthodologique — **POC ≠ MVP production ≠ produit cible**.

**Nom de travail technique :** EventOps POC. Ce nom n’est pas une décision de marque.

## Finalité

Valider, en local et sans backend, la boucle métier :

brief événementiel → génération déterministe des tâches → rétroplanning → affectation équipe → exécution collaborateur → validation manager.

## Ce que le POC valide

- Un brief événementiel minimal peut produire un plan de tâches déterministe.
- Les règles conditionnelles (format, capacité, budget, typologie) s’appliquent de façon testable.
- Un manager peut affecter, filtrer, valider et rouvrir.
- Un collaborateur peut récupérer, exécuter, bloquer, observer et soumettre.
- Le rétroplanning et le tableau de bord reflètent l’état local.
- La persistance navigateur (`localStorage`) suffit pour une démo rechargeable.

## Ce que le POC ne valide pas

- Authentification réelle, multi-utilisateur réseau, backend, API, Supabase.
- Notifications externes, calendrier, IA, facturation, fournisseurs complets.
- Déploiement, CI/CD, observabilité de production, design premium ou Figma.
- Un modèle économique ou un nom commercial.

## Stack

| Élément | Choix |
|---------|--------|
| Framework | Next.js 15 |
| UI | React 19 + CSS local |
| Langage | TypeScript strict |
| Tests | Vitest |
| Persistance | `localStorage` uniquement |
| Services externes | aucun |

## Installation

```bash
cd projects/eventops-poc/app
npm install
```

## Lancement

```bash
npm run dev
```

Ouvrir l’URL affichée (port `3030` par défaut).

## Tests et contrôles qualité

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Limites

- Simulation de rôles locale (Sarah / Louis / Amina), pas d’auth.
- Données fictives uniquement.
- Pas de synchronisation multi-onglets garantie.
- Interface desktop-first fonctionnelle, non premium.

## Données locales

Toutes les données sont **locales et de démonstration**. Aucune collecte distante, aucune télémétrie, aucune donnée personnelle réelle. La persistance vit uniquement dans le navigateur (`localStorage`). L’action **Réinitialiser la démonstration** efface cet état après confirmation.

## Structure du projet

```text
projects/eventops-poc/
├── README.md
├── 01-cadrage/
│   └── 01-fast-track-poc-contract.md
└── app/
    ├── app/                 # Next.js App Router (page unique)
    ├── components/          # Vues UI
    ├── lib/                 # Types, moteur, workflow, storage
    └── __tests__/           # Tests unitaires métier
```

## Scénario de démonstration

1. Cliquer **Charger l’exemple** (Séminaire annuel hybride, 80 participants, 12 000 €).
2. Générer les tâches — vérifier le socle + règles hybride / capacité / budget.
3. En rôle **Sarah**, sélectionner au moins deux tâches et les attribuer à **Louis**.
4. Passer en rôle **Louis** : démarrer, ajouter une observation, soumettre.
5. Revenir en **Sarah** : valider ou rouvrir.
6. Consulter **Rétroplanning** et **Tableau de bord**.
7. Recharger la page : l’état doit persister.
8. **Réinitialiser la démonstration** pour repartir propre.

## Prochaines décisions candidates (Morris)

- Poursuivre une tranche UI supplémentaire vs clôturer le POC.
- Autoriser ou non un backend / auth / persistance serveur.
- Décider d’un nom de produit (hors scope actuel).
- Arbitrer stack de production (hors scope actuel).

## Distinction explicite

| Artefact | Rôle |
|----------|------|
| **POC** (ce dépôt) | Preuve locale de méthode et de boucle métier |
| **MVP production** | Livrable produit minimal déployable — **non atteint** |
| **Produit cible** | Vision produit long terme — **non définie ici** |
```

### `projects/eventops-poc/app/.gitignore`

```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Next.js
.next/
out/

# TypeScript
*.tsbuildinfo

# Test / coverage
coverage/

# Debug / env
npm-debug.log*
.env*
!.env.example

# OS / IDE
.DS_Store
*.pem
```

### `projects/eventops-poc/app/__tests__/generate-tasks.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { generateTasksFromBrief, countTasksByRuleOriginPrefix } from "@/lib/generate-tasks";
import { createDemoEvent } from "@/lib/storage";
import type { EventBrief } from "@/lib/types";
import { addDays, futureDemoDate } from "@/lib/date-utils";

const FIXED_NOW = new Date(2026, 6, 31, 12, 0, 0);

function baseBrief(overrides: Partial<EventBrief> = {}): EventBrief {
  return {
    name: "Événement test",
    typology: "atelier",
    objective: "Objectif de test",
    date: futureDemoDate(FIXED_NOW, 60),
    startTime: "09:00",
    endTime: "12:00",
    format: "presentiel",
    targetAudience: "Équipe démo",
    expectedParticipants: 20,
    indicativeBudget: 1000,
    location: "Salle A",
    teamMemberIds: ["sarah", "louis", "amina"],
    ...overrides,
  };
}

describe("generateTasksFromBrief", () => {
  it("produit le socle commun (≥ 10 tâches pour un brief minimal)", () => {
    const tasks = generateTasksFromBrief(baseBrief(), FIXED_NOW);
    expect(tasks.length).toBeGreaterThanOrEqual(10);
    expect(countTasksByRuleOriginPrefix(tasks, "core.")).toBe(10);
  });

  it("applique la règle présentiel", () => {
    const tasks = generateTasksFromBrief(
      baseBrief({ format: "presentiel" }),
      FIXED_NOW,
    );
    expect(countTasksByRuleOriginPrefix(tasks, "format.onsite.")).toBe(3);
    expect(countTasksByRuleOriginPrefix(tasks, "format.remote.")).toBe(0);
  });

  it("applique la règle distanciel", () => {
    const tasks = generateTasksFromBrief(
      baseBrief({ format: "distanciel", location: "" }),
      FIXED_NOW,
    );
    expect(countTasksByRuleOriginPrefix(tasks, "format.remote.")).toBe(3);
    expect(countTasksByRuleOriginPrefix(tasks, "format.onsite.")).toBe(0);
  });

  it("applique la règle hybride", () => {
    const tasks = generateTasksFromBrief(
      baseBrief({ format: "hybride" }),
      FIXED_NOW,
    );
    expect(countTasksByRuleOriginPrefix(tasks, "format.onsite.")).toBe(3);
    expect(countTasksByRuleOriginPrefix(tasks, "format.remote.")).toBe(3);
  });

  it("applique le seuil de 50 participants", () => {
    const below = generateTasksFromBrief(
      baseBrief({ expectedParticipants: 49 }),
      FIXED_NOW,
    );
    const above = generateTasksFromBrief(
      baseBrief({ expectedParticipants: 50 }),
      FIXED_NOW,
    );
    expect(countTasksByRuleOriginPrefix(below, "capacity.")).toBe(0);
    expect(countTasksByRuleOriginPrefix(above, "capacity.")).toBe(3);
  });

  it("applique le seuil budgétaire de 5 000 euros", () => {
    const below = generateTasksFromBrief(
      baseBrief({ indicativeBudget: 4999 }),
      FIXED_NOW,
    );
    const above = generateTasksFromBrief(
      baseBrief({ indicativeBudget: 5000 }),
      FIXED_NOW,
    );
    expect(countTasksByRuleOriginPrefix(below, "budget.5k.")).toBe(0);
    expect(countTasksByRuleOriginPrefix(above, "budget.5k.")).toBe(2);
  });

  it("applique le seuil budgétaire de 15 000 euros", () => {
    const below = generateTasksFromBrief(
      baseBrief({ indicativeBudget: 14999 }),
      FIXED_NOW,
    );
    const above = generateTasksFromBrief(
      baseBrief({ indicativeBudget: 15000 }),
      FIXED_NOW,
    );
    expect(countTasksByRuleOriginPrefix(below, "budget.15k.")).toBe(0);
    expect(countTasksByRuleOriginPrefix(above, "budget.15k.")).toBe(2);
    expect(countTasksByRuleOriginPrefix(above, "budget.5k.")).toBe(2);
  });

  it("calcule les dates relativement à la date de l’événement", () => {
    const eventDate = futureDemoDate(FIXED_NOW, 40);
    const tasks = generateTasksFromBrief(baseBrief({ date: eventDate }), FIXED_NOW);
    for (const task of tasks) {
      expect(task.dueDate).toBe(addDays(eventDate, task.offsetDays));
    }
  });

  it("garantit l’unicité des ids", () => {
    const tasks = generateTasksFromBrief(createDemoEvent(FIXED_NOW), FIXED_NOW);
    const ids = tasks.map((task) => task.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("ne mute pas l’entrée", () => {
    const brief = baseBrief({ format: "hybride", expectedParticipants: 80 });
    const snapshot = JSON.stringify(brief);
    generateTasksFromBrief(brief, FIXED_NOW);
    expect(JSON.stringify(brief)).toBe(snapshot);
  });

  it("déclenche hybride + capacité + budget 5k pour l’événement exemple", () => {
    const demo = createDemoEvent(FIXED_NOW);
    const tasks = generateTasksFromBrief(demo, FIXED_NOW);
    expect(tasks.length).toBeGreaterThanOrEqual(10);
    expect(countTasksByRuleOriginPrefix(tasks, "format.onsite.")).toBe(3);
    expect(countTasksByRuleOriginPrefix(tasks, "format.remote.")).toBe(3);
    expect(countTasksByRuleOriginPrefix(tasks, "capacity.")).toBe(3);
    expect(countTasksByRuleOriginPrefix(tasks, "budget.5k.")).toBe(2);
    expect(countTasksByRuleOriginPrefix(tasks, "budget.15k.")).toBe(0);
  });
});
```

### `projects/eventops-poc/app/__tests__/workflow.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { generateTasksFromBrief } from "@/lib/generate-tasks";
import { createDemoEvent } from "@/lib/storage";
import {
  assignTasks,
  claimAvailableTask,
  startTask,
  addObservation,
  submitTask,
  validateTask,
  reopenTask,
} from "@/lib/workflow";
import { computeIndicators } from "@/lib/indicators";

const FIXED_NOW = new Date(2026, 6, 31, 12, 0, 0);

function seededTasks() {
  return generateTasksFromBrief(createDemoEvent(FIXED_NOW), FIXED_NOW);
}

describe("workflow métier", () => {
  it("affecte en masse au moins deux tâches à Louis", () => {
    const tasks = seededTasks();
    const ids = [tasks[0].id, tasks[1].id];
    const next = assignTasks(tasks, ids, "louis", "sarah", FIXED_NOW);
    const assigned = next.filter((task) => ids.includes(task.id));
    expect(assigned).toHaveLength(2);
    expect(assigned.every((task) => task.assigneeId === "louis")).toBe(true);
    expect(assigned.every((task) => task.status === "attribuee")).toBe(true);
  });

  it("permet de récupérer une tâche disponible", () => {
    const tasks = seededTasks();
    const available = tasks.find((task) => task.status === "disponible");
    expect(available).toBeDefined();
    const next = claimAvailableTask(tasks, available!.id, "amina", FIXED_NOW);
    const claimed = next.find((task) => task.id === available!.id)!;
    expect(claimed.assigneeId).toBe("amina");
    expect(claimed.status).toBe("attribuee");
  });

  it("permet au collaborateur de soumettre une tâche", () => {
    let tasks = seededTasks();
    const taskId = tasks[0].id;
    tasks = assignTasks(tasks, [taskId], "louis", "sarah", FIXED_NOW);
    tasks = startTask(tasks, taskId, "louis", FIXED_NOW);
    tasks = addObservation(tasks, taskId, "louis", "Travail terminé", FIXED_NOW);
    tasks = submitTask(tasks, taskId, "louis", "Prêt pour revue", FIXED_NOW);
    const submitted = tasks.find((task) => task.id === taskId)!;
    expect(submitted.status).toBe("soumise");
    expect(submitted.observations.some((item) => item.kind === "submit")).toBe(true);
  });

  it("permet au manager de valider une tâche soumise", () => {
    let tasks = seededTasks();
    const taskId = tasks[0].id;
    tasks = assignTasks(tasks, [taskId], "louis", "sarah", FIXED_NOW);
    tasks = startTask(tasks, taskId, "louis", FIXED_NOW);
    tasks = submitTask(tasks, taskId, "louis", "", FIXED_NOW);
    tasks = validateTask(tasks, taskId, "sarah", FIXED_NOW);
    expect(tasks.find((task) => task.id === taskId)!.status).toBe("validee");
  });

  it("permet au manager de rouvrir avec observation conservée", () => {
    let tasks = seededTasks();
    const taskId = tasks[0].id;
    tasks = assignTasks(tasks, [taskId], "louis", "sarah", FIXED_NOW);
    tasks = startTask(tasks, taskId, "louis", FIXED_NOW);
    tasks = submitTask(tasks, taskId, "louis", "", FIXED_NOW);
    tasks = reopenTask(tasks, taskId, "sarah", "Compléter la checklist", FIXED_NOW);
    const reopened = tasks.find((task) => task.id === taskId)!;
    expect(reopened.status).toBe("en_cours");
    expect(
      reopened.observations.some(
        (item) => item.kind === "reopen" && item.text.includes("Compléter"),
      ),
    ).toBe(true);
  });

  it("calcule les indicateurs après changements de statut", () => {
    let tasks = seededTasks();
    const before = computeIndicators(tasks, FIXED_NOW);
    expect(before.total).toBe(tasks.length);
    expect(before.validee).toBe(0);

    const taskId = tasks[0].id;
    tasks = assignTasks(tasks, [taskId], "louis", "sarah", FIXED_NOW);
    tasks = startTask(tasks, taskId, "louis", FIXED_NOW);
    tasks = submitTask(tasks, taskId, "louis", "", FIXED_NOW);
    tasks = validateTask(tasks, taskId, "sarah", FIXED_NOW);

    const after = computeIndicators(tasks, FIXED_NOW);
    expect(after.validee).toBe(1);
    expect(after.soumise).toBe(0);
    expect(after.progressPercent).toBe(Math.round((1 / after.total) * 100));
    expect(after.byMember.louis).toBeGreaterThanOrEqual(1);
  });
});
```

### `projects/eventops-poc/app/app/globals.css`

```css
:root {
  --bg: #f3f6f4;
  --bg-accent: #e7efe9;
  --surface: #ffffff;
  --ink: #1c2a24;
  --muted: #5b6b63;
  --line: #c9d6cf;
  --brand: #1f5c45;
  --brand-soft: #d7ebe1;
  --warn: #8a5a00;
  --warn-bg: #fff4d6;
  --danger: #8b2e2e;
  --danger-bg: #f8e3e3;
  --ok: #1f5c45;
  --ok-bg: #d7ebe1;
  --focus: #0b6bcb;
  --radius: 10px;
  --shadow: 0 1px 2px rgba(28, 42, 36, 0.06);
  --font: "Segoe UI", "IBM Plex Sans", "Helvetica Neue", sans-serif;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background:
    radial-gradient(circle at top left, #dfece5 0%, transparent 45%),
    linear-gradient(180deg, #f7faf8 0%, var(--bg) 40%, #eef3f0 100%);
  color: var(--ink);
  font-family: var(--font);
}

a {
  color: var(--brand);
}

button,
input,
select,
textarea {
  font: inherit;
}

button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
a:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 2px;
}

.app-shell {
  max-width: 1180px;
  margin: 0 auto;
  padding: 1.25rem 1.25rem 3rem;
}

.topbar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}

.brand-block h1 {
  margin: 0;
  font-size: 1.75rem;
  letter-spacing: -0.02em;
  color: var(--brand);
}

.brand-block p {
  margin: 0.35rem 0 0;
  color: var(--muted);
  max-width: 42rem;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.55rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.8rem;
}

.panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1rem;
}

.nav-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.nav-tabs button {
  border: 1px solid var(--line);
  background: var(--bg-accent);
  color: var(--ink);
  border-radius: 8px;
  padding: 0.55rem 0.85rem;
  cursor: pointer;
}

.nav-tabs button[aria-selected="true"] {
  background: var(--brand);
  border-color: var(--brand);
  color: #fff;
}

.role-switch {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.role-switch button {
  border: 1px solid var(--line);
  background: var(--surface);
  border-radius: 8px;
  padding: 0.45rem 0.7rem;
  cursor: pointer;
}

.role-switch button[aria-pressed="true"] {
  background: var(--brand-soft);
  border-color: var(--brand);
  color: var(--brand);
  font-weight: 600;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.btn {
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  border-radius: 8px;
  padding: 0.55rem 0.85rem;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--brand);
  border-color: var(--brand);
  color: #fff;
}

.btn-danger {
  background: var(--danger-bg);
  border-color: #e0b0b0;
  color: var(--danger);
}

.grid-2 {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.field-full {
  grid-column: 1 / -1;
}

.field label {
  font-size: 0.9rem;
  font-weight: 600;
}

.field input,
.field select,
.field textarea {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.55rem 0.65rem;
  background: #fff;
}

.field textarea {
  min-height: 4.5rem;
  resize: vertical;
}

.checkbox-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.checkbox-row label {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 500;
}

.alert {
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
  margin: 0.75rem 0;
  border: 1px solid;
}

.alert-error {
  background: var(--danger-bg);
  border-color: #e0b0b0;
  color: var(--danger);
}

.alert-info {
  background: var(--brand-soft);
  border-color: #b7d7c8;
  color: var(--brand);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
}

.stat {
  background: var(--bg-accent);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.75rem;
}

.stat .label {
  color: var(--muted);
  font-size: 0.8rem;
}

.stat .value {
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 0.2rem;
}

.table-wrap {
  overflow-x: auto;
}

table.tasks {
  width: 100%;
  border-collapse: collapse;
}

table.tasks th,
table.tasks td {
  text-align: left;
  padding: 0.55rem 0.45rem;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
  font-size: 0.92rem;
}

table.tasks th {
  color: var(--muted);
  font-weight: 600;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 999px;
  padding: 0.15rem 0.55rem;
  border: 1px solid var(--line);
  font-size: 0.8rem;
  background: #fff;
}

.status-pill::before {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--muted);
}

.status-disponible::before { background: #6b7c74; }
.status-attribuee::before { background: #3b6ea5; }
.status-en_cours::before { background: #c07a16; }
.status-bloquee::before { background: var(--danger); }
.status-soumise::before { background: #6b4ea3; }
.status-validee::before { background: var(--ok); }

.late-flag {
  display: inline-block;
  margin-left: 0.35rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  background: var(--warn-bg);
  color: var(--warn);
  font-size: 0.75rem;
  border: 1px solid #e6d19a;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  gap: 0.75rem;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.75rem;
  background: #fff;
  cursor: pointer;
  text-align: left;
  width: 100%;
}

.timeline-item.late {
  border-color: #e6d19a;
  background: #fffaf0;
}

.timeline-item.selected {
  border-color: var(--brand);
  box-shadow: inset 0 0 0 1px var(--brand);
}

.offset {
  font-weight: 700;
  color: var(--brand);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}

.filters .field {
  min-width: 10rem;
}

.detail {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.detail h3 {
  margin: 0;
}

.muted {
  color: var(--muted);
}

.obs-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.obs-list li {
  border-left: 3px solid var(--brand);
  padding-left: 0.65rem;
  background: var(--bg-accent);
  border-radius: 0 6px 6px 0;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  padding-right: 0.5rem;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.inline-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 900px) {
  .grid-2,
  .form-grid,
  .stats {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }
}
```

### `projects/eventops-poc/app/app/layout.tsx`

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EventOps POC",
  description:
    "Prototype local de pilotage opérationnel d’événements — données de démonstration uniquement.",
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

### `projects/eventops-poc/app/app/page.tsx`

```typescript
"use client";

import { EventOpsApp } from "@/components/EventOpsApp";

export default function HomePage() {
  return <EventOpsApp />;
}
```

### `projects/eventops-poc/app/components/EventOpsApp.tsx`

```typescript
"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  ActiveRole,
  AppState,
  EventBrief,
  MainView,
  Task,
  TaskCategory,
  TaskStatus,
  TeamMemberId,
} from "@/lib/types";
import { TEAM_MEMBERS, displayMemberName, isManagerRole } from "@/lib/team";
import {
  CATEGORY_LABELS,
  FORMAT_LABELS,
  PRIORITY_LABELS,
  STATUS_LABELS,
  TYPOLOGY_LABELS,
  emptyBrief,
} from "@/lib/labels";
import { validateEventBrief } from "@/lib/validate-brief";
import { generateTasksFromBrief } from "@/lib/generate-tasks";
import { computeIndicators, sortTasksByDueDate } from "@/lib/indicators";
import { formatOffsetLabel, isPastDue } from "@/lib/date-utils";
import {
  clearState,
  createDemoEvent,
  createEmptyState,
  loadState,
  saveState,
} from "@/lib/storage";
import {
  addObservation,
  assignTasks,
  blockTask,
  claimAvailableTask,
  reopenTask,
  resumeBlockedTask,
  startTask,
  submitTask,
  validateTask,
} from "@/lib/workflow";

const VIEWS: { id: MainView; label: string }[] = [
  { id: "brief", label: "1. Brief" },
  { id: "dashboard", label: "2. Tableau de bord" },
  { id: "liste", label: "3. Liste" },
  { id: "retroplanning", label: "4. Rétroplanning" },
  { id: "manager", label: "5. Manager" },
  { id: "collaborateur", label: "6. Collaborateur" },
];

export function EventOpsApp() {
  const [hydrated, setHydrated] = useState(false);
  const [state, setState] = useState<AppState>(createEmptyState);
  const [view, setView] = useState<MainView>("brief");
  const [draft, setDraft] = useState<EventBrief>(emptyBrief);
  const [issues, setIssues] = useState<string[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all");
  const [assigneeFilter, setAssigneeFilter] = useState<TeamMemberId | "all" | "none">(
    "all",
  );
  const [categoryFilter, setCategoryFilter] = useState<TaskCategory | "all">("all");
  const [observationText, setObservationText] = useState("");
  const [blockReason, setBlockReason] = useState("");
  const [reopenReason, setReopenReason] = useState("");
  const [assignTarget, setAssignTarget] = useState<TeamMemberId>("louis");

  useEffect(() => {
    const loaded = loadState();
    setState(loaded);
    if (loaded.event) {
      setDraft(loaded.event);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    saveState(state);
  }, [state, hydrated]);

  const indicators = useMemo(
    () => computeIndicators(state.tasks),
    [state.tasks],
  );

  const selectedTask = state.tasks.find((task) => task.id === selectedTaskId) ?? null;

  function flash(text: string) {
    setMessage(text);
  }

  function updateState(partial: Partial<AppState>) {
    setState((current) => ({ ...current, ...partial }));
  }

  function handleLoadDemo() {
    const demo = createDemoEvent();
    setDraft(demo);
    setIssues([]);
    flash("Exemple chargé — générez les tâches pour démarrer.");
  }

  function handleGenerate() {
    const validation = validateEventBrief(draft);
    if (validation.length > 0) {
      setIssues(validation.map((item) => item.message));
      return;
    }
    setIssues([]);
    const tasks = generateTasksFromBrief(draft);
    updateState({
      event: draft,
      tasks,
      generatedAt: new Date().toISOString(),
    });
    setSelectedIds([]);
    setSelectedTaskId(tasks[0]?.id ?? null);
    setView("dashboard");
    flash(`${tasks.length} tâches générées de façon déterministe.`);
  }

  function handleReset() {
    const confirmed = window.confirm(
      "Réinitialiser la démonstration ? L’état local sera effacé.",
    );
    if (!confirmed) {
      return;
    }
    clearState();
    setState(createEmptyState());
    setDraft(emptyBrief());
    setSelectedIds([]);
    setSelectedTaskId(null);
    setIssues([]);
    setView("brief");
    flash("Démonstration réinitialisée.");
  }

  function runWorkflow(action: () => Task[]) {
    try {
      const tasks = action();
      updateState({ tasks });
      setObservationText("");
      setBlockReason("");
      setReopenReason("");
      return true;
    } catch (error) {
      flash(error instanceof Error ? error.message : "Action impossible.");
      return false;
    }
  }

  function toggleSelected(taskId: string) {
    setSelectedIds((current) =>
      current.includes(taskId)
        ? current.filter((id) => id !== taskId)
        : [...current, taskId],
    );
  }

  const filteredTasks = useMemo(() => {
    return state.tasks.filter((task) => {
      if (statusFilter !== "all" && task.status !== statusFilter) {
        return false;
      }
      if (assigneeFilter === "none" && task.assigneeId !== null) {
        return false;
      }
      if (
        assigneeFilter !== "all" &&
        assigneeFilter !== "none" &&
        task.assigneeId !== assigneeFilter
      ) {
        return false;
      }
      if (categoryFilter !== "all" && task.category !== categoryFilter) {
        return false;
      }
      return true;
    });
  }, [state.tasks, statusFilter, assigneeFilter, categoryFilter]);

  const sortedTasks = useMemo(
    () => sortTasksByDueDate(state.tasks),
    [state.tasks],
  );

  const collaboratorTasks = state.tasks.filter(
    (task) => task.assigneeId === state.activeRole,
  );
  const availablePool = state.tasks.filter(
    (task) => task.status === "disponible" && task.assigneeId === null,
  );
  const submittedTasks = state.tasks.filter((task) => task.status === "soumise");
  const blockedTasks = state.tasks.filter((task) => task.status === "bloquee");
  const lateTasks = state.tasks.filter(
    (task) => task.status !== "validee" && isPastDue(task.dueDate),
  );

  if (!hydrated) {
    return (
      <main className="app-shell">
        <p>Chargement de l’état local…</p>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <h1>EventOps POC</h1>
          <p>
            Prototype local de validation méthodologique — brief → tâches →
            rétroplanning → affectation → exécution → validation. Données fictives
            uniquement, persistées dans le navigateur.
          </p>
          <div className="badge-row">
            <span className="badge">POC ≠ MVP ≠ produit cible</span>
            <span className="badge">Sans backend / sans auth</span>
            <span className="badge">localStorage only</span>
          </div>
        </div>
        <div className="stack">
          <div className="role-switch" role="group" aria-label="Rôle simulé">
            <span className="muted">Rôle simulé :</span>
            {TEAM_MEMBERS.map((member) => (
              <button
                key={member.id}
                type="button"
                aria-pressed={state.activeRole === member.id}
                onClick={() => {
                  updateState({ activeRole: member.id });
                  setView(member.isManager ? "manager" : "collaborateur");
                }}
              >
                {member.name} — {member.roleLabel}
              </button>
            ))}
          </div>
          <div className="toolbar">
            <button type="button" className="btn" onClick={handleLoadDemo}>
              Charger l’exemple
            </button>
            <button type="button" className="btn btn-danger" onClick={handleReset}>
              Réinitialiser la démonstration
            </button>
          </div>
        </div>
      </header>

      {message ? (
        <div className="alert alert-info" role="status">
          {message}
        </div>
      ) : null}

      <nav className="nav-tabs" aria-label="Vues principales" role="tablist">
        {VIEWS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={view === item.id}
            onClick={() => setView(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {view === "brief" ? (
        <section className="panel stack" aria-labelledby="brief-title">
          <h2 id="brief-title">Cadre de l’événement</h2>
          <BriefForm
            draft={draft}
            onChange={setDraft}
            issues={issues}
            onGenerate={handleGenerate}
          />
        </section>
      ) : null}

      {view === "dashboard" ? (
        <section className="panel stack" aria-labelledby="dash-title">
          <h2 id="dash-title">Tableau de bord</h2>
          {!state.event ? (
            <p className="muted">Générez d’abord un événement depuis le brief.</p>
          ) : (
            <>
              <p>
                <strong>{state.event.name}</strong> —{" "}
                {TYPOLOGY_LABELS[state.event.typology]} ·{" "}
                {FORMAT_LABELS[state.event.format]} · {state.event.date} ·{" "}
                {state.event.expectedParticipants} participants ·{" "}
                {state.event.indicativeBudget.toLocaleString("fr-FR")} €
              </p>
              <div className="stats" aria-label="Indicateurs">
                <Stat label="Total" value={indicators.total} />
                <Stat label="Disponibles" value={indicators.disponible} />
                <Stat label="En cours" value={indicators.enCours} />
                <Stat label="Bloquées" value={indicators.bloquee} />
                <Stat label="Soumises" value={indicators.soumise} />
                <Stat label="Validées" value={indicators.validee} />
                <Stat label="En retard" value={indicators.enRetard} />
                <Stat label="Avancement" value={`${indicators.progressPercent} %`} />
              </div>
              <div>
                <h3>Répartition par membre</h3>
                <ul>
                  {TEAM_MEMBERS.map((member) => (
                    <li key={member.id}>
                      {member.name} : {indicators.byMember[member.id]} tâche(s)
                      affectée(s)
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </section>
      ) : null}

      {view === "liste" || view === "retroplanning" ? (
        <section className="panel stack" aria-labelledby="tasks-title">
          <h2 id="tasks-title">
            {view === "liste" ? "Liste des tâches" : "Rétroplanning"}
          </h2>
          {!state.tasks.length ? (
            <p className="muted">Aucune tâche — générez le plan depuis le brief.</p>
          ) : view === "liste" ? (
            <TaskTable
              tasks={sortTasksByDueDate(state.tasks)}
              selectedTaskId={selectedTaskId}
              onSelect={setSelectedTaskId}
            />
          ) : (
            <div className="timeline" role="list">
              {sortedTasks.map((task) => {
                const late = task.status !== "validee" && isPastDue(task.dueDate);
                return (
                  <button
                    key={task.id}
                    type="button"
                    role="listitem"
                    className={`timeline-item${late ? " late" : ""}${
                      selectedTaskId === task.id ? " selected" : ""
                    }`}
                    onClick={() => setSelectedTaskId(task.id)}
                  >
                    <div>
                      <div className="offset">{formatOffsetLabel(task.offsetDays)}</div>
                      <div className="muted">{task.dueDate}</div>
                    </div>
                    <div>
                      <strong>{task.title}</strong>
                      <div className="muted">
                        {displayMemberName(task.assigneeId)} ·{" "}
                        {STATUS_LABELS[task.status]}
                        {late ? (
                          <span className="late-flag">Échéance dépassée</span>
                        ) : null}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
          {selectedTask ? <TaskDetail task={selectedTask} /> : null}
        </section>
      ) : null}

      {view === "manager" ? (
        <section className="panel stack" aria-labelledby="manager-title">
          <h2 id="manager-title">Vue manager (Sarah)</h2>
          {!isManagerRole(state.activeRole) ? (
            <p className="alert alert-error" role="status">
              Passez en rôle Sarah pour les actions manager. Consultation possible.
            </p>
          ) : null}
          <div className="filters">
            <div className="field">
              <label htmlFor="filter-status">Statut</label>
              <select
                id="filter-status"
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(event.target.value as TaskStatus | "all")
                }
              >
                <option value="all">Tous</option>
                {Object.entries(STATUS_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="filter-assignee">Responsable</label>
              <select
                id="filter-assignee"
                value={assigneeFilter}
                onChange={(event) =>
                  setAssigneeFilter(
                    event.target.value as TeamMemberId | "all" | "none",
                  )
                }
              >
                <option value="all">Tous</option>
                <option value="none">Non affectées</option>
                {TEAM_MEMBERS.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="filter-category">Catégorie</label>
              <select
                id="filter-category"
                value={categoryFilter}
                onChange={(event) =>
                  setCategoryFilter(event.target.value as TaskCategory | "all")
                }
              >
                <option value="all">Toutes</option>
                {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="inline-actions">
            <div className="field">
              <label htmlFor="assign-target">Affecter la sélection à</label>
              <select
                id="assign-target"
                value={assignTarget}
                onChange={(event) =>
                  setAssignTarget(event.target.value as TeamMemberId)
                }
              >
                <option value="louis">Louis</option>
                <option value="amina">Amina</option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!isManagerRole(state.activeRole) || selectedIds.length === 0}
              onClick={() => {
                const ok = runWorkflow(() =>
                  assignTasks(
                    state.tasks,
                    selectedIds,
                    assignTarget,
                    state.activeRole,
                  ),
                );
                if (ok) {
                  flash(
                    `${selectedIds.length} tâche(s) affectée(s) à ${displayMemberName(assignTarget)}.`,
                  );
                  setSelectedIds([]);
                }
              }}
            >
              Affecter la sélection ({selectedIds.length})
            </button>
          </div>

          <TaskTable
            tasks={filteredTasks}
            selectedTaskId={selectedTaskId}
            onSelect={setSelectedTaskId}
            selectable
            selectedIds={selectedIds}
            onToggleSelect={toggleSelected}
          />

          <div className="grid-2">
            <div className="stack">
              <h3>Soumises en attente ({submittedTasks.length})</h3>
              {submittedTasks.length === 0 ? (
                <p className="muted">Aucune tâche soumise.</p>
              ) : (
                <ul>
                  {submittedTasks.map((task) => (
                    <li key={task.id}>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => setSelectedTaskId(task.id)}
                      >
                        {task.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <h3>Bloquées ({blockedTasks.length})</h3>
              <p className="muted">
                {blockedTasks.length
                  ? blockedTasks.map((task) => task.title).join(" · ")
                  : "Aucune"}
              </p>
              <h3>En retard ({lateTasks.length})</h3>
              <p className="muted">
                {lateTasks.length
                  ? lateTasks.map((task) => task.title).join(" · ")
                  : "Aucune"}
              </p>
            </div>
            <div className="stack">
              {selectedTask ? (
                <>
                  <TaskDetail task={selectedTask} />
                  {selectedTask.status === "soumise" ? (
                    <div className="inline-actions">
                      <button
                        type="button"
                        className="btn btn-primary"
                        disabled={!isManagerRole(state.activeRole)}
                        onClick={() => {
                          if (
                            runWorkflow(() =>
                              validateTask(
                                state.tasks,
                                selectedTask.id,
                                state.activeRole,
                              ),
                            )
                          ) {
                            flash("Tâche validée.");
                          }
                        }}
                      >
                        Valider
                      </button>
                    </div>
                  ) : null}
                  {selectedTask.status === "soumise" ? (
                    <div className="stack">
                      <div className="field">
                        <label htmlFor="reopen-reason">Motif de réouverture</label>
                        <textarea
                          id="reopen-reason"
                          value={reopenReason}
                          onChange={(event) => setReopenReason(event.target.value)}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn"
                        disabled={!isManagerRole(state.activeRole)}
                        onClick={() => {
                          if (
                            runWorkflow(() =>
                              reopenTask(
                                state.tasks,
                                selectedTask.id,
                                state.activeRole,
                                reopenReason,
                              ),
                            )
                          ) {
                            flash("Tâche rouverte.");
                          }
                        }}
                      >
                        Rouvrir avec observation
                      </button>
                    </div>
                  ) : null}
                  {selectedTask.status === "bloquee" ? (
                    <button
                      type="button"
                      className="btn"
                      disabled={!isManagerRole(state.activeRole)}
                      onClick={() => {
                        if (
                          runWorkflow(() =>
                            resumeBlockedTask(
                              state.tasks,
                              selectedTask.id,
                              state.activeRole,
                            ),
                          )
                        ) {
                          flash("Blocage résolu par le manager.");
                        }
                      }}
                    >
                      Résoudre le blocage
                    </button>
                  ) : null}
                </>
              ) : (
                <p className="muted">Sélectionnez une tâche pour agir.</p>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {view === "collaborateur" ? (
        <CollaboratorPanel
          activeRole={state.activeRole}
          ownTasks={collaboratorTasks}
          availablePool={availablePool}
          selectedTask={selectedTask}
          observationText={observationText}
          blockReason={blockReason}
          onSelect={setSelectedTaskId}
          onObservationText={setObservationText}
          onBlockReason={setBlockReason}
          onClaim={(taskId) => {
            if (
              runWorkflow(() =>
                claimAvailableTask(state.tasks, taskId, state.activeRole),
              )
            ) {
              flash("Tâche récupérée.");
              setSelectedTaskId(taskId);
            }
          }}
          onStart={(taskId) => {
            if (runWorkflow(() => startTask(state.tasks, taskId, state.activeRole))) {
              flash("Tâche démarrée.");
            }
          }}
          onObserve={(taskId) => {
            if (
              runWorkflow(() =>
                addObservation(
                  state.tasks,
                  taskId,
                  state.activeRole,
                  observationText,
                ),
              )
            ) {
              flash("Observation ajoutée.");
            }
          }}
          onBlock={(taskId) => {
            if (
              runWorkflow(() =>
                blockTask(state.tasks, taskId, state.activeRole, blockReason),
              )
            ) {
              flash("Tâche bloquée.");
            }
          }}
          onResume={(taskId) => {
            if (
              runWorkflow(() =>
                resumeBlockedTask(state.tasks, taskId, state.activeRole),
              )
            ) {
              flash("Tâche reprise.");
            }
          }}
          onSubmit={(taskId) => {
            if (
              runWorkflow(() =>
                submitTask(state.tasks, taskId, state.activeRole, observationText),
              )
            ) {
              flash("Tâche soumise au manager.");
            }
          }}
        />
      ) : null}
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="stat">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
}

function BriefForm({
  draft,
  onChange,
  issues,
  onGenerate,
}: {
  draft: EventBrief;
  onChange: (brief: EventBrief) => void;
  issues: string[];
  onGenerate: () => void;
}) {
  function setField<K extends keyof EventBrief>(key: K, value: EventBrief[K]) {
    onChange({ ...draft, [key]: value });
  }

  return (
    <form
      className="stack"
      onSubmit={(event) => {
        event.preventDefault();
        onGenerate();
      }}
    >
      {issues.length > 0 ? (
        <div className="alert alert-error" role="alert">
          <strong>Validation :</strong>
          <ul>
            {issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="form-grid">
        <div className="field field-full">
          <label htmlFor="event-name">Nom de l’événement</label>
          <input
            id="event-name"
            value={draft.name}
            onChange={(event) => setField("name", event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="event-typology">Typologie</label>
          <select
            id="event-typology"
            value={draft.typology}
            onChange={(event) =>
              setField("typology", event.target.value as EventBrief["typology"])
            }
          >
            {Object.entries(TYPOLOGY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="event-format">Format</label>
          <select
            id="event-format"
            value={draft.format}
            onChange={(event) =>
              setField("format", event.target.value as EventBrief["format"])
            }
          >
            {Object.entries(FORMAT_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="field field-full">
          <label htmlFor="event-objective">Objectif / description courte</label>
          <textarea
            id="event-objective"
            value={draft.objective}
            onChange={(event) => setField("objective", event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="event-date">Date</label>
          <input
            id="event-date"
            type="date"
            value={draft.date}
            onChange={(event) => setField("date", event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="event-location">Lieu (facultatif)</label>
          <input
            id="event-location"
            value={draft.location}
            onChange={(event) => setField("location", event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="event-start">Heure de début</label>
          <input
            id="event-start"
            type="time"
            value={draft.startTime}
            onChange={(event) => setField("startTime", event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="event-end">Heure de fin</label>
          <input
            id="event-end"
            type="time"
            value={draft.endTime}
            onChange={(event) => setField("endTime", event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="event-audience">Public cible</label>
          <input
            id="event-audience"
            value={draft.targetAudience}
            onChange={(event) => setField("targetAudience", event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="event-participants">Participants attendus</label>
          <input
            id="event-participants"
            type="number"
            min={1}
            value={draft.expectedParticipants}
            onChange={(event) =>
              setField("expectedParticipants", Number(event.target.value))
            }
            required
          />
        </div>
        <div className="field">
          <label htmlFor="event-budget">Budget indicatif (€)</label>
          <input
            id="event-budget"
            type="number"
            min={0}
            value={draft.indicativeBudget}
            onChange={(event) =>
              setField("indicativeBudget", Number(event.target.value))
            }
            required
          />
        </div>
        <div className="field field-full">
          <span id="team-label">Membres de l’équipe</span>
          <div className="checkbox-row" role="group" aria-labelledby="team-label">
            {TEAM_MEMBERS.map((member) => {
              const checked = draft.teamMemberIds.includes(member.id);
              return (
                <label key={member.id}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                      const next = checked
                        ? draft.teamMemberIds.filter((id) => id !== member.id)
                        : [...draft.teamMemberIds, member.id];
                      setField("teamMemberIds", next);
                    }}
                  />
                  {member.name}
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className="toolbar">
        <button type="submit" className="btn btn-primary">
          Générer les tâches
        </button>
      </div>
    </form>
  );
}

function TaskTable({
  tasks,
  selectedTaskId,
  onSelect,
  selectable = false,
  selectedIds = [],
  onToggleSelect,
}: {
  tasks: Task[];
  selectedTaskId: string | null;
  onSelect: (id: string) => void;
  selectable?: boolean;
  selectedIds?: string[];
  onToggleSelect?: (id: string) => void;
}) {
  return (
    <div className="table-wrap">
      <table className="tasks">
        <thead>
          <tr>
            {selectable ? <th scope="col">Sel.</th> : null}
            <th scope="col">Tâche</th>
            <th scope="col">Échéance</th>
            <th scope="col">Statut</th>
            <th scope="col">Responsable</th>
            <th scope="col">Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            const late = task.status !== "validee" && isPastDue(task.dueDate);
            return (
              <tr key={task.id}>
                {selectable ? (
                  <td>
                    <input
                      type="checkbox"
                      aria-label={`Sélectionner ${task.title}`}
                      checked={selectedIds.includes(task.id)}
                      onChange={() => onToggleSelect?.(task.id)}
                    />
                  </td>
                ) : null}
                <td>
                  <button
                    type="button"
                    className="btn"
                    aria-pressed={selectedTaskId === task.id}
                    onClick={() => onSelect(task.id)}
                  >
                    {task.title}
                  </button>
                </td>
                <td>
                  {formatOffsetLabel(task.offsetDays)} · {task.dueDate}
                  {late ? <span className="late-flag">En retard</span> : null}
                </td>
                <td>
                  <span className={`status-pill status-${task.status}`}>
                    {STATUS_LABELS[task.status]}
                  </span>
                </td>
                <td>{displayMemberName(task.assigneeId)}</td>
                <td>{CATEGORY_LABELS[task.category]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TaskDetail({ task }: { task: Task }) {
  const late = task.status !== "validee" && isPastDue(task.dueDate);
  return (
    <aside className="detail panel" aria-label="Détail de la tâche">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className="muted">
        {STATUS_LABELS[task.status]} · {PRIORITY_LABELS[task.priority]} ·{" "}
        {CATEGORY_LABELS[task.category]} · {formatOffsetLabel(task.offsetDays)} ·{" "}
        {task.dueDate}
        {late ? <span className="late-flag">Échéance dépassée</span> : null}
      </p>
      <p className="muted">
        Responsable : {displayMemberName(task.assigneeId)} · Origine règle :{" "}
        {task.ruleOrigin}
      </p>
      {task.blockReason ? (
        <p className="alert alert-error" role="status">
          Blocage : {task.blockReason}
        </p>
      ) : null}
      <div>
        <h4>Observations</h4>
        {task.observations.length === 0 ? (
          <p className="muted">Aucune observation.</p>
        ) : (
          <ul className="obs-list">
            {task.observations.map((observation) => (
              <li key={observation.id}>
                <strong>{displayMemberName(observation.authorId)}</strong> (
                {observation.kind}) — {observation.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}

function CollaboratorPanel({
  activeRole,
  ownTasks,
  availablePool,
  selectedTask,
  observationText,
  blockReason,
  onSelect,
  onObservationText,
  onBlockReason,
  onClaim,
  onStart,
  onObserve,
  onBlock,
  onResume,
  onSubmit,
}: {
  activeRole: ActiveRole;
  ownTasks: Task[];
  availablePool: Task[];
  selectedTask: Task | null;
  observationText: string;
  blockReason: string;
  onSelect: (id: string) => void;
  onObservationText: (value: string) => void;
  onBlockReason: (value: string) => void;
  onClaim: (id: string) => void;
  onStart: (id: string) => void;
  onObserve: (id: string) => void;
  onBlock: (id: string) => void;
  onResume: (id: string) => void;
  onSubmit: (id: string) => void;
}) {
  const isCollab = !isManagerRole(activeRole);

  return (
    <section className="panel stack" aria-labelledby="collab-title">
      <h2 id="collab-title">
        Vue collaborateur — {displayMemberName(activeRole)}
      </h2>
      {!isCollab ? (
        <p className="alert alert-error" role="status">
          Passez en rôle Louis ou Amina pour exécuter les actions collaborateur.
        </p>
      ) : null}

      <div className="grid-2">
        <div className="stack">
          <h3>Mes tâches ({ownTasks.length})</h3>
          <TaskTable
            tasks={sortTasksByDueDate(ownTasks)}
            selectedTaskId={selectedTask?.id ?? null}
            onSelect={onSelect}
          />
          <h3>Pool disponible ({availablePool.length})</h3>
          {availablePool.length === 0 ? (
            <p className="muted">Aucune tâche disponible.</p>
          ) : (
            <ul>
              {availablePool.map((task) => (
                <li key={task.id} className="inline-actions">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => onSelect(task.id)}
                  >
                    {task.title}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!isCollab}
                    onClick={() => onClaim(task.id)}
                  >
                    Récupérer
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="stack">
          {selectedTask ? (
            <>
              <TaskDetail task={selectedTask} />
              <div className="field">
                <label htmlFor="obs-text">Observation</label>
                <textarea
                  id="obs-text"
                  value={observationText}
                  onChange={(event) => onObservationText(event.target.value)}
                />
              </div>
              <div className="inline-actions">
                <button
                  type="button"
                  className="btn"
                  disabled={!isCollab || selectedTask.status !== "attribuee"}
                  onClick={() => onStart(selectedTask.id)}
                >
                  Commencer
                </button>
                <button
                  type="button"
                  className="btn"
                  disabled={!isCollab}
                  onClick={() => onObserve(selectedTask.id)}
                >
                  Ajouter observation
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!isCollab || selectedTask.status !== "en_cours"}
                  onClick={() => onSubmit(selectedTask.id)}
                >
                  Soumettre au manager
                </button>
              </div>
              <div className="field">
                <label htmlFor="block-reason">Motif de blocage</label>
                <input
                  id="block-reason"
                  value={blockReason}
                  onChange={(event) => onBlockReason(event.target.value)}
                />
              </div>
              <div className="inline-actions">
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={!isCollab || selectedTask.status !== "en_cours"}
                  onClick={() => onBlock(selectedTask.id)}
                >
                  Signaler un blocage
                </button>
                <button
                  type="button"
                  className="btn"
                  disabled={!isCollab || selectedTask.status !== "bloquee"}
                  onClick={() => onResume(selectedTask.id)}
                >
                  Reprendre
                </button>
              </div>
            </>
          ) : (
            <p className="muted">Sélectionnez une tâche.</p>
          )}
        </div>
      </div>
    </section>
  );
}
```

### `projects/eventops-poc/app/eslint.config.mjs`

```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript")];

export default eslintConfig;
```

### `projects/eventops-poc/app/lib/date-utils.ts`

```typescript
/** Parse YYYY-MM-DD as a local calendar date (noon to avoid DST edge cases). */
export function parseLocalDate(isoDate: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) {
    throw new Error(`Date invalide: ${isoDate}`);
  }
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

export function formatLocalDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addDays(isoDate: string, offsetDays: number): string {
  const date = parseLocalDate(isoDate);
  date.setDate(date.getDate() + offsetDays);
  return formatLocalDate(date);
}

export function todayLocalIso(now: Date = new Date()): string {
  return formatLocalDate(now);
}

export function isPastDue(dueDate: string, now: Date = new Date()): boolean {
  return parseLocalDate(dueDate).getTime() < parseLocalDate(todayLocalIso(now)).getTime();
}

export function formatOffsetLabel(offsetDays: number): string {
  if (offsetDays === 0) {
    return "J";
  }
  if (offsetDays < 0) {
    return `J${offsetDays}`;
  }
  return `J+${offsetDays}`;
}

/** Future demo date that stays valid over time (default +45 days). */
export function futureDemoDate(now: Date = new Date(), daysAhead = 45): string {
  return addDays(todayLocalIso(now), daysAhead);
}

export function compareIsoDates(a: string, b: string): number {
  return parseLocalDate(a).getTime() - parseLocalDate(b).getTime();
}
```

### `projects/eventops-poc/app/lib/generate-tasks.ts`

```typescript
import type { EventBrief, Task } from "./types";
import { addDays } from "./date-utils";
import { selectTemplatesForBrief } from "./task-rules";
import { isEventBriefValid } from "./validate-brief";

function deepFreezeInput<T>(value: T): T {
  return value;
}

/**
 * Génère de façon déterministe les tâches à partir d’un brief valide.
 * Ne mute jamais l’entrée. Retourne un tableau neuf.
 */
export function generateTasksFromBrief(
  brief: EventBrief,
  now: Date = new Date(),
): Task[] {
  // Garde symbolique : le brief d’entrée n’est jamais réassigné / muté ici.
  const input = deepFreezeInput(brief);

  if (!isEventBriefValid(input, now)) {
    throw new Error("Impossible de générer des tâches depuis un brief invalide.");
  }

  const templates = selectTemplatesForBrief(input);
  const idBySuffix = new Map<string, string>();

  for (const template of templates) {
    idBySuffix.set(template.idSuffix, `task-${template.idSuffix}`);
  }

  const tasks: Task[] = templates.map((template) => {
    const dependencyIds = (template.dependencySuffixes ?? [])
      .map((suffix) => idBySuffix.get(suffix))
      .filter((id): id is string => Boolean(id));

    return {
      id: `task-${template.idSuffix}`,
      title: template.title,
      description: template.description,
      category: template.category,
      priority: template.priority,
      dueDate: addDays(input.date, template.offsetDays),
      offsetDays: template.offsetDays,
      assigneeId: null,
      status: "disponible",
      observations: [],
      dependencyIds,
      ruleOrigin: template.ruleOrigin,
    };
  });

  return tasks;
}

export function countTasksByRuleOriginPrefix(
  tasks: Task[],
  prefix: string,
): number {
  return tasks.filter((task) => task.ruleOrigin.startsWith(prefix)).length;
}
```

### `projects/eventops-poc/app/lib/indicators.ts`

```typescript
import type {
  DashboardIndicators,
  Task,
  TeamMemberId,
} from "./types";
import { TEAM_MEMBER_IDS } from "./team";
import { isPastDue } from "./date-utils";

export function computeIndicators(
  tasks: Task[],
  now: Date = new Date(),
): DashboardIndicators {
  const byMember = Object.fromEntries(
    TEAM_MEMBER_IDS.map((id) => [id, 0]),
  ) as Record<TeamMemberId, number>;

  let disponible = 0;
  let attribuee = 0;
  let enCours = 0;
  let bloquee = 0;
  let soumise = 0;
  let validee = 0;
  let enRetard = 0;

  for (const task of tasks) {
    switch (task.status) {
      case "disponible":
        disponible += 1;
        break;
      case "attribuee":
        attribuee += 1;
        break;
      case "en_cours":
        enCours += 1;
        break;
      case "bloquee":
        bloquee += 1;
        break;
      case "soumise":
        soumise += 1;
        break;
      case "validee":
        validee += 1;
        break;
    }

    if (task.status !== "validee" && isPastDue(task.dueDate, now)) {
      enRetard += 1;
    }

    if (task.assigneeId) {
      byMember[task.assigneeId] += 1;
    }
  }

  const total = tasks.length;
  const progressPercent =
    total === 0 ? 0 : Math.round((validee / total) * 100);

  return {
    total,
    disponible,
    attribuee,
    enCours,
    bloquee,
    soumise,
    validee,
    enRetard,
    progressPercent,
    byMember,
  };
}

export function sortTasksByDueDate(tasks: Task[]): Task[] {
  return [...tasks].sort((a, b) => {
    if (a.dueDate === b.dueDate) {
      return a.offsetDays - b.offsetDays || a.title.localeCompare(b.title);
    }
    return a.dueDate < b.dueDate ? -1 : 1;
  });
}
```

### `projects/eventops-poc/app/lib/labels.ts`

```typescript
import type { EventBrief, EventFormat, EventTypology, TaskCategory, TaskPriority, TaskStatus } from "./types";

export const TYPOLOGY_LABELS: Record<EventTypology, string> = {
  seminaire: "Séminaire",
  conference: "Conférence",
  atelier: "Atelier",
  evenement_interne: "Événement interne",
  lancement: "Lancement",
};

export const FORMAT_LABELS: Record<EventFormat, string> = {
  presentiel: "Présentiel",
  distanciel: "Distanciel",
  hybride: "Hybride",
};

export const STATUS_LABELS: Record<TaskStatus, string> = {
  disponible: "Disponible",
  attribuee: "Attribuée",
  en_cours: "En cours",
  bloquee: "Bloquée",
  soumise: "Soumise",
  validee: "Validée",
};

export const PRIORITY_LABELS: Record<TaskPriority, string> = {
  basse: "Basse",
  normale: "Normale",
  haute: "Haute",
  critique: "Critique",
};

export const CATEGORY_LABELS: Record<TaskCategory, string> = {
  cadrage: "Cadrage",
  budget: "Budget",
  contenu: "Contenu",
  communication: "Communication",
  participants: "Participants",
  logistique: "Logistique",
  technique: "Technique",
  equipe: "Équipe",
  controle: "Contrôle",
  jour_j: "Jour J",
  bilan: "Bilan",
  lieu: "Lieu",
  accueil: "Accueil",
  prestataires: "Prestataires",
  contractuel: "Contractuel",
};

export function emptyBrief(): EventBrief {
  return {
    name: "",
    typology: "seminaire",
    objective: "",
    date: "",
    startTime: "09:00",
    endTime: "17:00",
    format: "presentiel",
    targetAudience: "",
    expectedParticipants: 20,
    indicativeBudget: 0,
    location: "",
    teamMemberIds: ["sarah", "louis", "amina"],
  };
}
```

### `projects/eventops-poc/app/lib/storage.ts`

```typescript
import type { AppState, EventBrief, TeamMemberId } from "./types";
import { TEAM_MEMBERS } from "./team";
import { futureDemoDate } from "./date-utils";

export const STORAGE_KEY = "eventops-poc-state-v1";

export function createEmptyState(): AppState {
  return {
    event: null,
    tasks: [],
    activeRole: "sarah",
    generatedAt: null,
  };
}

export function createDemoEvent(now: Date = new Date()): EventBrief {
  return {
    name: "Séminaire annuel de l’équipe",
    typology: "seminaire",
    objective:
      "Aligner l’équipe sur les priorités de l’année et renforcer la collaboration.",
    date: futureDemoDate(now, 45),
    startTime: "09:00",
    endTime: "17:30",
    format: "hybride",
    targetAudience: "Équipe interne et partenaires clés (démonstration)",
    expectedParticipants: 80,
    indicativeBudget: 12000,
    location: "Campus démo — Salle Horizon + visio",
    teamMemberIds: TEAM_MEMBERS.map((member) => member.id),
  };
}

export function loadState(): AppState {
  if (typeof window === "undefined") {
    return createEmptyState();
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createEmptyState();
    }
    const parsed = JSON.parse(raw) as AppState;
    return {
      event: parsed.event ?? null,
      tasks: Array.isArray(parsed.tasks) ? parsed.tasks : [],
      activeRole: isRole(parsed.activeRole) ? parsed.activeRole : "sarah",
      generatedAt: parsed.generatedAt ?? null,
    };
  } catch {
    return createEmptyState();
  }
}

export function saveState(state: AppState): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function clearState(): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.removeItem(STORAGE_KEY);
}

function isRole(value: unknown): value is TeamMemberId {
  return value === "sarah" || value === "louis" || value === "amina";
}
```

### `projects/eventops-poc/app/lib/task-rules.ts`

```typescript
import type { EventBrief, TaskTemplate } from "./types";

/** Socle commun — toujours présent. */
export const CORE_TEMPLATES: readonly TaskTemplate[] = [
  {
    idSuffix: "brief-launch",
    title: "Lancement et validation du brief",
    description: "Confirmer le brief événementiel et le partager à l’équipe.",
    category: "cadrage",
    priority: "haute",
    offsetDays: -30,
    ruleOrigin: "core.brief",
  },
  {
    idSuffix: "budget-validation",
    title: "Validation du budget",
    description: "Valider le budget indicatif et les postes de dépenses principaux.",
    category: "budget",
    priority: "haute",
    offsetDays: -28,
    ruleOrigin: "core.budget",
    dependencySuffixes: ["brief-launch"],
  },
  {
    idSuffix: "agenda-prep",
    title: "Préparation du déroulé",
    description: "Construire le déroulé minute par minute de l’événement.",
    category: "contenu",
    priority: "haute",
    offsetDays: -21,
    ruleOrigin: "core.agenda",
    dependencySuffixes: ["brief-launch"],
  },
  {
    idSuffix: "invitations",
    title: "Invitations et communication",
    description: "Préparer et envoyer les invitations / messages de communication.",
    category: "communication",
    priority: "normale",
    offsetDays: -20,
    ruleOrigin: "core.invitations",
    dependencySuffixes: ["brief-launch"],
  },
  {
    idSuffix: "registration-followup",
    title: "Suivi des inscriptions / participants",
    description: "Suivre les inscriptions et maintenir la liste des participants.",
    category: "participants",
    priority: "normale",
    offsetDays: -10,
    ruleOrigin: "core.registrations",
    dependencySuffixes: ["invitations"],
  },
  {
    idSuffix: "logistics-prep",
    title: "Préparation logistique",
    description: "Organiser la logistique générale (matériel, timing, supports).",
    category: "logistique",
    priority: "normale",
    offsetDays: -14,
    ruleOrigin: "core.logistics",
  },
  {
    idSuffix: "team-briefing",
    title: "Briefing de l’équipe",
    description: "Briefing opérationnel de l’équipe avant l’événement.",
    category: "equipe",
    priority: "haute",
    offsetDays: -3,
    ruleOrigin: "core.team-briefing",
    dependencySuffixes: ["agenda-prep"],
  },
  {
    idSuffix: "final-check",
    title: "Contrôle final avant événement",
    description: "Checklist de contrôle final J-1 / J-2.",
    category: "controle",
    priority: "critique",
    offsetDays: -2,
    ruleOrigin: "core.final-check",
    dependencySuffixes: ["logistics-prep", "team-briefing"],
  },
  {
    idSuffix: "day-of-ops",
    title: "Opération jour J",
    description: "Coordination opérationnelle le jour de l’événement.",
    category: "jour_j",
    priority: "critique",
    offsetDays: 0,
    ruleOrigin: "core.day-of",
    dependencySuffixes: ["final-check"],
  },
  {
    idSuffix: "post-event-review",
    title: "Bilan post-événement",
    description: "Collecter les retours et produire le bilan.",
    category: "bilan",
    priority: "normale",
    offsetDays: 3,
    ruleOrigin: "core.post-event",
    dependencySuffixes: ["day-of-ops"],
  },
] as const;

export const ONSITE_TEMPLATES: readonly TaskTemplate[] = [
  {
    idSuffix: "venue-confirm",
    title: "Réservation ou confirmation du lieu",
    description: "Confirmer la disponibilité et les conditions du lieu.",
    category: "lieu",
    priority: "haute",
    offsetDays: -25,
    ruleOrigin: "format.onsite.venue",
  },
  {
    idSuffix: "venue-setup",
    title: "Aménagement et signalétique",
    description: "Planifier l’aménagement de salle et la signalétique.",
    category: "lieu",
    priority: "normale",
    offsetDays: -7,
    ruleOrigin: "format.onsite.setup",
    dependencySuffixes: ["venue-confirm"],
  },
  {
    idSuffix: "physical-welcome",
    title: "Accueil physique",
    description: "Organiser l’accueil physique des participants.",
    category: "accueil",
    priority: "normale",
    offsetDays: -5,
    ruleOrigin: "format.onsite.welcome",
    dependencySuffixes: ["venue-confirm"],
  },
] as const;

export const REMOTE_TEMPLATES: readonly TaskTemplate[] = [
  {
    idSuffix: "platform-prep",
    title: "Préparation de la plateforme",
    description: "Configurer la plateforme de visioconférence / streaming.",
    category: "technique",
    priority: "haute",
    offsetDays: -14,
    ruleOrigin: "format.remote.platform",
  },
  {
    idSuffix: "tech-rehearsal",
    title: "Test technique",
    description: "Réaliser un test technique de bout en bout.",
    category: "technique",
    priority: "haute",
    offsetDays: -4,
    ruleOrigin: "format.remote.rehearsal",
    dependencySuffixes: ["platform-prep"],
  },
  {
    idSuffix: "connection-guide",
    title: "Consignes de connexion",
    description: "Rédiger et diffuser les consignes de connexion aux participants.",
    category: "communication",
    priority: "normale",
    offsetDays: -3,
    ruleOrigin: "format.remote.guide",
    dependencySuffixes: ["platform-prep"],
  },
] as const;

export const CAPACITY_TEMPLATES: readonly TaskTemplate[] = [
  {
    idSuffix: "flow-management",
    title: "Gestion renforcée des flux",
    description: "Définir le plan de flux pour un public d’au moins 50 personnes.",
    category: "accueil",
    priority: "haute",
    offsetDays: -12,
    ruleOrigin: "capacity.flow",
  },
  {
    idSuffix: "capacity-control",
    title: "Contrôle capacité",
    description: "Contrôler la capacité d’accueil versus inscriptions.",
    category: "participants",
    priority: "haute",
    offsetDays: -8,
    ruleOrigin: "capacity.control",
  },
  {
    idSuffix: "welcome-plan",
    title: "Plan d’accueil",
    description: "Établir le plan d’accueil détaillé (files, badges, points d’info).",
    category: "accueil",
    priority: "normale",
    offsetDays: -6,
    ruleOrigin: "capacity.welcome-plan",
  },
] as const;

export const BUDGET_5K_TEMPLATES: readonly TaskTemplate[] = [
  {
    idSuffix: "vendor-review",
    title: "Consultation ou validation de prestataires",
    description: "Consulter ou valider les prestataires pour un budget ≥ 5 000 €.",
    category: "prestataires",
    priority: "haute",
    offsetDays: -22,
    ruleOrigin: "budget.5k.vendors",
  },
  {
    idSuffix: "budget-tracking",
    title: "Suivi budgétaire renforcé",
    description: "Mettre en place un suivi budgétaire renforcé.",
    category: "budget",
    priority: "normale",
    offsetDays: -15,
    ruleOrigin: "budget.5k.tracking",
  },
] as const;

export const BUDGET_15K_TEMPLATES: readonly TaskTemplate[] = [
  {
    idSuffix: "mgmt-validation",
    title: "Validation managériale renforcée",
    description: "Obtenir une validation managériale renforcée (budget ≥ 15 000 €).",
    category: "controle",
    priority: "critique",
    offsetDays: -26,
    ruleOrigin: "budget.15k.management",
  },
  {
    idSuffix: "contract-control",
    title: "Contrôle contractuel (démonstration)",
    description:
      "Tâche de démonstration de contrôle contractuel — aucun contrat réel n’est géré.",
    category: "contractuel",
    priority: "haute",
    offsetDays: -18,
    ruleOrigin: "budget.15k.contractual-demo",
  },
] as const;

export const EXTERNAL_COMMS_TEMPLATES: readonly TaskTemplate[] = [
  {
    idSuffix: "external-comms",
    title: "Communication externe",
    description: "Préparer la communication externe (conférence / lancement).",
    category: "communication",
    priority: "haute",
    offsetDays: -18,
    ruleOrigin: "typology.external-comms",
  },
  {
    idSuffix: "speakers-prep",
    title: "Préparation des intervenants",
    description: "Coordonner briefings et supports des intervenants.",
    category: "contenu",
    priority: "haute",
    offsetDays: -12,
    ruleOrigin: "typology.speakers",
  },
] as const;

export const INTERNAL_EVENT_TEMPLATES: readonly TaskTemplate[] = [
  {
    idSuffix: "internal-comms",
    title: "Communication interne",
    description: "Diffuser la communication interne auprès des collaborateurs.",
    category: "communication",
    priority: "normale",
    offsetDays: -16,
    ruleOrigin: "typology.internal-comms",
  },
  {
    idSuffix: "team-availability",
    title: "Validation des disponibilités équipe",
    description: "Confirmer les disponibilités de l’équipe interne.",
    category: "equipe",
    priority: "normale",
    offsetDays: -14,
    ruleOrigin: "typology.team-availability",
  },
] as const;

export function selectTemplatesForBrief(brief: EventBrief): TaskTemplate[] {
  const selected: TaskTemplate[] = [...CORE_TEMPLATES];

  if (brief.format === "presentiel" || brief.format === "hybride") {
    selected.push(...ONSITE_TEMPLATES);
  }

  if (brief.format === "distanciel" || brief.format === "hybride") {
    selected.push(...REMOTE_TEMPLATES);
  }

  if (brief.expectedParticipants >= 50) {
    selected.push(...CAPACITY_TEMPLATES);
  }

  if (brief.indicativeBudget >= 5000) {
    selected.push(...BUDGET_5K_TEMPLATES);
  }

  if (brief.indicativeBudget >= 15000) {
    selected.push(...BUDGET_15K_TEMPLATES);
  }

  if (brief.typology === "conference" || brief.typology === "lancement") {
    selected.push(...EXTERNAL_COMMS_TEMPLATES);
  }

  if (brief.typology === "evenement_interne") {
    selected.push(...INTERNAL_EVENT_TEMPLATES);
  }

  return selected;
}
```

### `projects/eventops-poc/app/lib/team.ts`

```typescript
import type { TeamMember, TeamMemberId } from "./types";

export const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    id: "sarah",
    name: "Sarah",
    roleLabel: "Manager opérationnelle",
    isManager: true,
  },
  {
    id: "louis",
    name: "Louis",
    roleLabel: "Collaborateur",
    isManager: false,
  },
  {
    id: "amina",
    name: "Amina",
    roleLabel: "Collaboratrice",
    isManager: false,
  },
] as const;

export const TEAM_MEMBER_IDS: readonly TeamMemberId[] = TEAM_MEMBERS.map(
  (member) => member.id,
);

export function getTeamMember(id: TeamMemberId): TeamMember {
  const member = TEAM_MEMBERS.find((item) => item.id === id);
  if (!member) {
    throw new Error(`Membre d'équipe inconnu: ${id}`);
  }
  return member;
}

export function isManagerRole(id: TeamMemberId): boolean {
  return getTeamMember(id).isManager;
}

export function displayMemberName(id: TeamMemberId | null): string {
  if (!id) {
    return "Non affectée";
  }
  return getTeamMember(id).name;
}
```

### `projects/eventops-poc/app/lib/types.ts`

```typescript
export type EventTypology =
  | "seminaire"
  | "conference"
  | "atelier"
  | "evenement_interne"
  | "lancement";

export type EventFormat = "presentiel" | "distanciel" | "hybride";

export type TaskStatus =
  | "disponible"
  | "attribuee"
  | "en_cours"
  | "bloquee"
  | "soumise"
  | "validee";

export type TaskPriority = "basse" | "normale" | "haute" | "critique";

export type TaskCategory =
  | "cadrage"
  | "budget"
  | "contenu"
  | "communication"
  | "participants"
  | "logistique"
  | "technique"
  | "equipe"
  | "controle"
  | "jour_j"
  | "bilan"
  | "lieu"
  | "accueil"
  | "prestataires"
  | "contractuel";

export type TeamMemberId = "sarah" | "louis" | "amina";

export type ActiveRole = TeamMemberId;

export type ObservationKind = "note" | "block" | "reopen" | "submit" | "assign";

export interface TeamMember {
  id: TeamMemberId;
  name: string;
  roleLabel: string;
  isManager: boolean;
}

export interface EventBrief {
  name: string;
  typology: EventTypology;
  objective: string;
  date: string;
  startTime: string;
  endTime: string;
  format: EventFormat;
  targetAudience: string;
  expectedParticipants: number;
  indicativeBudget: number;
  location: string;
  teamMemberIds: TeamMemberId[];
}

export interface Observation {
  id: string;
  authorId: TeamMemberId;
  text: string;
  createdAt: string;
  kind: ObservationKind;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  priority: TaskPriority;
  dueDate: string;
  offsetDays: number;
  assigneeId: TeamMemberId | null;
  status: TaskStatus;
  observations: Observation[];
  dependencyIds: string[];
  ruleOrigin: string;
  blockReason?: string;
}

export interface AppState {
  event: EventBrief | null;
  tasks: Task[];
  activeRole: ActiveRole;
  generatedAt: string | null;
}

export interface DashboardIndicators {
  total: number;
  disponible: number;
  attribuee: number;
  enCours: number;
  bloquee: number;
  soumise: number;
  validee: number;
  enRetard: number;
  progressPercent: number;
  byMember: Record<TeamMemberId, number>;
}

export interface TaskTemplate {
  idSuffix: string;
  title: string;
  description: string;
  category: TaskCategory;
  priority: TaskPriority;
  offsetDays: number;
  ruleOrigin: string;
  dependencySuffixes?: string[];
}

export interface BriefValidationIssue {
  field: string;
  message: string;
}

export type MainView =
  | "brief"
  | "dashboard"
  | "liste"
  | "retroplanning"
  | "manager"
  | "collaborateur";
```

### `projects/eventops-poc/app/lib/validate-brief.ts`

```typescript
import type { EventBrief, BriefValidationIssue } from "./types";
import { TEAM_MEMBER_IDS } from "./team";
import { parseLocalDate, todayLocalIso } from "./date-utils";

const TYPOLOGIES = new Set([
  "seminaire",
  "conference",
  "atelier",
  "evenement_interne",
  "lancement",
]);

const FORMATS = new Set(["presentiel", "distanciel", "hybride"]);

function isValidTime(value: string): boolean {
  return /^\d{2}:\d{2}$/.test(value);
}

export function validateEventBrief(
  brief: EventBrief,
  now: Date = new Date(),
): BriefValidationIssue[] {
  const issues: BriefValidationIssue[] = [];

  if (!brief.name.trim()) {
    issues.push({ field: "name", message: "Le nom de l’événement est obligatoire." });
  }

  if (!TYPOLOGIES.has(brief.typology)) {
    issues.push({ field: "typology", message: "Typologie invalide." });
  }

  if (!brief.objective.trim()) {
    issues.push({
      field: "objective",
      message: "L’objectif ou la description courte est obligatoire.",
    });
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(brief.date)) {
    issues.push({ field: "date", message: "La date doit être au format AAAA-MM-JJ." });
  } else {
    const eventDay = parseLocalDate(brief.date);
    const today = parseLocalDate(todayLocalIso(now));
    if (eventDay.getTime() <= today.getTime()) {
      issues.push({
        field: "date",
        message: "La date de l’événement doit être future.",
      });
    }
  }

  if (!isValidTime(brief.startTime)) {
    issues.push({ field: "startTime", message: "Heure de début invalide." });
  }

  if (!isValidTime(brief.endTime)) {
    issues.push({ field: "endTime", message: "Heure de fin invalide." });
  }

  if (
    isValidTime(brief.startTime) &&
    isValidTime(brief.endTime) &&
    brief.endTime <= brief.startTime
  ) {
    issues.push({
      field: "endTime",
      message: "L’heure de fin doit être postérieure à l’heure de début.",
    });
  }

  if (!FORMATS.has(brief.format)) {
    issues.push({ field: "format", message: "Format invalide." });
  }

  if (!brief.targetAudience.trim()) {
    issues.push({ field: "targetAudience", message: "Le public cible est obligatoire." });
  }

  if (
    !Number.isFinite(brief.expectedParticipants) ||
    brief.expectedParticipants < 1
  ) {
    issues.push({
      field: "expectedParticipants",
      message: "Le nombre de participants attendus doit être au moins 1.",
    });
  }

  if (!Number.isFinite(brief.indicativeBudget) || brief.indicativeBudget < 0) {
    issues.push({
      field: "indicativeBudget",
      message: "Le budget indicatif doit être un nombre positif ou nul.",
    });
  }

  if (!brief.teamMemberIds.length) {
    issues.push({
      field: "teamMemberIds",
      message: "Sélectionnez au moins un membre d’équipe.",
    });
  }

  for (const id of brief.teamMemberIds) {
    if (!TEAM_MEMBER_IDS.includes(id)) {
      issues.push({
        field: "teamMemberIds",
        message: `Membre d’équipe inconnu: ${id}`,
      });
    }
  }

  return issues;
}

export function isEventBriefValid(brief: EventBrief, now?: Date): boolean {
  return validateEventBrief(brief, now).length === 0;
}
```

### `projects/eventops-poc/app/lib/workflow.ts`

```typescript
import type { Observation, Task, TaskStatus, TeamMemberId } from "./types";
import { isManagerRole } from "./team";

export class WorkflowError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WorkflowError";
  }
}

function cloneTasks(tasks: Task[]): Task[] {
  return tasks.map((task) => ({
    ...task,
    observations: task.observations.map((observation) => ({ ...observation })),
    dependencyIds: [...task.dependencyIds],
  }));
}

function nowIso(now: Date): string {
  return now.toISOString();
}

function makeObservation(
  authorId: TeamMemberId,
  text: string,
  kind: Observation["kind"],
  now: Date,
): Observation {
  return {
    id: `obs-${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
    authorId,
    text,
    createdAt: nowIso(now),
    kind,
  };
}

function updateTask(
  tasks: Task[],
  taskId: string,
  updater: (task: Task) => Task,
): Task[] {
  const next = cloneTasks(tasks);
  const index = next.findIndex((task) => task.id === taskId);
  if (index < 0) {
    throw new WorkflowError(`Tâche introuvable: ${taskId}`);
  }
  next[index] = updater(next[index]);
  return next;
}

const MANAGER_TRANSITIONS: Partial<Record<TaskStatus, TaskStatus[]>> = {
  disponible: ["attribuee"],
  attribuee: ["en_cours"],
  soumise: ["validee", "en_cours"],
  bloquee: ["en_cours"],
};

const COLLABORATOR_TRANSITIONS: Partial<Record<TaskStatus, TaskStatus[]>> = {
  disponible: ["attribuee"],
  attribuee: ["en_cours"],
  en_cours: ["bloquee", "soumise"],
  bloquee: ["en_cours"],
};

function assertTransition(
  role: TeamMemberId,
  from: TaskStatus,
  to: TaskStatus,
): void {
  const table = isManagerRole(role) ? MANAGER_TRANSITIONS : COLLABORATOR_TRANSITIONS;
  const allowed = table[from] ?? [];
  if (!allowed.includes(to)) {
    throw new WorkflowError(
      `Transition interdite pour ${role}: ${from} → ${to}`,
    );
  }
}

/** Affectation en masse (manager). */
export function assignTasks(
  tasks: Task[],
  taskIds: string[],
  assigneeId: TeamMemberId,
  actorId: TeamMemberId,
  now: Date = new Date(),
): Task[] {
  if (!isManagerRole(actorId)) {
    throw new WorkflowError("Seul le manager peut affecter en masse.");
  }
  if (assigneeId === "sarah") {
    throw new WorkflowError("Affectez Louis ou Amina, pas le manager.");
  }
  if (taskIds.length === 0) {
    throw new WorkflowError("Aucune tâche sélectionnée.");
  }

  let next = cloneTasks(tasks);
  for (const taskId of taskIds) {
    next = updateTask(next, taskId, (task) => {
      if (task.status === "validee") {
        throw new WorkflowError(`Impossible d’affecter une tâche validée (${taskId}).`);
      }
      const nextStatus: TaskStatus =
        task.status === "disponible" ? "attribuee" : task.status;
      if (task.status === "disponible") {
        assertTransition(actorId, "disponible", "attribuee");
      }
      return {
        ...task,
        assigneeId,
        status: nextStatus,
        observations: [
          ...task.observations,
          makeObservation(
            actorId,
            `Affectée à ${assigneeId}.`,
            "assign",
            now,
          ),
        ],
      };
    });
  }
  return next;
}

/** Collaborateur récupère une tâche disponible. */
export function claimAvailableTask(
  tasks: Task[],
  taskId: string,
  actorId: TeamMemberId,
  now: Date = new Date(),
): Task[] {
  if (isManagerRole(actorId)) {
    throw new WorkflowError("Le manager n’utilise pas la récupération collaborateur.");
  }

  return updateTask(tasks, taskId, (task) => {
    if (task.status !== "disponible" || task.assigneeId !== null) {
      throw new WorkflowError("Seule une tâche disponible peut être récupérée.");
    }
    assertTransition(actorId, "disponible", "attribuee");
    return {
      ...task,
      assigneeId: actorId,
      status: "attribuee",
      observations: [
        ...task.observations,
        makeObservation(actorId, "Tâche récupérée depuis le pool.", "assign", now),
      ],
    };
  });
}

export function startTask(
  tasks: Task[],
  taskId: string,
  actorId: TeamMemberId,
  now: Date = new Date(),
): Task[] {
  return updateTask(tasks, taskId, (task) => {
    if (!isManagerRole(actorId) && task.assigneeId !== actorId) {
      throw new WorkflowError("Vous ne pouvez démarrer que vos tâches.");
    }
    if (task.status !== "attribuee") {
      throw new WorkflowError("Seule une tâche attribuée peut être démarrée.");
    }
    assertTransition(actorId, "attribuee", "en_cours");
    return {
      ...task,
      status: "en_cours",
      observations: [
        ...task.observations,
        makeObservation(actorId, "Tâche démarrée.", "note", now),
      ],
    };
  });
}

export function addObservation(
  tasks: Task[],
  taskId: string,
  actorId: TeamMemberId,
  text: string,
  now: Date = new Date(),
): Task[] {
  const trimmed = text.trim();
  if (!trimmed) {
    throw new WorkflowError("L’observation ne peut pas être vide.");
  }
  return updateTask(tasks, taskId, (task) => {
    if (
      !isManagerRole(actorId) &&
      task.assigneeId !== actorId &&
      task.status !== "disponible"
    ) {
      throw new WorkflowError("Observation non autorisée sur cette tâche.");
    }
    return {
      ...task,
      observations: [
        ...task.observations,
        makeObservation(actorId, trimmed, "note", now),
      ],
    };
  });
}

export function blockTask(
  tasks: Task[],
  taskId: string,
  actorId: TeamMemberId,
  reason: string,
  now: Date = new Date(),
): Task[] {
  if (isManagerRole(actorId)) {
    throw new WorkflowError("Le blocage est une action collaborateur dans ce POC.");
  }
  const trimmed = reason.trim();
  if (!trimmed) {
    throw new WorkflowError("Un motif de blocage est obligatoire.");
  }
  return updateTask(tasks, taskId, (task) => {
    if (task.assigneeId !== actorId) {
      throw new WorkflowError("Vous ne pouvez bloquer que vos tâches.");
    }
    assertTransition(actorId, "en_cours", "bloquee");
    return {
      ...task,
      status: "bloquee",
      blockReason: trimmed,
      observations: [
        ...task.observations,
        makeObservation(actorId, `Blocage: ${trimmed}`, "block", now),
      ],
    };
  });
}

export function resumeBlockedTask(
  tasks: Task[],
  taskId: string,
  actorId: TeamMemberId,
  now: Date = new Date(),
): Task[] {
  return updateTask(tasks, taskId, (task) => {
    if (task.status !== "bloquee") {
      throw new WorkflowError("Seule une tâche bloquée peut être reprise.");
    }
    if (!isManagerRole(actorId) && task.assigneeId !== actorId) {
      throw new WorkflowError("Vous ne pouvez reprendre que vos tâches bloquées.");
    }
    assertTransition(actorId, "bloquee", "en_cours");
    return {
      ...task,
      status: "en_cours",
      blockReason: undefined,
      observations: [
        ...task.observations,
        makeObservation(actorId, "Blocage résolu — reprise.", "note", now),
      ],
    };
  });
}

export function submitTask(
  tasks: Task[],
  taskId: string,
  actorId: TeamMemberId,
  note: string = "",
  now: Date = new Date(),
): Task[] {
  if (isManagerRole(actorId)) {
    throw new WorkflowError("Le manager ne soumet pas ses propres tâches dans ce POC.");
  }
  return updateTask(tasks, taskId, (task) => {
    if (task.assigneeId !== actorId) {
      throw new WorkflowError("Vous ne pouvez soumettre que vos tâches.");
    }
    assertTransition(actorId, "en_cours", "soumise");
    const observations = [...task.observations];
    const trimmed = note.trim();
    observations.push(
      makeObservation(
        actorId,
        trimmed ? `Soumission: ${trimmed}` : "Tâche soumise au manager.",
        "submit",
        now,
      ),
    );
    return {
      ...task,
      status: "soumise",
      observations,
    };
  });
}

export function validateTask(
  tasks: Task[],
  taskId: string,
  actorId: TeamMemberId,
  now: Date = new Date(),
): Task[] {
  if (!isManagerRole(actorId)) {
    throw new WorkflowError("Seul le manager valide définitivement une tâche.");
  }
  return updateTask(tasks, taskId, (task) => {
    assertTransition(actorId, "soumise", "validee");
    return {
      ...task,
      status: "validee",
      observations: [
        ...task.observations,
        makeObservation(actorId, "Tâche validée.", "note", now),
      ],
    };
  });
}

export function reopenTask(
  tasks: Task[],
  taskId: string,
  actorId: TeamMemberId,
  reason: string,
  now: Date = new Date(),
): Task[] {
  if (!isManagerRole(actorId)) {
    throw new WorkflowError("Seul le manager peut rouvrir une tâche.");
  }
  const trimmed = reason.trim();
  if (!trimmed) {
    throw new WorkflowError("Une observation de réouverture est obligatoire.");
  }
  return updateTask(tasks, taskId, (task) => {
    assertTransition(actorId, "soumise", "en_cours");
    return {
      ...task,
      status: "en_cours",
      observations: [
        ...task.observations,
        makeObservation(actorId, `Réouverture: ${trimmed}`, "reopen", now),
      ],
    };
  });
}
```

### `projects/eventops-poc/app/next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

### `projects/eventops-poc/app/next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

### `projects/eventops-poc/app/package-lock.json`

Fichier généré (`npm install`). Contenu complet **exclu** (seuil > 250 lignes).

- lignes : 7657
- taille : 260236 octets
- SHA-256 : `eb49a0effd5f143ba12f6eea6afb579a42319618f07d83775773d298a90064ae`
- diff stat : fichier ajouté généré (7657 lignes)

### `projects/eventops-poc/app/package.json`

```json
{
  "name": "eventops-poc",
  "private": true,
  "version": "0.1.0",
  "description": "EventOps POC — prototype local de pilotage opérationnel d’événements",
  "scripts": {
    "dev": "next dev --port 3030",
    "build": "next build",
    "start": "next start --port 3030",
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
    "jsdom": "^26.1.0",
    "typescript": "^5.8.3",
    "vitest": "^3.1.2"
  }
}
```

### `projects/eventops-poc/app/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
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

### `projects/eventops-poc/app/vitest.config.ts`

```typescript
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  esbuild: {
    jsx: "automatic",
  },
  test: {
    environment: "node",
    include: ["__tests__/**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
```

## 16. Règles métier implémentées
- Socle commun (10 tâches) : brief, budget, déroulé, invitations, inscriptions, logistique, briefing équipe, contrôle final, jour J, bilan
- Présentiel/hybride : lieu, aménagement/signalétique, accueil physique
- Distanciel/hybride : plateforme, test technique, consignes de connexion
- ≥ 50 participants : flux, capacité, plan d’accueil
- Budget ≥ 5 000 € : prestataires, suivi budgétaire renforcé
- Budget ≥ 15 000 € : validation managériale renforcée, contrôle contractuel démo
- Conférence/lancement : communication externe, intervenants
- Événement interne : communication interne, disponibilités équipe
- Échéances relatives J-x/J+x ; retard signalé sans mutation auto du statut
- Transitions manager/collaborateur selon contrat ; collaborateur ne valide jamais
- Affectation en masse ; claim pool ; observations ; blocage ; soumission ; validation ; réouverture
- Indicateurs dashboard + répartition par membre
- Persistance localStorage isolée + reset démonstration

## 17. Critères d’acceptation couverts
- CA-01 PASS — formulaire brief + validation
- CA-02 PASS — ≥ 10 tâches sur exemple (tests)
- CA-03 PASS — hybride 80 / 12 000 € déclenche onsite+remote+capacity+budget.5k (tests)
- CA-04 PASS — échéances relatives (tests)
- CA-05 PASS — affectation masse (tests + UI)
- CA-06 PASS — vue collaborateur filtre par assignee
- CA-07 PASS — start/observe/submit (tests + UI)
- CA-08 PASS — validate/reopen (tests + UI)
- CA-09 PASS — claim available (tests + UI)
- CA-10 PASS — rétroplanning tri + J-x/J+x
- CA-11 PASS — dashboard computeIndicators
- CA-12 PASS — saveState/loadState localStorage
- CA-13 PASS — clearState + reset UI
- CA-14 PASS — aucune clé/API/secret ; deps locales only
- CA-15 PASS — README installation/lancement
- CA-16 PASS — lint/typecheck/test/build verts

## 18. Tests créés
- `__tests__/generate-tasks.test.ts` — 11 tests moteur
- `__tests__/workflow.test.ts` — 6 tests workflow/indicateurs
Total : 17 tests Vitest.

## 19. Résultats exacts QA
### lint
```
> eventops-poc@0.1.0 lint
> next lint
✔ No ESLint warnings or errors
```
### typecheck
```
> eventops-poc@0.1.0 typecheck
> tsc --noEmit
(exit 0, aucune erreur)
```
### tests
```
Test Files  2 passed (2)
Tests  17 passed (17)
```
### build
```
▲ Next.js 15.5.22
✓ Compiled successfully
✓ Generating static pages (4/4)
Route (app) / — static
(exit 0)
```

## 20. git diff --stat
(fichiers entièrement nouveaux / untracked — stat simulé des ajouts)
```
 projects/eventops-poc/01-cadrage/01-fast-track-poc-contract.md | 126 +
 projects/eventops-poc/README.md | 115 +
 projects/eventops-poc/app/.gitignore | 23 +
 projects/eventops-poc/app/__tests__/generate-tasks.test.ts | 132 +
 projects/eventops-poc/app/__tests__/workflow.test.ts | 98 +
 projects/eventops-poc/app/app/globals.css | 447 +
 projects/eventops-poc/app/app/layout.tsx | 20 +
 projects/eventops-poc/app/app/page.tsx | 7 +
 projects/eventops-poc/app/components/EventOpsApp.tsx | 1162 +
 projects/eventops-poc/app/eslint.config.mjs | 14 +
 projects/eventops-poc/app/lib/date-utils.ts | 48 +
 projects/eventops-poc/app/lib/generate-tasks.ts | 61 +
 projects/eventops-poc/app/lib/indicators.ts | 81 +
 projects/eventops-poc/app/lib/labels.ts | 66 +
 projects/eventops-poc/app/lib/storage.ts | 71 +
 projects/eventops-poc/app/lib/task-rules.ts | 316 +
 projects/eventops-poc/app/lib/team.ts | 45 +
 projects/eventops-poc/app/lib/types.ts | 131 +
 projects/eventops-poc/app/lib/validate-brief.ts | 118 +
 projects/eventops-poc/app/lib/workflow.ts | 347 +
 projects/eventops-poc/app/next-env.d.ts | 6 +
 projects/eventops-poc/app/next.config.ts | 7 +
 projects/eventops-poc/app/package-lock.json | 7657 + (generated, content excluded from pack body)
 projects/eventops-poc/app/package.json | 30 +
 projects/eventops-poc/app/tsconfig.json | 23 +
 projects/eventops-poc/app/vitest.config.ts | 17 +
```

## 21. git diff --name-status
```
A	projects/eventops-poc/01-cadrage/01-fast-track-poc-contract.md
A	projects/eventops-poc/README.md
A	projects/eventops-poc/app/.gitignore
A	projects/eventops-poc/app/__tests__/generate-tasks.test.ts
A	projects/eventops-poc/app/__tests__/workflow.test.ts
A	projects/eventops-poc/app/app/globals.css
A	projects/eventops-poc/app/app/layout.tsx
A	projects/eventops-poc/app/app/page.tsx
A	projects/eventops-poc/app/components/EventOpsApp.tsx
A	projects/eventops-poc/app/eslint.config.mjs
A	projects/eventops-poc/app/lib/date-utils.ts
A	projects/eventops-poc/app/lib/generate-tasks.ts
A	projects/eventops-poc/app/lib/indicators.ts
A	projects/eventops-poc/app/lib/labels.ts
A	projects/eventops-poc/app/lib/storage.ts
A	projects/eventops-poc/app/lib/task-rules.ts
A	projects/eventops-poc/app/lib/team.ts
A	projects/eventops-poc/app/lib/types.ts
A	projects/eventops-poc/app/lib/validate-brief.ts
A	projects/eventops-poc/app/lib/workflow.ts
A	projects/eventops-poc/app/next-env.d.ts
A	projects/eventops-poc/app/next.config.ts
A	projects/eventops-poc/app/package-lock.json  # generated — content excluded (>250 lines)
A	projects/eventops-poc/app/package.json
A	projects/eventops-poc/app/tsconfig.json
A	projects/eventops-poc/app/vitest.config.ts
```

Status court observé :
```
?? .tmp-sfia-review/
?? projects/eventops-poc/
```

## 22. Réserves classées
### Bloquantes
Aucune.

### Majeures
Aucune.

### Mineures
- `next lint` émet un avis de dépréciation Next 16 (non bloquant ; lint propre).
- Pas de tests UI E2E (hors exigence — tests métier purs privilégiés).

### Environnementales
- Vulnerabilités npm audit reportées sur l’arbre de deps (héritage écosystème) — non traitées dans ce cycle POC local.

## 23. Garde-fous vérifiés
- Un cycle = un résultat utile : OK
- Pas de backend/auth/Supabase/IA/réseau métier : OK
- Pas de modification hors `projects/eventops-poc/**` : OK
- Pas de modification method/prompts/scripts/autre projet : OK
- Pas de commit/push/PR/merge projet : OK (à ce stade)
- Push L3 uniquement prévu pour handoff : en cours après ce pack

## 24. Décisions Morris consommées
- GO 31 juillet 2026 pour exécution locale de cette tranche POC.

## 25. Décisions non prises
Nom commercial ; stack production ; Supabase ; backend ; modèle IA ; multi-tenant ; notifications ; déploiement ; modèle économique.

## 26. Review Handoff
À compléter après publication publisher :
- branche : `sfia/review-handoff`
- path canonique : `sfia-review-handoff/latest-chatgpt-review.md`
- commit / push / SHA local / SHA distant / relecture distante / verdict : pending publisher

## 27. Verdict
READY FOR MORRIS FUNCTIONAL REVIEW — sous réserve de publication handoff vérifiée à distance dans la même exécution.
