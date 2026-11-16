# Review Pack Full — SFIA Studio Next — ML4D Ensemble 04 TECHNICAL CONSOLIDATION

Date/heure: 2026-11-16 21:49 CET
Contrat: R5 / ML4D — ENSEMBLE 04 CONSOLIDATION TECHNIQUE ET PRÉPARATION RECETTE
Typologie: RUN / correction bornée · Review Pack Full · Handoff publish-in-cycle

## 1. Verdict

**ENSEMBLE 04 — TECHNICAL CANDIDATE READY FOR CHATGPT REVIEW**

SHA candidat final: `20fb41baa534b5a802a275b6944fc267ccaa2192`
Parent UX-005: `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`
Candidat initial repris: `660ff4243fafb586bfa0dd9b377382952e831ca9`
Branche: `feat/next-ml4d-project-space-20261116` (locale, **non poussée**)

**RECETTE DEPLOYMENT PLAN PREPARED**
**RECETTE NOT MODIFIED**
**VISUAL ACCEPTANCE PENDING MORRIS**

**NO PROJECT PUSH / NO PR / NO MERGE / NO STABLE PROMOTION**
**GATE C OPEN / ML5 NOT STARTED**
Aucun ADOPTED.

Acceptation visuelle Figma↔runtime: **Morris uniquement**, après GO RECETTE. Les contrôles Cursor ne la remplacent pas.

## 2. Git Truth Check

### Initial
- repo: mcleland147/sfia-workspace · remote origin GitHub
- branch: `feat/next-ml4d-project-space-20261116` @ `660ff4243fafb586bfa0dd9b377382952e831ca9` (puis consolidation)
- parent: `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` · UX-005 ancestor OK
- origin/main: `997d4c4e8204993de7107552898c8cc08cd3b0ed`
- worktree: propre hors `.tmp-sfia-review`
- ahead origin/main: 15+ commits ligneage next ; behind 0

### Final
- HEAD: `20fb41baa534b5a802a275b6944fc267ccaa2192`
- commits cycle consolidation: `660ff424` → `20fb41ba` (ce SHA)
- status: seul `.tmp-sfia-review/chatgpt-review.md` local (pack)
- aucun upstream produit

## 3. Sources relues

SFIA v2.6 (routing, template §6.6, operating model, guardrails) · SEF/roadmap/ENV-01/versioning/naming · décision 2026-11-11 · contrat Figma-code · cadrage-r4 · handoff précédent `a5c2aa2f` / blob `790fb552` · Figma 652:8/58/108/158 (non modifiées).

Registre ML4D candidate: **non modifié**.

## 4. Corrections de consolidation

1. **T13** — scénario Playwright HTTP 500 → `temporary` → Retry → récupération ; pas de fuite de nom ; deep-nav bloquée.
2. **T16** — pending sessionStorage survit nav Projet/Journal → retour Travail (banner + reconcile) ; scope shell, pas Ensemble 05 scroll.
3. **TypeScript** — comparaison parent↔candidat: **32 erreurs identiques**, toutes hors `src/` Ensemble 04 ; **0** erreur sur chemins E04.
4. **ESLint** scoped E04: exit 0. `next lint` scoped: exit 0 (warning préexistant `sas-presentation.ts` hors E04).
5. **next build**: PASS exit 0 · BUILD_ID `qIIXEUw8Sbsk2tcVL5Obq` · SHA `20fb41baa534b5a802a275b6944fc267ccaa2192`.
6. **Résultats et preuves**: mapping `?surface=publication` **conservé provisoirement** ; title clarifié ; **KNOWN GAP / MORRIS DECISION REQUIRED** (PublicationInspectionPanel = prepare/authorize/dispatch Git — effet externe potentiel si autorisé, pas une surface « preuves » générique).
7. **RECETTE**: inspection read-only ; plan `recette-cutover-plan.md` — **non exécuté**.

## 5. Qualité — TypeScript (qualification exacte)

Commande: `npx tsc --noEmit -p tsconfig.json` dans `projects/sfia-studio-next/web` avec DATABASE_URL DEV `:5433/sfia_next_dev`.

| Arbre | Exit | # error TS | Delta |
| --- | --- | --- | --- |
| Parent `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` | 2 | 32 | — |
| Candidat (pré-consolidation) | 2 | 32 | **identique** (comm vide) |
| Chemins E04 src | — | **0** | — |

Exemples (antérieurs, fixtures tests):
- `tests/integration/create-project.pg.test.ts:290` TS2551 `projectId` vs `project`
- `tests/integration/ml4c-prior-proposal.pg.test.ts:*` TS2739 missing `projectIntention`/`desiredOutcome`/`initialScope`/`proposedProjectName`
- `tests/unit/semantic-qualification.test.ts`, `s05-pending-policy.test.ts`, `ml4c-temp-restitution.test.ts`, `ml4c-s05-thread-turn-qualification.test.ts`

**Ne pas présenter tsc workspace comme PASS.** Build Next n'échoue pas sur ces fixtures tests.

## 6. Lint / Build

| Commande | Exit | Notes |
| --- | --- | --- |
| eslint E04 paths `--max-warnings 0` | 0 | |
| next lint dirs projects/figma/shell | 0 | warning unused `ASSESSMENT_TO_STAGE` hors E04 |
| `npx next build` @ `20fb41baa534b5a802a275b6944fc267ccaa2192` | 0 | BUILD_ID `qIIXEUw8Sbsk2tcVL5Obq` · Next 15.5.29 |

Config non secrète: `NODE_ENV` production build local DEV workspace ; pas de secrets dans le log.

## 7. Tests

| Suite | Résultat |
| --- | --- |
| vitest studio-rail (cycle précédent + inchangé core) | PASS |
| Playwright project-space-ensemble04 (identity + **T13** + **T16**) | PASS 3 |
| project-surface-nav-intent | PASS 3 |
| ux003-unified-entry | PASS 10 |
| ux004-portfolio-shell | PASS 10 |
| ml4c-long-thread-composer | PASS 1 |

Niveau: **DETERMINISTIC / BROWSER FAKE** (Playwright :3101 + fixture Nora). ≠ LIVE/REAL/RECETTE.

### T13
Injecte GET `/api/projects/:id` → 500 ; UI `data-unavailable-kind=temporary` ; Retry ; recovery ; nom non fuité.

### T16
Pending client `sfia.thread.pending:` survit nav shell ; retour Travail. **Hors scope Ens.05**: scroll fil, réponses structurantes.

### Mapping Résultats/preuves
Destination: `PublicationInspectionPanel` via `surface=publication` — publication documentaire Git (prepare/authorize/dispatch). Risque: libellé Figma ≠ responsabilité D8 publication. Solution minimale: conserver + title honest + décision Morris. Pas de nouvelle surface.

## 8. Preuves visuelles (inventaire — binaires non inclus dans handoff)

Chemin: `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/`
Viewport: 1680×970 · SHA capture initial cycle: lié build DEV/E2E · candidat final `20fb41baa534b5a802a275b6944fc267ccaa2192`

| Fichier | Scénario |
| --- | --- |
| runtime-travail-1680x970.png | Travail |
| runtime-projet-overview-1680x970.png | Projet |
| runtime-journal-nav-1680x970.png | Journal sélectionné |
| runtime-unavailable-1680x970.png | Indisponible |
| figma-652-*.png | Références Figma MCP |
| manifest.json | métadonnées capture |
| candidate-manifest.md | manifeste candidat |
| recette-cutover-plan.md | plan ENV-01 |

Conformité visuelle définitive: **PENDING MORRIS** après RECETTE.

## 9. RECETTE existante (read-only)

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| LaunchAgent | com.sfia.studio.next.recette.ml4d-ux004 |
| SHA servi | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| BUILD_ID | `bURdIMEzv8pRSJCzgsiDf` |
| Worktree | `…/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672` |
| Nora | LIVE path (fixture non forcée) |
| Action ce cycle | **aucune** (pas d'arrêt, pas de replace) |

Plan: voir fichier `recette-cutover-plan.md` (section A–G) — exécution **après** revue ChatGPT + GO Morris.

## 10. Inventaire Git `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`..`20fb41baa534b5a802a275b6944fc267ccaa2192`

```
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/web/docs/ensemble-04-project-space.md
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/candidate-manifest.md
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/figma-652-108-journal.png
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/figma-652-158-unavailable.png
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/figma-652-58-projet.png
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/figma-652-8-travail.png
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/manifest.json
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/recette-cutover-plan.md
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-journal-nav-1680x970.png
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-projet-overview-1680x970.png
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-travail-1680x970.png
A	projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-unavailable-1680x970.png
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
A	projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
A	projects/sfia-studio-next/web/src/components/figma/ProjectUnavailable.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
A	projects/sfia-studio-next/web/src/components/shell/ProjectSpaceContext.tsx
M	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
M	projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
M	projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
M	projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts

```

Diffstat:
```
 .../construction/delivery-history.md               |  35 ++++
 .../web/docs/ensemble-04-project-space.md          |  37 ++++
 .../candidate-manifest.md                          |  15 ++
 .../figma-652-108-journal.png                      | Bin 0 -> 106478 bytes
 .../figma-652-158-unavailable.png                  | Bin 0 -> 75335 bytes
 .../figma-652-58-projet.png                        | Bin 0 -> 125734 bytes
 .../figma-652-8-travail.png                        | Bin 0 -> 127286 bytes
 .../ensemble-04-project-space/manifest.json        |  21 ++
 .../recette-cutover-plan.md                        |  82 ++++++++
 .../runtime-journal-nav-1680x970.png               | Bin 0 -> 115314 bytes
 .../runtime-projet-overview-1680x970.png           | Bin 0 -> 110043 bytes
 .../runtime-travail-1680x970.png                   | Bin 0 -> 168057 bytes
 .../runtime-unavailable-1680x970.png               | Bin 0 -> 42351 bytes
 .../web/src/app/projects/[projectId]/page.tsx      | 214 +++++++++++++++----
 .../web/src/components/figma/ProjectChrome.tsx     | 148 ++++++++-----
 .../web/src/components/figma/ProjectOverview.tsx   | 147 +++++++++++++
 .../src/components/figma/ProjectUnavailable.tsx    |  92 ++++++++
 .../web/src/components/figma/tokens.css            |  43 ++++
 .../src/components/shell/ProjectSpaceContext.tsx   |  44 ++++
 .../web/src/components/shell/StudioShell.tsx       |  70 ++++++-
 .../web/src/components/shell/studio-rail.ts        |  45 +++-
 .../web/tests/e2e/ml3-pilotage.spec.ts             |   3 +-
 .../tests/e2e/ml4c-long-thread-composer.spec.ts    |   2 +-
 .../web/tests/e2e/project-space-ensemble04.spec.ts | 232 +++++++++++++++++++++
 .../tests/e2e/project-space-f2-captures.spec.ts    | 107 ++++++++++
 .../tests/e2e/project-surface-nav-intent.spec.ts   |   8 +-
 .../web/tests/e2e/ux004-portfolio-shell.spec.ts    |   5 +-
 .../web/tests/unit/studio-rail.test.ts             |  19 +-
 28 files changed, 1242 insertions(+), 127 deletions(-)

```

## 11. Décisions Morris requises

1. Revue technique ChatGPT de ce handoff.
2. GO mise à disposition RECETTE existante (:3200) selon plan.
3. Acceptation visuelle Figma↔runtime **par Morris** en RECETTE.
4. Arbitrage « Résultats et preuves » ↔ `publication`.

## 12. Instruction ChatGPT

Lire exclusivement `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (ce pack).
Ne pas substituer une revue visuelle à celle de Morris.

---

## Appendix A — Fichiers créés (contenu intégral texte)

### `projects/sfia-studio-next/web/docs/ensemble-04-project-space.md`

```
# Ensemble 04 — Espace projet (shell UX/UI)

Date: 2026-11-16
Branche: `feat/next-ml4d-project-space-20261116`
Figma: `itgvCulInEnFY6DvgIegvP` frames `652:8` / `652:58` / `652:108` / `652:158`

## Responsabilités

| Concern | Owner |
| --- | --- |
| Identité / accès projet | `GET /api/projects/[projectId]` + `getOwnedProjectContext` |
| Nom affiché (rail + breadcrumb) | `ProjectSpaceContext` ← page load |
| Navigation surfaces | `studio-rail` + `StudioShell` (rail unique) |
| Chrome / breadcrumb | `ProjectChrome` (plus de barre d’onglets centrale) |
| Vue d’ensemble | `ProjectOverview` (`?surface=projet`) |
| Indisponible | `ProjectUnavailable` (401 / 404 / 5xx / loading) |
| Travail / Nora | `NoraConversation` inchangé fonctionnellement |

## Surfaces

| Label rail | Query | Notes |
| --- | --- | --- |
| Travail | `?surface=travail` | conversation réelle |
| Projet | `?surface=projet` | consultation, données existantes uniquement |
| Journal | `?surface=journal` | existant |
| Trajectoire | `?surface=pilotage` | compat URL conservée |
| Documents / Git / Résultats | Accès directs | `document` / `git` / `publication` |

## Preuves F2

`web/docs/evidence/ensemble-04-project-space/` — captures 1680×970 runtime + références Figma.

## Hors périmètre (renvoi)

- Ensemble 05: fil Nora détaillé, scroll, réponses structurantes
- Ensemble 06: Documents / Journal métier
- Ensemble 07: Trajectoire / cycles / CKI

```

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/candidate-manifest.md`

```
# Manifeste candidat — Ensemble 04 Espace projet

| Champ | Valeur |
| --- | --- |
| Date | 2026-11-16 |
| Branche locale | `feat/next-ml4d-project-space-20261116` |
| Baseline parent | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| Lane build | DEV / Playwright E2E `:3101` + `sfia_next_e2e` |
| RECETTE | **NON PROMUE** — attendre GO Morris après revue |
| STABLE | non disponible |
| Contenu | Shell projet Figma 652:* ; surface `projet` ; unavailable sûr ; Nora réelle préservée |
| Preuves | `web/docs/evidence/ensemble-04-project-space/` |
| Non-revendications | Nora LIVE ; Git REAL ; OAuth LIVE ; ADOPTED |

Procédure proposée (hors cycle) : figer le SHA candidat, rebuild RECETTE isolé, bascule LaunchAgent uniquement après GO Morris explicite.

```

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/figma-652-108-journal.png`

*(binaire exclu du handoff — présent dans le commit candidat)*

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/figma-652-158-unavailable.png`

*(binaire exclu du handoff — présent dans le commit candidat)*

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/figma-652-58-projet.png`

*(binaire exclu du handoff — présent dans le commit candidat)*

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/figma-652-8-travail.png`

*(binaire exclu du handoff — présent dans le commit candidat)*

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/manifest.json`

```
{
  "capturedAt": "2026-11-16T20:32:23.796Z",
  "viewport": {
    "width": 1680,
    "height": 970
  },
  "projectName": "F2 Espace projet 1794861140944",
  "projectId": "proj_6cd3db50-1a76-49dc-bb55-db92f9daef54",
  "frames": {
    "travail": "652:8",
    "projet": "652:58",
    "journal": "652:108",
    "unavailable": "652:158"
  },
  "files": [
    "runtime-travail-1680x970.png",
    "runtime-projet-overview-1680x970.png",
    "runtime-journal-nav-1680x970.png",
    "runtime-unavailable-1680x970.png"
  ]
}
```

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/recette-cutover-plan.md`

```
# Plan de mise à disposition RECETTE — Ensemble 04 (NON EXÉCUTÉ)

Date: 2026-11-16
Statut: **PRÉPARÉ — EN ATTENTE GO MORRIS**
Lane cible: RECETTE existante `http://127.0.0.1:3200`
Aucune exécution dans le cycle de consolidation.

## A. État actuel (observé read-only)

| Champ | Valeur observée |
| --- | --- |
| URL | `http://127.0.0.1:3200` (login HTTP 200) |
| Processus | `node` PID observé (next-server 15.5.29) écoute localhost:3200 |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` (KeepAlive, RunAtLoad) |
| Script | `…/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/start-recette-sas-nora-bd8e1672.sh` |
| Worktree servi | `…/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672` |
| `SFIA_SOURCE_SHA` | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| BUILD_ID | `bURdIMEzv8pRSJCzgsiDf` (HTML + `.next/BUILD_ID`) |
| Mode | `NODE_ENV=production` ; Nora fixture **non** forcée (LIVE path) |
| Env file | `$HOME/.config/sfia-studio-next/recette/.env.local` (secrets non lus/non reportés) |
| Capacités présentes | Ensembles 01–03 + Sas Nora R1/R2 sur SHA UX-005 |
| Isolation cookies | Ports 310x/3200 partagent `127.0.0.1` — **pas** d’isolation session automatique |

Non observé dans ce cycle (sans ouverture secrets): détail rôle PG, dump DB, volumes uploads exacts, comptes OAuth.

## B. Nouveau candidat (à figer après revue)

| Champ | Valeur |
| --- | --- |
| Branche locale | `feat/next-ml4d-project-space-20261116` |
| Parent | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| SHA candidat (après consolidation) | *à reporter du HEAD final du cycle* |
| Migrations | aucune attendue |
| Compat 01–03 | shell projet seulement ; Portefeuille/Sas non redesignés |
| Tests | Ensemble04 + nav-intent + UX-003/004 + T13/T16 |

## C. Préservation

1. Dump logique DB RECETTE (outil habituel d’ops) **avant** bascule.
2. Conserver le worktree `…-bd8e1672` et le LaunchAgent `.bak` actuel.
3. Ne pas toucher DEV (:3102) ni STABLE.
4. Ne pas `drop` / migrate / truncate RECETTE.
5. Conserver volumes/documents/uploads.

## D. Bascule future (après GO)

1. `git fetch` / archive du SHA candidat figé.
2. Worktree dédié `…-recette-build-<sha12>` (pas hot reload).
3. `npm ci` + `next build` dans ce worktree avec env RECETTE.
4. Vérifier BUILD_ID produit.
5. Arrêt contrôlé LaunchAgent actuel.
6. Remplacer ProgramArguments/WorkingDirectory vers le nouveau start script (port **3200** inchangé).
7. `launchctl load` / kickstart.
8. Vérifier HTML build id + `SFIA_SOURCE_SHA` + smoke.

## E. Smoke post-bascule

Connexion · Portefeuille · Sas reprise · Travail · Projet · Journal · Trajectoire (`pilotage`) · indisponible · changement de projet sans fuite.

## F. Retour arrière

1. Relancer LaunchAgent / script `bd8e1672` + BUILD_ID `bURdIMEzv8pRSJCzgsiDf`.
2. Vérifier login 200 et SHA source.
3. Déclenchement: smoke critique rouge, perte de continuité, ou GO Morris rollback.

## G. Manifeste ENV-01 (brouillon)

| Clé | Valeur |
| --- | --- |
| source_sha | *(SHA candidat final)* |
| base_main_sha | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| build_id | *(après build RECETTE)* |
| environment | RECETTE |
| schema_revision | inchangé (à confirmer au build) |
| test_data_revision | données RECETTE conservées |
| quality_evidence | Review Pack + Playwright DEV/E2E |
| capabilities | Ensemble 04 shell projet |
| known_gaps | mapping « Résultats et preuves » ; Ens. 05–07 ; Nora LIVE ≠ FAKE |
| decision | PENDING Morris GO |
| product_version | `0.0.0-dev` / NO RELEASE |

**Ce plan n’autorise aucune bascule.**

```

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-journal-nav-1680x970.png`

*(binaire exclu du handoff — présent dans le commit candidat)*

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-projet-overview-1680x970.png`

*(binaire exclu du handoff — présent dans le commit candidat)*

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-travail-1680x970.png`

*(binaire exclu du handoff — présent dans le commit candidat)*

### `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-unavailable-1680x970.png`

*(binaire exclu du handoff — présent dans le commit candidat)*

### `projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx`

```
"use client";

import Link from "next/link";

type Knowledge = {
  subjects: Array<{ id: string; title: string; status: string }>;
  acquis: Array<{ id: string; kind: string; statement: string; status: string }>;
  openPoints: Array<{ id: string; statement: string; status: string }>;
};

export function ProjectOverview(props: {
  projectId: string;
  projectName: string;
  preparationId: string | null;
  knowledge: Knowledge | null;
  documentCount: number;
  messageCount: number;
  onOpenTravail: () => void;
}) {
  const openPoints =
    props.knowledge?.openPoints?.filter((o) => o.status === "OPEN") ?? [];
  const acquis =
    props.knowledge?.acquis?.filter((a) => a.status === "CURRENT") ?? [];
  const subjects = props.knowledge?.subjects ?? [];

  return (
    <div className="project-overview space-y-4" data-testid="project-overview">
      <section className="fig-panel space-y-3" data-testid="project-overview-identity">
        <h2 className="fig-panel-title">Identité</h2>
        <p className="text-base font-medium" data-testid="project-overview-name">
          {props.projectName}
        </p>
        <dl className="grid gap-2 text-sm muted sm:grid-cols-2">
          <div>
            <dt className="text-[10px] uppercase tracking-wide">Fil conversation</dt>
            <dd className="text-[var(--fg)]">{props.messageCount} message(s)</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wide">Documents Nora</dt>
            <dd className="text-[var(--fg)]">{props.documentCount}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wide">Sujets capitalisés</dt>
            <dd className="text-[var(--fg)]">{subjects.length}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wide">Préparation liée</dt>
            <dd className="text-[var(--fg)]">
              {props.preparationId ? "Oui" : "Non renseignée"}
            </dd>
          </div>
        </dl>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="fig-panel space-y-2" data-testid="project-overview-context">
          <h2 className="fig-panel-title">Contexte</h2>
          {subjects.length === 0 && acquis.length === 0 ? (
            <p className="text-sm muted">
              Aucun sujet ni acquis capitalisé pour l’instant.
            </p>
          ) : (
            <ul className="text-sm space-y-2">
              {subjects.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <span className="font-medium">{s.title}</span>
                </li>
              ))}
              {acquis.slice(0, 5).map((a) => (
                <li key={a.id} className="text-sm">
                  {a.statement}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="fig-panel space-y-2" data-testid="project-overview-open">
          <h2 className="fig-panel-title">Points à préciser</h2>
          {openPoints.length === 0 ? (
            <p className="text-sm muted">Aucun point ouvert capitalisé.</p>
          ) : (
            openPoints.slice(0, 6).map((o) => (
              <p key={o.id} className="text-sm">
                {o.statement}
              </p>
            ))
          )}
        </section>
      </div>

      <section className="fig-panel space-y-2" data-testid="project-overview-access">
        <h2 className="fig-panel-title">Repères et accès</h2>
        <ul className="text-sm space-y-1.5">
          <li>
            <Link
              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
              href={`/projects/${props.projectId}?surface=travail`}
              onClick={(e) => {
                e.preventDefault();
                props.onOpenTravail();
              }}
            >
              Travail avec Nora
            </Link>
            <span className="muted"> — conversation du projet</span>
          </li>
          <li>
            <Link
              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
              href={`/projects/${props.projectId}?surface=journal`}
            >
              Journal
            </Link>
            <span className="muted"> — sujets et acquis</span>
          </li>
          <li>
            <Link
              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
              href={`/projects/${props.projectId}?surface=document`}
            >
              Documents Nora
            </Link>
            <span className="muted"> — bibliothèque</span>
          </li>
          <li>
            <Link
              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
              href={`/projects/${props.projectId}?surface=pilotage`}
            >
              Trajectoire
            </Link>
            <span className="muted"> — pilotage existant</span>
          </li>
        </ul>
        <button
          type="button"
          className="btn mt-3"
          data-testid="project-overview-open-travail"
          onClick={props.onOpenTravail}
        >
          Ouvrir Travail avec Nora
        </button>
      </section>
    </div>
  );
}

```

### `projects/sfia-studio-next/web/src/components/figma/ProjectUnavailable.tsx`

```
"use client";

export type ProjectUnavailableKind =
  | "not_found"
  | "unauthorized"
  | "temporary"
  | "loading";

const COPY: Record<
  Exclude<ProjectUnavailableKind, "loading">,
  { title: string; body: string; retry: boolean }
> = {
  not_found: {
    title: "Projet introuvable",
    body: "Ce projet n’existe pas ou n’est pas accessible pour ce Pilote. Aucune donnée projet n’est affichée.",
    retry: false,
  },
  unauthorized: {
    title: "Session non autorisée",
    body: "Votre session a expiré ou n’autorise pas l’accès à cet espace. Reconnectez-vous pour continuer.",
    retry: false,
  },
  temporary: {
    title: "Projet temporairement indisponible",
    body: "Le chargement a échoué pour une cause technique temporaire. Réessayez, ou revenez au Portefeuille.",
    retry: true,
  },
};

export function ProjectUnavailable(props: {
  kind: ProjectUnavailableKind;
  onRetry?: () => void;
  onLogin?: () => void;
}) {
  if (props.kind === "loading") {
    return (
      <div
        className="project-unavailable fig-page"
        data-testid="project-unavailable"
        data-unavailable-kind="loading"
      >
        <div className="fig-panel max-w-xl space-y-3 p-6">
          <p className="fig-kicker">Espace projet</p>
          <h1 className="fig-hero-title">Chargement du projet…</h1>
          <p className="fig-hero-sub muted">
            Récupération du contexte autorisé. Aucune donnée d’un autre projet n’est réutilisée.
          </p>
        </div>
      </div>
    );
  }

  const copy = COPY[props.kind];
  return (
    <div
      className="project-unavailable fig-page"
      data-testid="project-unavailable"
      data-unavailable-kind={props.kind}
    >
      <div className="fig-panel max-w-xl space-y-4 p-6">
        <p className="fig-kicker">Espace projet</p>
        <h1 className="fig-hero-title">{copy.title}</h1>
        <p className="fig-hero-sub">{copy.body}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          <a className="btn secondary" href="/portfolio" data-testid="unavailable-back-portfolio">
            Retour au Portefeuille
          </a>
          {props.kind === "unauthorized" ? (
            <button
              type="button"
              className="btn"
              data-testid="unavailable-login"
              onClick={props.onLogin}
            >
              Se reconnecter
            </button>
          ) : null}
          {copy.retry && props.onRetry ? (
            <button
              type="button"
              className="btn"
              data-testid="unavailable-retry"
              onClick={props.onRetry}
            >
              Réessayer
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

```

### `projects/sfia-studio-next/web/src/components/shell/ProjectSpaceContext.tsx`

```
"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type ProjectSpaceInfo = {
  projectId: string;
  projectName: string | null;
  subtitle: string | null;
  /** True only when the authorized project payload is ready. */
  available: boolean;
  /**
   * When true, hide project deep links (404 / unauthorized / temporary).
   * Must stay false during in-flight load so rail nav intent races still work.
   */
  blockNavigation?: boolean;
};

type ProjectSpaceContextValue = {
  info: ProjectSpaceInfo | null;
  setInfo: (info: ProjectSpaceInfo | null) => void;
};

const ProjectSpaceContext = createContext<ProjectSpaceContextValue | null>(null);

export function ProjectSpaceProvider(props: { children: ReactNode }) {
  const [info, setInfo] = useState<ProjectSpaceInfo | null>(null);
  const value = useMemo(() => ({ info, setInfo }), [info]);
  return (
    <ProjectSpaceContext.Provider value={value}>{props.children}</ProjectSpaceContext.Provider>
  );
}

export function useProjectSpace(): ProjectSpaceContextValue {
  const ctx = useContext(ProjectSpaceContext);
  if (!ctx) {
    return {
      info: null,
      setInfo: () => {
        /* no-op outside provider */
      },
    };
  }
  return ctx;
}

```

### `projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts`

```
import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";

/**
 * Ensemble 04 — Espace projet shell: identity, rail nav, overview, no duplicate tabs.
 * FAKE/DEV lane — does not claim Nora LIVE or RECETTE promotion.
 */
test.describe("Ensemble 04 project space", () => {
  test("identity, rail nav, overview, no central tabs, unavailable", async ({ page }) => {
    const projectName = `Cockpit E04 ${Date.now()}`;

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    await page.getByTestId("prep-draft").fill("Ensemble 04 project space seed");
    await page.getByTestId("prep-send").click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });
    await seedInspectedNameViaApi(page, { name: projectName, summary: "résumé e04" });
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 15000 });

    const projectUrl = page.url();
    const projectId = projectUrl.split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();

    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    // T02 — real project name in rail
    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);

    // T04 — no duplicated central surface tab buttons
    await expect(page.getByRole("navigation", { name: "Surfaces projet" })).toHaveCount(0);

    const rail = page.getByTestId("studio-rail");

    // T03 — Travail / Projet / Journal / Trajectoire
    await rail.getByTestId("nav-projet").click();
    await expect(page).toHaveURL(/surface=projet/);
    await expect(page.getByTestId("project-overview")).toBeVisible();
    await expect(page.getByTestId("project-overview-name")).toHaveText(projectName);

    await rail.getByTestId("nav-journal").click();
    await expect(page).toHaveURL(/surface=journal/);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-surface",
      "journal",
    );

    await rail.getByTestId("nav-pilotage").click();
    await expect(page).toHaveURL(/surface=pilotage/);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-surface",
      "pilotage",
    );

    await rail.getByTestId("nav-travail").click();
    await expect(page).toHaveURL(/surface=travail/);

    // T05 — Accès directs
    await expect(page.getByTestId("nav-documents")).toBeVisible();
    await expect(page.getByTestId("nav-sources-git")).toBeVisible();
    await expect(page.getByTestId("nav-resultats")).toBeVisible();
    await page.getByTestId("nav-documents").click();
    await expect(page).toHaveURL(/surface=document/);

    // T08 — deep URL + reload
    await page.goto(`/projects/${projectId}?surface=projet`);
    await expect(page.getByTestId("project-overview")).toBeVisible({ timeout: 20000 });
    await page.reload();
    await expect(page.getByTestId("project-overview")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);

    // T06 — Retour Portefeuille
    await rail.getByTestId("nav-portfolio").click();
    await page.waitForURL("**/portfolio");

    // T11 — projet absent
    await page.goto("/projects/proj_does_not_exist_e04");
    await expect(page.getByTestId("project-unavailable")).toHaveAttribute(
      "data-unavailable-kind",
      "not_found",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("unavailable-back-portfolio")).toBeVisible();
    await expect(page.getByTestId("rail-project-name")).toHaveText("Projet indisponible");
    await expect(page.getByTestId("studio-rail").getByTestId("nav-travail")).toHaveCount(0);
  });

  test("T13 temporary HTTP 500 then retry recovers without cross-project leak", async ({
    page,
  }) => {
    const projectName = `E04 T13 ${Date.now()}`;
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    await page.getByTestId("prep-draft").fill("Ensemble 04 T13 temporary error");
    await page.getByTestId("prep-send").click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });
    await seedInspectedNameViaApi(page, { name: projectName, summary: "t13" });
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 15000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);

    let failRootGets = true;
    let rootGetCount = 0;
    await page.route("**/api/projects/**", async (route) => {
      const url = route.request().url();
      const method = route.request().method();
      const isProjectRootGet =
        method === "GET" &&
        /\/api\/projects\/[^/?#]+\/?$/.test(new URL(url).pathname);
      if (isProjectRootGet) {
        rootGetCount += 1;
        if (failRootGets) {
          await route.fulfill({
            status: 500,
            contentType: "application/json",
            body: JSON.stringify({ error: "INTERNAL" }),
          });
          return;
        }
      }
      await route.continue();
    });

    await page.reload();
    await expect(page.getByTestId("project-unavailable")).toHaveAttribute(
      "data-unavailable-kind",
      "temporary",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("unavailable-retry")).toBeVisible();
    await expect(page.getByTestId("rail-project-name")).toHaveText("Projet indisponible");
    await expect(page.getByTestId("rail-project-name")).not.toHaveText(projectName);
    await expect(page.getByTestId("studio-rail").getByTestId("nav-travail")).toHaveCount(0);

    const getsBeforeRetry = rootGetCount;
    failRootGets = false;
    await page.getByTestId("unavailable-retry").click();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);
    await expect(page.getByTestId("project-unavailable")).toHaveCount(0);
    expect(rootGetCount).toBeGreaterThan(getsBeforeRetry);
  });

  test("T16 pending thread state survives surface nav after Ensemble 04 shell", async ({
    page,
  }) => {
    const projectName = `E04 T16 ${Date.now()}`;
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    await page.getByTestId("prep-draft").fill("Ensemble 04 T16 pending preserve");
    await page.getByTestId("prep-send").click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });
    await seedInspectedNameViaApi(page, { name: projectName, summary: "t16" });
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 15000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const stamp = Date.now();
    const pending = {
      content: "Intention incertaine E04 T16 — ne pas dupliquer",
      clientTurnKey: `ctk_e04_t16_${stamp}`,
      clientCommandKey: `conv-auth:ctk_e04_t16_${stamp}`,
    };
    await page.evaluate(
      ({ projectId: id, pending: p }) => {
        sessionStorage.setItem(`sfia.thread.pending:${id}`, JSON.stringify(p));
      },
      { projectId, pending },
    );
    await page.reload();
    await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("nora-thread")).toBeVisible();

    const rail = page.getByTestId("studio-rail");
    await rail.getByTestId("nav-projet").click();
    await expect(page.getByTestId("project-overview")).toBeVisible();
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0);

    await rail.getByTestId("nav-journal").click();
    await expect(page).toHaveURL(/surface=journal/);

    await rail.getByTestId("nav-travail").click();
    await expect(page).toHaveURL(/surface=travail/);
    await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("thread-reconcile-pending")).toBeVisible();
    await expect(page.getByTestId("nora-thread")).toBeVisible();
    // Scope: shell navigation must not clear client pending identity.
    // Deep Nora scroll / structured replies remain Ensemble 05.
  });
});

```

### `projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts`

```
import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

/**
 * F2 captures — Ensemble 04 vs Figma 652:* at 1680×970.
 * Artifacts under web/docs/evidence/ensemble-04-project-space/
 */
test("F2 runtime captures Ensemble 04 project space", async ({ page }) => {
  const outDir = path.join(
    process.cwd(),
    "docs",
    "evidence",
    "ensemble-04-project-space",
  );
  fs.mkdirSync(outDir, { recursive: true });

  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const projectName = `F2 Espace projet ${Date.now()}`;
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  await page.getByTestId("prep-draft").fill("Capture F2 Ensemble 04");
  await page.getByTestId("prep-send").click();
  await expect(
    page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
  ).toBeVisible({ timeout: 30000 });
  await seedInspectedNameViaApi(page, {
    name: projectName,
    summary: "capture runtime",
  });
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];

  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "ready",
    { timeout: 20000 },
  );

  await page.goto(`/projects/${projectId}?surface=travail`);
  await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);
  await page.screenshot({
    path: path.join(outDir, "runtime-travail-1680x970.png"),
    fullPage: false,
  });

  await page.goto(`/projects/${projectId}?surface=projet`);
  await expect(page.getByTestId("project-overview")).toBeVisible();
  await page.screenshot({
    path: path.join(outDir, "runtime-projet-overview-1680x970.png"),
    fullPage: false,
  });

  await page.goto(`/projects/${projectId}?surface=journal`);
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-surface",
    "journal",
  );
  await page.screenshot({
    path: path.join(outDir, "runtime-journal-nav-1680x970.png"),
    fullPage: false,
  });

  await page.goto("/projects/proj_unavailable_e04_f2");
  await expect(page.getByTestId("project-unavailable")).toHaveAttribute(
    "data-unavailable-kind",
    "not_found",
    { timeout: 20000 },
  );
  await page.screenshot({
    path: path.join(outDir, "runtime-unavailable-1680x970.png"),
    fullPage: false,
  });

  fs.writeFileSync(
    path.join(outDir, "manifest.json"),
    JSON.stringify(
      {
        capturedAt: new Date().toISOString(),
        viewport: { width: 1680, height: 970 },
        projectName,
        projectId,
        frames: {
          travail: "652:8",
          projet: "652:58",
          journal: "652:108",
          unavailable: "652:158",
        },
        files: [
          "runtime-travail-1680x970.png",
          "runtime-projet-overview-1680x970.png",
          "runtime-journal-nav-1680x970.png",
          "runtime-unavailable-1680x970.png",
        ],
      },
      null,
      2,
    ),
  );
});

```

---

## Appendix B — Diffs unifiés fichiers modifiés (`bd8e16728f3c2a726a49be4c94565a2d85fc41a9`..`20fb41baa534b5a802a275b6944fc267ccaa2192`)

### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 55a82058..29a8ec4d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,41 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+
+## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-TECHNICAL-CONSOLIDATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~21:55 CET |
+| Macro-lot | ML4D Ensemble 04 — consolidation technique + plan RECETTE |
+| Type | RUN / correction bornée · **NO RELEASE** |
+| Parent candidat | `660ff4243fafb586bfa0dd9b377382952e831ca9` |
+| Baseline UX-005 | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
+| Scope | T13 500+retry ; T16 pending×nav ; preuve tsc antérieur ; ESLint/build ; plan cutover RECETTE read-only ; clarif. title Résultats/preuves |
+| Non-scope | Déploiement RECETTE ; push projet ; Ensembles 05–07 ; fix fixtures ML4C tsc |
+| Preuves | next build PASS ; Playwright E04+T13/T16+nreg PASS ; tsc workspace FAIL=parent (32) / E04 src 0 |
+| RECETTE | observée `bd8e1672` / BUILD `bURdIMEzv8pRSJCzgsiDf` — **non modifiée** |
+| Push produit | **AUCUN** |
+| Verdict cible | `TECHNICAL CANDIDATE READY FOR CHATGPT REVIEW` |
+
+
+## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-PROJECT-SPACE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~21:35 CET |
+| Macro-lot | ML4D Ensemble 04 — Espace projet convergence UX/UI |
+| Type | Cycle Delivery · Standard · EVOL · **NO RELEASE** |
+| Parent | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` (UX-005 lineage) |
+| Branch | `feat/next-ml4d-project-space-20261116` |
+| Scope | Rail projet 246px ; identité réelle ; surface `projet` ; Trajectoire=`pilotage` ; suppression onglets ProjectChrome ; unavailable 401/404/5xx ; Travail coque Figma |
+| Non-scope | Ensembles 05/06/07 ; API/DB ; RECETTE auto ; project push/PR/merge ; Gate C ; ML5 |
+| Preuves | Vitest studio-rail PASS ; Playwright Ensemble04 + nav-intent + F2 captures + UX-003/004 + ml4c composer PASS |
+| Figma | 652:8 / 652:58 / 652:108 / 652:158 — evidence under `web/docs/evidence/ensemble-04-project-space/` |
+| RECETTE | **non promue** — manifeste candidat à préparer pour GO Morris |
+| Push produit | **AUCUN** |
+| Verdict cible | `ENSEMBLE 04 — CANDIDATE READY FOR MORRIS REVIEW` |
+
 ## Contrôle post-merge — 15/11/2026 — DELIV-2026-11-15-ML4C-NAV-SURFACE-INTENT

 **Complément daté :** l'entrée de livraison qui suit conserve le statut de PR readiness observé **avant** fusion ; ce constat établit la sortie d'intégration, sans modifier les preuves historiques.

```

### `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 4e08c40f..8390eb97 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -6,6 +6,11 @@ import { PilotagePanel } from "@/components/PilotagePanel";
 import { ProjectChrome } from "@/components/figma/ProjectChrome";
 import { NoraConversation } from "@/components/figma/NoraConversation";
 import { ProjectJournal } from "@/components/figma/ProjectJournal";
+import { ProjectOverview } from "@/components/figma/ProjectOverview";
+import {
+  ProjectUnavailable,
+  type ProjectUnavailableKind,
+} from "@/components/figma/ProjectUnavailable";
 import {
   DocumentHistory,
   DocumentInspector,
@@ -20,6 +25,7 @@ import {
   type ThreadTurnKind,
 } from "@/domains/pilotage/thread-recovery";
 import { PublicationInspectionPanel } from "@/components/integrations/PublicationInspectionPanel";
+import { useProjectSpace } from "@/components/shell/ProjectSpaceContext";
 import {
   clearProjectSurfaceNavIntent,
   noteProjectSurfaceNavIntent,
@@ -44,10 +50,25 @@ type Knowledge = {
   openPoints: Array<{ id: string; statement: string; status: string }>;
 };

-type Surface = "travail" | "pilotage" | "journal" | "document" | "git" | "publication";
+type Surface =
+  | "travail"
+  | "projet"
+  | "pilotage"
+  | "journal"
+  | "document"
+  | "git"
+  | "publication";
 type DocUiState = "READING" | "EDITING" | "SAVING" | "CONFLICT" | "FAILED" | "UNKNOWN";

-const SURFACES: Surface[] = ["travail", "pilotage", "journal", "document", "git", "publication"];
+const SURFACES: Surface[] = [
+  "travail",
+  "projet",
+  "pilotage",
+  "journal",
+  "document",
+  "git",
+  "publication",
+];

 function parseSurface(raw: string | null): Surface | null {
   if (!raw) return null;
@@ -93,12 +114,15 @@ export default function ProjectPage() {
   const params = useParams<{ projectId: string }>();
   const router = useRouter();
   const searchParams = useSearchParams();
+  const { setInfo: setProjectSpaceInfo } = useProjectSpace();
   const [messages, setMessages] = useState<Msg[]>([]);
   const [documents, setDocuments] = useState<Doc[]>([]);
   const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
   const [preparationId, setPreparationId] = useState<string | null>(null);
-  const [meta, setMeta] = useState("Chargement…");
-  const [error, setError] = useState("");
+  const [projectName, setProjectName] = useState<string | null>(null);
+  const [statusHint, setStatusHint] = useState("Chargement…");
+  const [unavailableKind, setUnavailableKind] = useState<ProjectUnavailableKind | null>(null);
+  const [loadEpoch, setLoadEpoch] = useState(0);
   /** Observable end of project load + surface URL sync (e2e / anti-race proof). */
   const [projectLoadState, setProjectLoadState] = useState<"loading" | "ready">("loading");
   const [surface, setSurface] = useState<Surface>(() => parseSurface(searchParams.get("surface")) ?? "travail");
@@ -125,6 +149,20 @@ export default function ProjectPage() {
   /** Surface chosen by chrome/rail while project load() is still in flight — must not be clobbered. */
   const pendingSurfaceRef = useRef<Surface | null>(null);

+  useEffect(() => {
+    // Clear previous project identity immediately — no cross-project leak in the rail.
+    setProjectSpaceInfo({
+      projectId: params.projectId,
+      projectName: null,
+      subtitle: null,
+      available: false,
+      blockNavigation: false,
+    });
+    return () => {
+      setProjectSpaceInfo(null);
+    };
+  }, [params.projectId, setProjectSpaceInfo]);
+
   useEffect(() => {
     docUiRef.current = docUi;
   }, [docUi]);
@@ -401,38 +439,82 @@ export default function ProjectPage() {
   useEffect(() => {
     let cancelled = false;
     setProjectLoadState("loading");
+    setUnavailableKind(null);
+    setProjectName(null);
+    setStatusHint("Chargement…");
     pendingSurfaceRef.current = null;
+    setProjectSpaceInfo({
+      projectId: params.projectId,
+      projectName: null,
+      subtitle: null,
+      available: false,
+      blockNavigation: false,
+    });

     async function load() {
       const res = await fetch(`/api/projects/${params.projectId}`);
       if (cancelled) return;
       if (res.status === 401) {
-        router.push("/login");
+        setUnavailableKind("unauthorized");
+        setStatusHint("");
+        setProjectSpaceInfo({
+          projectId: params.projectId,
+          projectName: null,
+          subtitle: null,
+          available: false,
+          blockNavigation: true,
+        });
+        setProjectLoadState("ready");
         return;
       }
       if (res.status === 404) {
-        setError("Projet introuvable ou non autorisé pour ce Pilote.");
-        setMeta("");
+        setUnavailableKind("not_found");
+        setStatusHint("");
+        setProjectSpaceInfo({
+          projectId: params.projectId,
+          projectName: null,
+          subtitle: null,
+          available: false,
+          blockNavigation: true,
+        });
         setProjectLoadState("ready");
         return;
       }
       if (!res.ok) {
-        setError("Impossible de charger le projet.");
-        setMeta("");
+        setUnavailableKind("temporary");
+        setStatusHint("");
+        setProjectSpaceInfo({
+          projectId: params.projectId,
+          projectName: null,
+          subtitle: null,
+          available: false,
+          blockNavigation: true,
+        });
         setProjectLoadState("ready");
         return;
       }
       const j = await res.json();
       if (cancelled) return;
       const docs = (j.documents ?? []) as Doc[];
+      const name = String(j.project?.name ?? "").trim() || null;
       setMessages(j.messages ?? []);
       setDocuments(docs);
       setKnowledge(j.knowledge ?? null);
       setPreparationId(j.preparation?.id ?? null);
-      setMeta(
-        `Même fil · préparation ${j.preparation?.id ?? "liée"} · conversation ${j.conversation?.id ?? "—"} · réouverture par projectId`,
+      setProjectName(name);
+      setStatusHint(
+        j.preparation?.id
+          ? "Fil durable · préparation liée · réouverture par projet"
+          : "Fil durable · réouverture par projet",
       );
-      setError("");
+      setUnavailableKind(null);
+      setProjectSpaceInfo({
+        projectId: params.projectId,
+        projectName: name,
+        subtitle: null,
+        available: Boolean(name),
+        blockNavigation: false,
+      });

       // Read *current* URL — never stale searchParams from effect closure (race with rail nav).
       // Rail Links and chrome selectSurface share one project-scoped intent so load() cannot
@@ -450,9 +532,9 @@ export default function ProjectPage() {
         rawSurface,
         pendingIntent: pendingSurface,
       });
-      applyUrlDocumentState(docs, decision.effectiveSurface, qDocId);
+      applyUrlDocumentState(docs, decision.effectiveSurface as Surface, qDocId);
       if (decision.shouldNormalizeUrl) {
-        const target = decision.effectiveSurface;
+        const target = decision.effectiveSurface as Surface;
         syncSurfaceUrl(target, target === "document" ? qDocId : null, "replace");
       }
       if (qSurface && pendingSurface && qSurface === pendingSurface) {
@@ -469,9 +551,7 @@ export default function ProjectPage() {
           content: pending.content,
           key: pending.clientTurnKey,
         };
-        setPilotageStatus(
-          `Reprise en attente · clé ${pending.clientCommandKey.slice(0, 24)}…`,
-        );
+        setPilotageStatus("Reprise en attente · tentative conservée");
       }

       // G2 — silent COMMAND recovery (not GET): resume interrupted mission continuation
@@ -495,9 +575,7 @@ export default function ProjectPage() {
               setDocuments(rj.documents ?? []);
               setKnowledge(rj.knowledge ?? null);
               if (resume.documentSave?.documentId) {
-                setMeta(
-                  `Même fil · préparation ${rj.preparation?.id ?? "liée"} · conversation ${rj.conversation?.id ?? "—"} · reprise mission doc ${resume.documentSave.documentId}`,
-                );
+                setStatusHint("Fil durable · reprise de mission documentée");
               }
             }
           }
@@ -514,7 +592,7 @@ export default function ProjectPage() {
       cancelled = true;
     };
     // eslint-disable-next-line react-hooks/exhaustive-deps
-  }, [params.projectId, router]);
+  }, [params.projectId, router, loadEpoch]);

   // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
   useEffect(() => {
@@ -807,15 +885,33 @@ export default function ProjectPage() {
     }
   }

-  if (error) {
+  if (unavailableKind) {
+    return (
+      <ProjectUnavailable
+        kind={unavailableKind}
+        onRetry={
+          unavailableKind === "temporary"
+            ? () => {
+                setUnavailableKind(null);
+                setLoadEpoch((n) => n + 1);
+              }
+            : undefined
+        }
+        onLogin={
+          unavailableKind === "unauthorized" ? () => router.push("/login") : undefined
+        }
+      />
+    );
+  }
+
+  if (projectLoadState === "loading" && !projectName) {
     return (
-      <div className="max-w-3xl space-y-4">
-        <h1 className="text-2xl font-semibold">Projet</h1>
-        <p className="text-xs muted">{params.projectId}</p>
-        <div className="panel p-4">{error}</div>
-        <a className="btn secondary inline-block" href="/portfolio">
-          Retour portefeuille
-        </a>
+      <div
+        data-testid="project-load-state"
+        data-project-load-state="loading"
+        data-project-id={params.projectId}
+      >
+        <ProjectUnavailable kind="loading" />
       </div>
     );
   }
@@ -823,11 +919,23 @@ export default function ProjectPage() {
   return (
     <ProjectChrome
       projectId={params.projectId}
+      projectName={projectName}
       surface={surface}
-      meta={meta}
+      statusHint={statusHint}
       loadState={projectLoadState}
-      onSelectSurface={selectSurface}
     >
+      {surface === "projet" ? (
+        <ProjectOverview
+          projectId={params.projectId}
+          projectName={projectName ?? "Projet"}
+          preparationId={preparationId}
+          knowledge={knowledge}
+          documentCount={documents.length}
+          messageCount={messages.length}
+          onOpenTravail={() => selectSurface("travail")}
+        />
+      ) : null}
+
       {surface === "travail" ? (
         <NoraConversation
           messages={messages}
@@ -845,27 +953,53 @@ export default function ProjectPage() {
           }
           aside={
             <>
-              <div className="fig-panel space-y-2">
+              <div className="fig-panel space-y-2" data-testid="travail-aside-bref">
                 <h2 className="fig-panel-title">En bref</h2>
                 <p className="text-sm muted">
                   Un seul fil visible. Mémoire D4 récupérable au-delà des six derniers messages.
                 </p>
-                <p className="text-xs muted">
-                  Acquis: {knowledge?.acquis.filter((a) => a.status === "CURRENT").length ?? 0} ·
-                  Ouverts: {knowledge?.openPoints.filter((o) => o.status === "OPEN").length ?? 0}
-                </p>
+                {knowledge ? (
+                  <p className="text-xs muted">
+                    Acquis capitalisés&nbsp;:{" "}
+                    {knowledge.acquis.filter((a) => a.status === "CURRENT").length}
+                    {" · "}
+                    Points ouverts&nbsp;:{" "}
+                    {knowledge.openPoints.filter((o) => o.status === "OPEN").length}
+                  </p>
+                ) : (
+                  <p className="text-xs muted">Synthèse knowledge non encore disponible.</p>
+                )}
               </div>
-              <div className="fig-panel space-y-2">
+              <div className="fig-panel space-y-2" data-testid="travail-aside-objets">
                 <h2 className="fig-panel-title">Objets du projet</h2>
                 <ul className="text-sm muted space-y-1">
                   <li>Documents Nora · {documents.length}</li>
-                  <li>Réalisations et preuves · via Pilotage</li>
                   <li>
-                    Sources Git · <span className="fig-tag fig-tag-muted">non disponible</span>
+                    <button
+                      type="button"
+                      className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
+                      onClick={() => selectSurface("publication")}
+                    >
+                      Résultats et preuves
+                    </button>
+                    <span> · surface publication existante</span>
+                  </li>
+                  <li>
+                    <button
+                      type="button"
+                      className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
+                      onClick={() => selectSurface("git")}
+                    >
+                      Sources Git
+                    </button>
                   </li>
                 </ul>
               </div>
-              <div className="fig-panel space-y-2" style={{ background: "rgba(101,111,225,0.08)" }}>
+              <div
+                className="fig-panel space-y-2"
+                style={{ background: "rgba(101,111,225,0.08)" }}
+                data-testid="travail-aside-clarifier"
+              >
                 <h2 className="fig-panel-title">Points à clarifier</h2>
                 {(knowledge?.openPoints ?? [])
                   .filter((o) => o.status === "OPEN")

```

### `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 933da2d6..1fe8e22d 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -1,86 +1,124 @@
 "use client";

-type Surface = "travail" | "pilotage" | "journal" | "document" | "git" | "publication";
+import {
+  PROJECT_SURFACE_LABELS,
+  type StudioSurface,
+} from "@/components/shell/studio-rail";

-const LABELS: Record<Surface, string> = {
-  travail: "Travail avec Nora",
-  pilotage: "Pilotage · cycle et décisions",
-  journal: "Journal · sujets et acquis",
-  document: "Documents · bibliothèque",
-  git: "Sources Git",
-  publication: "Publication Git",
+type Surface = StudioSurface;
+
+const HERO: Record<
+  Surface,
+  { kicker: string; title: string; sub: string }
+> = {
+  travail: {
+    kicker: "Travail avec Nora",
+    title: "Conversation du projet",
+    sub: "Collaborer, produire et approfondir le travail du projet.",
+  },
+  projet: {
+    kicker: "Espace projet",
+    title: "Vue d'ensemble du projet",
+    sub: "Identité, contexte et accès — consultation sans nouvelle autorité.",
+  },
+  pilotage: {
+    kicker: "Trajectoire",
+    title: "Pilotage · cycle et décisions",
+    sub: "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant.",
+  },
+  journal: {
+    kicker: "Journal",
+    title: "Sujets et acquis",
+    sub: "Sujets, acquis et points ouverts — présentation sans nouvelle autorité.",
+  },
+  document: {
+    kicker: "Documents Nora",
+    title: "Bibliothèque",
+    sub: "Bibliothèque, inspection et révision sous autorité D4.",
+  },
+  git: {
+    kicker: "Sources Git",
+    title: "Intégration Git",
+    sub: "Sources et liens Git du projet — capacités réellement disponibles.",
+  },
+  publication: {
+    kicker: "Résultats et preuves",
+    title: "Publication Git",
+    sub: "Publication et preuves Git — capacités réellement disponibles.",
+  },
 };

 export function ProjectChrome(props: {
   projectId: string;
+  projectName: string | null;
   surface: Surface;
-  meta?: string;
+  /** Optional status line — never raw technical IDs in the nominal path. */
+  statusHint?: string;
   /** Observable project bootstrap: loading until load()+surface sync finish. */
   loadState?: "loading" | "ready";
-  onSelectSurface: (s: Surface) => void;
   children: React.ReactNode;
 }) {
   const loadState = props.loadState ?? "ready";
+  const hero = HERO[props.surface];
+  const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
+  const displayName = props.projectName?.trim() || "Projet";
+
   return (
     <div
-      className="fig-page"
+      className="fig-page project-space-page"
       data-project-surface={props.surface}
       data-testid="project-load-state"
       data-project-load-state={loadState}
       data-project-id={props.projectId}
+      data-project-name={props.projectName ?? ""}
     >
-      <div className="fig-breadcrumb">
-        <span>
-          SFIA Studio / Projet / {LABELS[props.surface]}
-        </span>
-        <span className="text-xs muted truncate max-w-[40%]">{props.projectId}</span>
-      </div>
+      {/* Compact Figma header — no second tab strip (rail owns navigation). */}
+      <div className="project-space-header" data-testid="project-space-header">
+        <div className="fig-breadcrumb project-space-breadcrumb">
+          <span data-testid="project-breadcrumb">
+            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;Projet&nbsp;&nbsp;/&nbsp;&nbsp;
+            <span className="text-[var(--fg)]">{displayName}</span>
+            &nbsp;&nbsp;/&nbsp;&nbsp;{surfaceLabel}
+          </span>
+          <span className="project-space-badge" data-testid="project-espace-badge">
+            ESPACE PROJET
+          </span>
+        </div>

-      <header className="space-y-2">
-        <p className="fig-kicker">Espace projet</p>
-        <h1 className="fig-hero-title">
-          {props.surface === "travail"
-            ? "Nora"
-            : props.surface === "document"
-              ? "Documents"
-              : props.surface === "journal"
-                ? "Journal"
-                : props.surface === "git" || props.surface === "publication"
-                  ? "Git"
-                  : "Pilotage"}
-        </h1>
-        <p className="fig-hero-sub">
-          {props.surface === "travail"
-            ? "Collaborer, produire et approfondir le travail du projet."
-            : props.surface === "document"
-              ? "Bibliothèque, inspection et révision sous autorité D4."
-              : props.surface === "journal"
-                ? "Sujets, acquis et points ouverts — présentation sans nouvelle autorité."
-                : "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant."}
-        </p>
-        {props.meta ? <p className="text-xs muted">{props.meta}</p> : null}
-      </header>
+        <header className="project-space-hero space-y-1">
+          <p className="fig-kicker">{hero.kicker}</p>
+          <h1 className="fig-hero-title" data-testid="project-surface-title">
+            {hero.title}
+          </h1>
+          <p className="fig-hero-sub">{hero.sub}</p>
+          {props.statusHint ? (
+            <p className="text-xs muted" data-testid="project-status-hint">
+              {props.statusHint}
+            </p>
+          ) : null}
+        </header>
+      </div>

-      <nav className="flex flex-wrap gap-2" aria-label="Surfaces projet">
+      {/* Hidden anchors so historical e2e surface-* selectors remain meaningful. */}
+      <div className="sr-only" aria-hidden>
         {(
           [
-            ["travail", "Travail"],
-            ["pilotage", "Pilotage"],
-            ["journal", "Journal"],
-            ["document", "Documents"],
+            "travail",
+            "projet",
+            "pilotage",
+            "journal",
+            "document",
+            "git",
+            "publication",
           ] as const
-        ).map(([id, label]) => (
-          <button
+        ).map((id) => (
+          <span
             key={id}
-            type="button"
-            className={`btn ${props.surface === id ? "" : "secondary"}`}
-            onClick={() => props.onSelectSurface(id)}
             data-testid={`surface-${id}`}
-          >
-            {label}
-          </button>
+            data-surface-active={props.surface === id ? "1" : "0"}
+          />
         ))}
-      </nav>
+      </div>

       {props.children}
     </div>

```

### `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 48d01750..b3991e2d 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -991,3 +991,46 @@
     z-index: 2;
   }
 }
+
+/* Ensemble 04 — project space chrome (Figma 652:*); no secondary tab strip. */
+.project-space-page {
+  gap: 20px;
+}
+
+.project-space-header {
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+  min-height: 70px;
+}
+
+.project-space-breadcrumb {
+  min-height: 28px;
+}
+
+.project-space-badge {
+  flex-shrink: 0;
+  font-size: 0.65rem;
+  font-weight: 600;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--fig-accent-soft);
+  border: 1px solid var(--fig-line);
+  border-radius: 999px;
+  padding: 0.2rem 0.55rem;
+  background: rgba(101, 111, 225, 0.12);
+}
+
+.project-space-hero .fig-hero-title {
+  font-size: clamp(1.35rem, 1.8vw, 1.65rem);
+}
+
+.project-unavailable {
+  display: flex;
+  align-items: flex-start;
+  padding-top: 2rem;
+}
+
+.project-overview .fig-panel {
+  background: var(--fig-panel);
+}

```

### `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 45d317df..be47fd84 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -8,6 +8,7 @@ import {
   subscribeOpenPreparationBusy,
 } from "@/lib/open-preparation";
 import { PRODUCT_VERSIONING } from "@/lib/product-version";
+import { ProjectSpaceProvider, useProjectSpace } from "./ProjectSpaceContext";
 import {
   STUDIO_RAIL_VARIANTS,
   buildShellNav,
@@ -25,15 +26,36 @@ import "./studio-shell.css";
 const ACCOUNT_HREF = "/settings/integrations";

 export function StudioShell({ children }: { children: React.ReactNode }) {
+  return (
+    <ProjectSpaceProvider>
+      <StudioShellInner>{children}</StudioShellInner>
+    </ProjectSpaceProvider>
+  );
+}
+
+function StudioShellInner({ children }: { children: React.ReactNode }) {
   const pathname = usePathname() || "/";
   const router = useRouter();
   const searchParams = useSearchParams();
   const surface = searchParams.get("surface");
   const variant = resolveRailVariant({ pathname, surface, searchParams });
   const tokens = STUDIO_RAIL_VARIANTS[variant];
-  const items = buildShellNav({ pathname, surface });
   const projectId = parseProjectId(pathname);
   const preparationId = parsePreparationId(pathname);
+  const { info: projectSpace } = useProjectSpace();
+  const projectSpaceReady =
+    Boolean(projectId) &&
+    projectSpace?.projectId === projectId &&
+    projectSpace.available;
+  const projectSpaceBlocked =
+    Boolean(projectId) &&
+    projectSpace?.projectId === projectId &&
+    Boolean(projectSpace?.blockNavigation);
+  const rawItems = buildShellNav({ pathname, surface });
+  // Qualified unavailable: keep Portefeuille only — no deep nav into a dead context.
+  const items = projectSpaceBlocked
+    ? rawItems.filter((i) => i.key === "portfolio")
+    : rawItems;
   const inProductSpace = Boolean(projectId || preparationId);
   const personalSpace = !inProductSpace;
   const portfolioActive = pathname.startsWith("/portfolio") || pathname === "/";
@@ -43,6 +65,8 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
   const onSasPreparation = Boolean(preparationId) || onSasVisual;
   const [openingPrep, setOpeningPrep] = useState(false);
   const [prepNotice, setPrepNotice] = useState("");
+  const activeProjectName = projectSpaceReady ? projectSpace?.projectName ?? null : null;
+  const activeProjectSubtitle = projectSpaceReady ? projectSpace?.subtitle ?? null : null;

   useEffect(() => subscribeOpenPreparationBusy(setOpeningPrep), []);

@@ -123,11 +147,25 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
           <div className="shrink-0 border-t border-[var(--line)] my-1" aria-hidden />

           {projectId ? (
-            <div className="mt-1 shrink-0">
+            <div
+              className="mt-1 shrink-0 rounded-[10px] border border-[var(--line)] px-3 py-2.5"
+              style={{ background: "var(--fig-surface-2, #151C29)" }}
+              data-testid="rail-espace-actif"
+            >
               <div className="text-[10px] muted uppercase tracking-wide">Espace actif</div>
-              <div className="text-sm font-medium mt-1 truncate" title={projectId}>
-                Projet
+              <div
+                className="text-sm font-medium mt-1 truncate"
+                title={activeProjectName ?? undefined}
+                data-testid="rail-project-name"
+              >
+                {activeProjectName ??
+                  (projectSpaceBlocked ? "Projet indisponible" : "Chargement…")}
               </div>
+              {activeProjectSubtitle ? (
+                <div className="text-[11px] muted mt-0.5 truncate" data-testid="rail-project-subtitle">
+                  {activeProjectSubtitle}
+                </div>
+              ) : null}
             </div>
           ) : (
             <div className="studio-rail-section" aria-hidden>
@@ -215,24 +253,40 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
               </div>
             ) : null}

-            {projectId ? (
-              <div className="mt-2 space-y-1">
+            {projectId && projectSpaceReady ? (
+              <div className="mt-2 space-y-1" data-testid="rail-acces-directs">
                 <div className="text-[10px] muted uppercase tracking-wide mb-1">Accès directs</div>
                 <Link
                   href={`/projects/${projectId}?surface=document`}
-                  className="text-sm muted block px-2 py-1"
+                  className={`text-sm block px-2 py-1 ${
+                    surface === "document" ? "text-[var(--fig-accent-soft)]" : "muted"
+                  }`}
+                  data-testid="nav-documents"
                   onClick={() => noteProjectSurfaceNavIntent(projectId, "document")}
                 >
                   Documents Nora
                 </Link>
                 <Link
                   href={`/projects/${projectId}?surface=git`}
-                  className="text-sm muted block px-2 py-1"
+                  className={`text-sm block px-2 py-1 ${
+                    surface === "git" ? "text-[var(--fig-accent-soft)]" : "muted"
+                  }`}
                   data-testid="nav-sources-git"
                   onClick={() => noteProjectSurfaceNavIntent(projectId, "git")}
                 >
                   Sources Git
                 </Link>
+                <Link
+                  href={`/projects/${projectId}?surface=publication`}
+                  className={`text-sm block px-2 py-1 ${
+                    surface === "publication" ? "text-[var(--fig-accent-soft)]" : "muted"
+                  }`}
+                  data-testid="nav-resultats"
+                  onClick={() => noteProjectSurfaceNavIntent(projectId, "publication")}
+                  title="Publication Git existante (préparation / autorisation / dispatch) — libellé Figma provisoire"
+                >
+                  Résultats et preuves
+                </Link>
               </div>
             ) : null}
           </nav>

```

### `projects/sfia-studio-next/web/src/components/shell/studio-rail.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index acfeff78..5f39ecfa 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -10,7 +10,14 @@ import type { CSSProperties } from "react";

 export type StudioRailVariant = "personnel" | "projet" | "conversation" | "inspection";

-export type StudioSurface = "travail" | "pilotage" | "journal" | "document" | "git" | "publication";
+export type StudioSurface =
+  | "travail"
+  | "projet"
+  | "pilotage"
+  | "journal"
+  | "document"
+  | "git"
+  | "publication";

 export type StudioRailTokens = {
   variant: StudioRailVariant;
@@ -42,30 +49,32 @@ export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> =
   projet: {
     variant: "projet",
     widthPx: 246,
-    fill: "#0C1020",
+    // ML4D 652:* validated — common project rail fill
+    fill: "#0C101A",
     paddingTop: 24,
     paddingRight: 24,
     paddingBottom: 24,
     paddingLeft: 24,
     gap: 13,
     railComponentId: "shell.rail.projet",
-    sourceNodeId: "160:176",
+    sourceNodeId: "652:8",
   },
   conversation: {
     variant: "conversation",
-    widthPx: 240,
-    fill: "#0D111B",
+    // Ensemble 04 — project desktop rail fixed at 246 (Figma 652:*)
+    widthPx: 246,
+    fill: "#0C101A",
     paddingTop: 25,
     paddingRight: 19,
     paddingBottom: 0,
     paddingLeft: 19,
     gap: 13,
     railComponentId: "shell.rail.conversation",
-    sourceNodeId: "94:215",
+    sourceNodeId: "652:8",
   },
   inspection: {
     variant: "inspection",
-    widthPx: 244,
+    widthPx: 246,
     fill: "#0C101A",
     paddingTop: 23,
     paddingRight: 19,
@@ -73,12 +82,13 @@ export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> =
     paddingLeft: 19,
     gap: 11,
     railComponentId: "shell.rail.inspection",
-    sourceNodeId: "94:372",
+    sourceNodeId: "652:8",
   },
 };

 export const PROJECT_SURFACES: StudioSurface[] = [
   "travail",
+  "projet",
   "pilotage",
   "journal",
   "document",
@@ -86,6 +96,17 @@ export const PROJECT_SURFACES: StudioSurface[] = [
   "publication",
 ];

+/** Breadcrumb / chrome labels — Trajectoire remains URL-compatible with ?surface=pilotage. */
+export const PROJECT_SURFACE_LABELS: Record<StudioSurface, string> = {
+  travail: "Travail",
+  projet: "Projet",
+  pilotage: "Trajectoire",
+  journal: "Journal",
+  document: "Documents Nora",
+  git: "Sources Git",
+  publication: "Résultats et preuves",
+};
+
 export function parseStudioSurface(raw: string | null | undefined): StudioSurface | null {
   if (!raw) return null;
   const v = raw.toLowerCase();
@@ -211,6 +232,7 @@ export function resolveRailVariant(input: {
     if (surface === "document" || surface === "git" || surface === "publication") return "inspection";
     if (surface === "travail") return "conversation";
     if (surface === "journal") return "personnel";
+    // projet overview + pilotage/trajectoire share the product rail fill
     return "projet";
   }
   return "personnel";
@@ -294,12 +316,13 @@ export function buildShellNav(input: {
     return items;
   }

-  // project context — real surface URLs
+  // Ensemble 04 rail NAVIGATION — Documents/Git stay in Accès directs (not primary).
+  // Trajectoire keeps ?surface=pilotage for deep-link compatibility.
   const surfaces: Array<{ key: StudioSurface; label: string }> = [
     { key: "travail", label: "Travail" },
-    { key: "pilotage", label: "Pilotage" },
-    { key: "document", label: "Documents" },
+    { key: "projet", label: "Projet" },
     { key: "journal", label: "Journal" },
+    { key: "pilotage", label: "Trajectoire" },
   ];
   for (const s of surfaces) {
     items.push({

```

### `projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
index b6625cc6..e65ffaa6 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
@@ -3,7 +3,8 @@ import path from "path";
 import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

 async function openPilotageSurface(page: import("@playwright/test").Page) {
-  await page.getByTestId("surface-pilotage").click();
+  // Ensemble 04: Trajectoire lives on the rail (?surface=pilotage); central tab strip removed.
+  await page.getByTestId("studio-rail").getByTestId("nav-pilotage").click();
   await expect(page).toHaveURL(/[?&]surface=pilotage\b/);
   await expect(page.getByTestId("pilotage-panel")).toBeVisible({ timeout: 15000 });
 }

```

### `projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
index c7415c23..b8da3043 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
@@ -85,7 +85,7 @@ test("ML4C C-07: composer usable on 320+ message thread after scroll", async ({
   const seed = "Fil projet ML4C composer long (fixture).";
   const { preparationId, projectId } = await bootstrapProjectFromPortfolio(page, {
     seed,
-    name: "ML4C Composer 320+",
+    name: `ML4C Composer 320+ ${Date.now()}`,
     summary: "C-07 fil long",
   });


```

### `projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts b/projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts
index d17ffd2f..05d483b4 100644
--- a/projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts
@@ -109,7 +109,8 @@ test("rapid rail surface switches keep the last user intent", async ({ page }) =
   await expect(page).toHaveURL(new RegExp(`surface=pilotage`));
   await rail.getByTestId("nav-journal").click();
   await expect(page).toHaveURL(new RegExp(`surface=journal`));
-  await rail.getByTestId("nav-document").click();
+  // Documents Nora is Accès directs (Ensemble 04) — testid nav-documents.
+  await rail.getByTestId("nav-documents").click();
   await expect(page).toHaveURL(new RegExp(`surface=document`));
   await rail.getByTestId("nav-travail").click();
   await expect(page).toHaveURL(new RegExp(`/projects/${projectId}\\?surface=travail`));
@@ -145,13 +146,14 @@ test("project B load ignores stale pilotage intent from project A", async ({ pag
     return id!;
   }

-  const projectA = await createNamedProject("Projet NAV A");
+  const stamp = Date.now();
+  const projectA = await createNamedProject(`Projet NAV A ${stamp}`);
   await page.getByTestId("studio-rail").getByTestId("nav-pilotage").click();
   await expect(page).toHaveURL(new RegExp(`/projects/${projectA}\\?surface=pilotage`));

   await page.goto("/portfolio");
   await page.waitForURL("**/portfolio");
-  const projectB = await createNamedProject("Projet NAV B");
+  const projectB = await createNamedProject(`Projet NAV B ${stamp}`);
   expect(projectB).not.toBe(projectA);

   // B created without clicking Pilotage — must settle on travail, not A's intent.

```

### `projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
index 0e36882a..0cc54b4c 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
@@ -385,13 +385,14 @@ test.describe("UX-004 portfolio shell", () => {
     await page.waitForURL("**/projects/**", { timeout: 15000 });
     const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];

+    // Ensemble 04 — project desktop rail fixed at 246 px across surfaces (Figma 652:*).
     await page.goto(`/projects/${projectId}?surface=travail`);
     await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "conversation");
-    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "240");
+    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "246");

     await page.goto(`/projects/${projectId}?surface=document`);
     await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "inspection");
-    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "244");
+    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "246");

     await page.goto(`/projects/${projectId}?surface=pilotage`);
     await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "projet");

```

### `projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
index 0ec4f828..d14aebac 100644
--- a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
@@ -14,15 +14,15 @@ describe("F1 studio rail variants (G2 railEvidence)", () => {
   it("keeps personnel vs projet fill discriminant", () => {
     // Sas Nora 606:20 personal rail fill; projet remains distinct for project space.
     expect(STUDIO_RAIL_VARIANTS.personnel.fill.toLowerCase()).toBe("#0d1220");
-    expect(STUDIO_RAIL_VARIANTS.projet.fill.toLowerCase()).toBe("#0c1020");
+    expect(STUDIO_RAIL_VARIANTS.projet.fill.toLowerCase()).toBe("#0c101a");
     expect(STUDIO_RAIL_VARIANTS.personnel.fill).not.toBe(STUDIO_RAIL_VARIANTS.projet.fill);
   });

   it("exposes measured widths", () => {
     expect(STUDIO_RAIL_VARIANTS.personnel.widthPx).toBe(246);
     expect(STUDIO_RAIL_VARIANTS.projet.widthPx).toBe(246);
-    expect(STUDIO_RAIL_VARIANTS.conversation.widthPx).toBe(240);
-    expect(STUDIO_RAIL_VARIANTS.inspection.widthPx).toBe(244);
+    expect(STUDIO_RAIL_VARIANTS.conversation.widthPx).toBe(246);
+    expect(STUDIO_RAIL_VARIANTS.inspection.widthPx).toBe(246);
   });

   it("resolves variant from G2 railEvidence route ↔ state mapping", () => {
@@ -54,11 +54,18 @@ describe("B1 shell navigation", () => {
   it("exposes real project surface hrefs (no #)", () => {
     const items = buildShellNav({ pathname: "/projects/proj-1", surface: "pilotage" });
     const travail = items.find((i) => i.key === "travail");
-    const docs = items.find((i) => i.key === "document");
+    const projet = items.find((i) => i.key === "projet");
+    const journal = items.find((i) => i.key === "journal");
+    const trajectoire = items.find((i) => i.key === "pilotage");
     expect(travail?.href).toBe("/projects/proj-1?surface=travail");
-    expect(docs?.href).toBe("/projects/proj-1?surface=document");
+    expect(projet?.href).toBe("/projects/proj-1?surface=projet");
+    expect(journal?.href).toBe("/projects/proj-1?surface=journal");
+    expect(trajectoire?.label).toBe("Trajectoire");
+    expect(trajectoire?.href).toBe("/projects/proj-1?surface=pilotage");
+    // Documents stay in Accès directs, not primary rail NAVIGATION.
+    expect(items.some((i) => i.key === "document")).toBe(false);
     expect(items.every((i) => i.href !== "#")).toBe(true);
-    expect(items.find((i) => i.key === "pilotage")?.active).toBe(true);
+    expect(trajectoire?.active).toBe(true);
   });

   it("keeps a single Portefeuille entry plus Nouveau projet action (UX-004)", () => {

```

---

## Appendix C — Diff consolidation seule (`660ff4243fafb586bfa0dd9b377382952e831ca9`..`20fb41baa534b5a802a275b6944fc267ccaa2192`)

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 78a681fc..29a8ec4d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5,6 +5,23 @@ Append-only logical journal of Cursor product deliveries.



+## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-TECHNICAL-CONSOLIDATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~21:55 CET |
+| Macro-lot | ML4D Ensemble 04 — consolidation technique + plan RECETTE |
+| Type | RUN / correction bornée · **NO RELEASE** |
+| Parent candidat | `660ff4243fafb586bfa0dd9b377382952e831ca9` |
+| Baseline UX-005 | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
+| Scope | T13 500+retry ; T16 pending×nav ; preuve tsc antérieur ; ESLint/build ; plan cutover RECETTE read-only ; clarif. title Résultats/preuves |
+| Non-scope | Déploiement RECETTE ; push projet ; Ensembles 05–07 ; fix fixtures ML4C tsc |
+| Preuves | next build PASS ; Playwright E04+T13/T16+nreg PASS ; tsc workspace FAIL=parent (32) / E04 src 0 |
+| RECETTE | observée `bd8e1672` / BUILD `bURdIMEzv8pRSJCzgsiDf` — **non modifiée** |
+| Push produit | **AUCUN** |
+| Verdict cible | `TECHNICAL CANDIDATE READY FOR CHATGPT REVIEW` |
+
+
 ## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-PROJECT-SPACE

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/recette-cutover-plan.md b/projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/recette-cutover-plan.md
new file mode 100644
index 00000000..4e1a09ca
--- /dev/null
+++ b/projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/recette-cutover-plan.md
@@ -0,0 +1,82 @@
+# Plan de mise à disposition RECETTE — Ensemble 04 (NON EXÉCUTÉ)
+
+Date: 2026-11-16
+Statut: **PRÉPARÉ — EN ATTENTE GO MORRIS**
+Lane cible: RECETTE existante `http://127.0.0.1:3200`
+Aucune exécution dans le cycle de consolidation.
+
+## A. État actuel (observé read-only)
+
+| Champ | Valeur observée |
+| --- | --- |
+| URL | `http://127.0.0.1:3200` (login HTTP 200) |
+| Processus | `node` PID observé (next-server 15.5.29) écoute localhost:3200 |
+| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` (KeepAlive, RunAtLoad) |
+| Script | `…/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/start-recette-sas-nora-bd8e1672.sh` |
+| Worktree servi | `…/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672` |
+| `SFIA_SOURCE_SHA` | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
+| BUILD_ID | `bURdIMEzv8pRSJCzgsiDf` (HTML + `.next/BUILD_ID`) |
+| Mode | `NODE_ENV=production` ; Nora fixture **non** forcée (LIVE path) |
+| Env file | `$HOME/.config/sfia-studio-next/recette/.env.local` (secrets non lus/non reportés) |
+| Capacités présentes | Ensembles 01–03 + Sas Nora R1/R2 sur SHA UX-005 |
+| Isolation cookies | Ports 310x/3200 partagent `127.0.0.1` — **pas** d’isolation session automatique |
+
+Non observé dans ce cycle (sans ouverture secrets): détail rôle PG, dump DB, volumes uploads exacts, comptes OAuth.
+
+## B. Nouveau candidat (à figer après revue)
+
+| Champ | Valeur |
+| --- | --- |
+| Branche locale | `feat/next-ml4d-project-space-20261116` |
+| Parent | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
+| SHA candidat (après consolidation) | *à reporter du HEAD final du cycle* |
+| Migrations | aucune attendue |
+| Compat 01–03 | shell projet seulement ; Portefeuille/Sas non redesignés |
+| Tests | Ensemble04 + nav-intent + UX-003/004 + T13/T16 |
+
+## C. Préservation
+
+1. Dump logique DB RECETTE (outil habituel d’ops) **avant** bascule.
+2. Conserver le worktree `…-bd8e1672` et le LaunchAgent `.bak` actuel.
+3. Ne pas toucher DEV (:3102) ni STABLE.
+4. Ne pas `drop` / migrate / truncate RECETTE.
+5. Conserver volumes/documents/uploads.
+
+## D. Bascule future (après GO)
+
+1. `git fetch` / archive du SHA candidat figé.
+2. Worktree dédié `…-recette-build-<sha12>` (pas hot reload).
+3. `npm ci` + `next build` dans ce worktree avec env RECETTE.
+4. Vérifier BUILD_ID produit.
+5. Arrêt contrôlé LaunchAgent actuel.
+6. Remplacer ProgramArguments/WorkingDirectory vers le nouveau start script (port **3200** inchangé).
+7. `launchctl load` / kickstart.
+8. Vérifier HTML build id + `SFIA_SOURCE_SHA` + smoke.
+
+## E. Smoke post-bascule
+
+Connexion · Portefeuille · Sas reprise · Travail · Projet · Journal · Trajectoire (`pilotage`) · indisponible · changement de projet sans fuite.
+
+## F. Retour arrière
+
+1. Relancer LaunchAgent / script `bd8e1672` + BUILD_ID `bURdIMEzv8pRSJCzgsiDf`.
+2. Vérifier login 200 et SHA source.
+3. Déclenchement: smoke critique rouge, perte de continuité, ou GO Morris rollback.
+
+## G. Manifeste ENV-01 (brouillon)
+
+| Clé | Valeur |
+| --- | --- |
+| source_sha | *(SHA candidat final)* |
+| base_main_sha | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
+| build_id | *(après build RECETTE)* |
+| environment | RECETTE |
+| schema_revision | inchangé (à confirmer au build) |
+| test_data_revision | données RECETTE conservées |
+| quality_evidence | Review Pack + Playwright DEV/E2E |
+| capabilities | Ensemble 04 shell projet |
+| known_gaps | mapping « Résultats et preuves » ; Ens. 05–07 ; Nora LIVE ≠ FAKE |
+| decision | PENDING Morris GO |
+| product_version | `0.0.0-dev` / NO RELEASE |
+
+**Ce plan n’autorise aucune bascule.**
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 1382d7c8..be47fd84 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -283,7 +283,7 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                   }`}
                   data-testid="nav-resultats"
                   onClick={() => noteProjectSurfaceNavIntent(projectId, "publication")}
-                  title="Publication et preuves Git existantes"
+                  title="Publication Git existante (préparation / autorisation / dispatch) — libellé Figma provisoire"
                 >
                   Résultats et preuves
                 </Link>
diff --git a/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts b/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
index 42ba8d67..a9b77871 100644
--- a/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
@@ -95,4 +95,138 @@ test.describe("Ensemble 04 project space", () => {
     await expect(page.getByTestId("rail-project-name")).toHaveText("Projet indisponible");
     await expect(page.getByTestId("studio-rail").getByTestId("nav-travail")).toHaveCount(0);
   });
+
+  test("T13 temporary HTTP 500 then retry recovers without cross-project leak", async ({
+    page,
+  }) => {
+    const projectName = `E04 T13 ${Date.now()}`;
+    await page.goto("/login");
+    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+    await page.waitForURL("**/portfolio");
+
+    await page.getByTestId("portfolio-new-prep").click();
+    await page.waitForURL("**/preparations/**");
+    await page.getByTestId("prep-draft").fill("Ensemble 04 T13 temporary error");
+    await page.getByTestId("prep-send").click();
+    await expect(
+      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
+    ).toBeVisible({ timeout: 30000 });
+    await seedInspectedNameViaApi(page, { name: projectName, summary: "t13" });
+    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
+    await page.getByTestId("prep-create-project").click();
+    await page.waitForURL("**/projects/**", { timeout: 15000 });
+    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+    expect(projectId).toBeTruthy();
+    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+      "data-project-load-state",
+      "ready",
+      { timeout: 20000 },
+    );
+    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);
+
+    let failRootGets = true;
+    let rootGetCount = 0;
+    await page.route("**/api/projects/**", async (route) => {
+      const url = route.request().url();
+      const method = route.request().method();
+      const isProjectRootGet =
+        method === "GET" &&
+        /\/api\/projects\/[^/?#]+\/?$/.test(new URL(url).pathname);
+      if (isProjectRootGet) {
+        rootGetCount += 1;
+        if (failRootGets) {
+          await route.fulfill({
+            status: 500,
+            contentType: "application/json",
+            body: JSON.stringify({ error: "INTERNAL" }),
+          });
+          return;
+        }
+      }
+      await route.continue();
+    });
+
+    await page.reload();
+    await expect(page.getByTestId("project-unavailable")).toHaveAttribute(
+      "data-unavailable-kind",
+      "temporary",
+      { timeout: 20000 },
+    );
+    await expect(page.getByTestId("unavailable-retry")).toBeVisible();
+    await expect(page.getByTestId("rail-project-name")).toHaveText("Projet indisponible");
+    await expect(page.getByTestId("rail-project-name")).not.toHaveText(projectName);
+    await expect(page.getByTestId("studio-rail").getByTestId("nav-travail")).toHaveCount(0);
+
+    const getsBeforeRetry = rootGetCount;
+    failRootGets = false;
+    await page.getByTestId("unavailable-retry").click();
+    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+      "data-project-load-state",
+      "ready",
+      { timeout: 20000 },
+    );
+    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);
+    await expect(page.getByTestId("project-unavailable")).toHaveCount(0);
+    expect(rootGetCount).toBeGreaterThan(getsBeforeRetry);
+  });
+
+  test("T16 pending thread state survives surface nav after Ensemble 04 shell", async ({
+    page,
+  }) => {
+    const projectName = `E04 T16 ${Date.now()}`;
+    await page.goto("/login");
+    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+    await page.waitForURL("**/portfolio");
+
+    await page.getByTestId("portfolio-new-prep").click();
+    await page.waitForURL("**/preparations/**");
+    await page.getByTestId("prep-draft").fill("Ensemble 04 T16 pending preserve");
+    await page.getByTestId("prep-send").click();
+    await expect(
+      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
+    ).toBeVisible({ timeout: 30000 });
+    await seedInspectedNameViaApi(page, { name: projectName, summary: "t16" });
+    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
+    await page.getByTestId("prep-create-project").click();
+    await page.waitForURL("**/projects/**", { timeout: 15000 });
+    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+    expect(projectId).toBeTruthy();
+    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+      "data-project-load-state",
+      "ready",
+      { timeout: 20000 },
+    );
+
+    const stamp = Date.now();
+    const pending = {
+      content: "Intention incertaine E04 T16 — ne pas dupliquer",
+      clientTurnKey: `ctk_e04_t16_${stamp}`,
+      clientCommandKey: `conv-auth:ctk_e04_t16_${stamp}`,
+    };
+    await page.evaluate(
+      ({ projectId: id, pending: p }) => {
+        sessionStorage.setItem(`sfia.thread.pending:${id}`, JSON.stringify(p));
+      },
+      { projectId, pending },
+    );
+    await page.reload();
+    await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
+    await expect(page.getByTestId("nora-thread")).toBeVisible();
+
+    const rail = page.getByTestId("studio-rail");
+    await rail.getByTestId("nav-projet").click();
+    await expect(page.getByTestId("project-overview")).toBeVisible();
+    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0);
+
+    await rail.getByTestId("nav-journal").click();
+    await expect(page).toHaveURL(/surface=journal/);
+
+    await rail.getByTestId("nav-travail").click();
+    await expect(page).toHaveURL(/surface=travail/);
+    await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
+    await expect(page.getByTestId("thread-reconcile-pending")).toBeVisible();
+    await expect(page.getByTestId("nora-thread")).toBeVisible();
+    // Scope: shell navigation must not clear client pending identity.
+    // Deep Nora scroll / structured replies remain Ensemble 05.
+  });
 });

```
