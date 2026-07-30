# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 15:54:03 CEST (+0200) |
| **Niveau** | Full |
| **Mono-cycle** | V2-A3 Project Workspace UI — PR readiness |
| **Repository** | mcleland147/sfia-workspace |
| **Workspace** | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge |
| **Cycle** | 13 — PR readiness |
| **Profil** | Standard · Standard renforcé · EVOL |
| **Gate Morris consommé** | GO V2-A3 PR READINESS VALIDATION |
| **Branche** | delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui |
| **HEAD** | d0e498ec1636122246e0de0103c50fb3ccb9fdd7 |
| **Base origin/main** | d0e498ec1636122246e0de0103c50fb3ccb9fdd7 |
| **Divergence** | 0 0 (ahead/behind) |
| **Commits projet** | 0 |
| **Staged** | aucun |
| **Upstream** | aucun |
| **Branche distante projet** | absente |
| **PR existante** | aucune |
| **Push / PR / merge projet** | non |
| **Verdict unique** | **TECHNICALLY READY — LOCAL COMMITS REQUIRED — MORRIS DECISION REQUIRED** |

## Git Review Index

| Champ | Valeur |
|-------|--------|
| base | origin/main @ d0e498ec1636122246e0de0103c50fb3ccb9fdd7 |
| branche | delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui |
| HEAD | d0e498ec1636122246e0de0103c50fb3ccb9fdd7 |
| origin/main...HEAD | 0 0 |
| working tree | dirty (lot V2-A3 + singleton) |
| staged | vide |
| upstream | none |
| remote delivery branch | absent |
| PR | none |
| review pack | full · non synthesis-only |
| verdict | TECHNICALLY READY — LOCAL COMMITS REQUIRED |

## Review pack content coverage

| Critère | Statut |
|---------|--------|
| fichiers créés = contenu complet | yes |
| fichiers modifiés = diff utile complet | yes |
| preuves runtime | yes |
| draft PR | yes |
| synthesis only | **no** |
| anti-stub | **pass** |
| review pack verdict | **complete** |

## Sources consultées

| Source | Rôle |
|--------|------|
| prompts/templates/sfia-cycle-execution-template.md (main) | protocole cycle |
| origin/sfia/review-handoff tip 215fbf6 | Create→Workspace verified |
| singleton.ts / actions.ts / service.ts | runtime chaîne |
| pages new + [id] | routes |
| CreateProjectForm / Workspace* / Banner / navigation | UI |
| tests V2-A2/A3/runtime/boundaries/increments | QA |
| README V2-A3 | doc cycle |
| evidence/v2-a3/03-05 | preuves |

## Local Git Truth Check (horodaté)

```text
timestamp = 2026-07-30 15:52:51 CEST (+0200)
workspace = /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
branch = delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui
HEAD = d0e498ec1636122246e0de0103c50fb3ccb9fdd7
origin/main = d0e498ec1636122246e0de0103c50fb3ccb9fdd7
rev-list left-right = 0 0
staged = empty
upstream = none
remote delivery branch = absent
PR list = []
pre-check = OK
## Inventaire working tree

### Tracked modifiés (7)

| Path | name-status | Justification |
|------|-------------|---------------|
| lib/vertical-slice-runtime/singleton.ts | M | Fix autorisé globalThis process-local |
| __tests__/…/runtimeApplicationService.test.ts | M | Assertion slot globalThis + reset |
| features/…/CreateProjectForm.tsx | M | CTA Create → Workspace |
| features/…/RuntimeDisclosureBanner.tsx | M | surface=workspace |
| lib/navigation.ts | M | StudioProjectWorkspaceRoute + helper |
| __tests__/…/importBoundaries.test.ts | M | allowlist workspace + route [id] |
| __tests__/…/createProjectUi.test.tsx | M | assert lien workspace |

### Untracked projet (6)

| Path | Justification |
|------|---------------|
| app/studio/projects/[id]/page.tsx | Route workspace |
| ProjectWorkspaceClient.tsx | Loader Server Action |
| ProjectWorkspaceView.tsx | Projection Project/LPS |
| project-workspace.module.css | Styles bornés |
| projectWorkspaceUi.test.tsx | Tests V2-A3 |
| …/v2-a3-…/README.md | Doc cycle |

### Untracked temporaire (non projet)

.tmp-sfia-review/** (review pack + evidence + pr-body legacy) — ne pas committer.

### Staged

aucun.

### Diff vs origin/main...HEAD

vide (0 commits). Le lot est entièrement dans le working tree.

### git diff --stat (working tree tracked)

```text
7 files changed, 78 insertions(+), 18 deletions(-)
```

### git diff --name-status

```text
M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
M projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
M projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
M projects/sfia-studio/app/lib/navigation.ts
M projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
```

### Fichiers interdits dans le diff

Aucun : pas de Core V1, contrats types V2-A1, package.json, lockfiles, workflows, migrations, prompts méthode.

## Qualification séparée

| Dimension | Statut |
|-----------|--------|
| Conformité technique / fonctionnelle | PASS (Create→Workspace vérifié ; tests/build) |
| Readiness documentaire | PASS (README + review pack + draft PR) |
| Readiness Git | **FAIL prérequis** — 0 commit ahead ; pas de tip poussable |

## Correctif singleton (revue stricte)

| Critère | Résultat |
|---------|----------|
| clé __SFIA_V2_RUNTIME_APPLICATION_SERVICE__ | oui |
| slot globalThis process-local | oui |
| reset test vide le slot | oui |
| nouveau contrat runtime | non |
| persistance | non |
| D1 / IAM / agent | non |
| dépasse holder autorisé | non |

## Architecture et chaîne

```text
UI Create (/studio/projects/new)
  → createProjectRuntimeAction
    → RuntimeApplicationService V2-A1 (singleton globalThis)
      → LocalProjectFacade V1
        → Project + LPS
Create success CTA
  → /studio/projects/[id]
UI Workspace ProjectWorkspaceClient
  → getProjectRuntimeAction
    → même singleton process-local
      → getProjectOverview
        → ProjectWorkspaceView projection
```

Disclosures : LOCAL_PROCESS · NOT_GUARANTEED · DISABLED · NOT_READY.

actions.ts inchangé (wrappers create/get). service.ts inchangé (createProject / getProject). Core V1 non touché.

## Validations

| Contrôle | Résultat |
|----------|----------|
| Tests ciblés runtime+UI A2/A3+increments+boundaries | PASS · 43 |
| Suite complète | PASS · 781 tests / 89 files |
| typecheck | PASS |
| lint | PASS |
| build | PASS · /studio/projects/[id] générée |
| git diff --check | PASS |
| Create → Workspace runtime | PASS (cycle précédent + preuves 03-05) |
| hygiène secrets / storage / fetch / debug / TODO bloquant / @ts-ignore | PASS sur lot UI/runtime touché |

## Preuves runtime

Project ID vérifié (create = workspace) :
`prj:6994ae3a-3160-45d1-b4db-010c051084f6`

| Fichier | SHA-256 | Contenu |
|---------|---------|---------|
| 03-create-form-filled.png | e43ee9c8b298f901e050c75d69e433c90482e742e6ae7005f8596e3f54f08448 | formulaire · LOCAL_PROCESS · NOT_READY |
| 04-create-success.png | 8b8666ec618eb73e1f939a498f5e7c36e4fe97a89a178ed908a8d04d5e732a2d | succès · LPS · REAL_LOCAL_CORE · fixture=false · disclosures |
| 05-workspace-loaded.png | bff616a9a4de23476ee6b594efdcc2ff08dfe4f4e684d5e475de072f9f9ad228 | workspace chargé · même projet · pas PROJECT_NOT_FOUND |

Format : PNG 3840×2160. Accessibilité : labels/sections/aria dans tests axe workspace ; loading/error states couverts ; pas de claim pixel-perfect/Figma.

## Accessibilité / UX (validation seule)

- headings Project / LPS / vérité runtime ;
- aria-labelledby sections ;
- focus-visible sur navLink ;
- loading testid project-workspace-loading ;
- missing state PROJECT_NOT_FOUND borné ;
- axe.run sans violations (règles contrast/region désactivées comme V2-A2) ;
- hors scope : 390px, Figma frame.

## Réserves

1. Branche à 0 commit — PR GitHub impossible tant que commits locaux absents.
2. README V2-A3 ligne architecture encore formulée « without changing V1/V2-A1 » alors que holder singleton a été modifié (autorisé) — drift doc non bloquant, à ajuster au commit.
3. État process-local volatil inchangé.
4. .tmp-sfia-review/** ne doit pas être tracké.
5. Cast non bloquant StudioShellRoute → StudioRoute historique.

## Anti-claims

Ne pas conclure : PRODUCT READY · RUN READY · HARD CLOSED · IAM disponible · agent actif · persistance produit · delivery autorisé · cutover autorisé · READY FOR PR (sans commits).

## Décisions Morris

| Gate | Statut |
|------|--------|
| GO CYCLE V2-A3 PROJECT WORKSPACE UI | consommé (implémentation) |
| GO AUTHORIZE V2-A1 SINGLETON GLOBALTHIS FIX… | consommé (fix + verify) |
| GO V2-A3 PR READINESS VALIDATION | consommé (ce cycle) |
| **GO COMMIT SFIA STUDIO V2-A3 PROJECT WORKSPACE UI** | **candidat suivant** |

## Draft PR (non créé)

### Title

`feat(sfia-studio): add V2-A3 project workspace UI over process-local runtime`

### Body

```markdown
## Summary
- Add `/studio/projects/[id]` Project Workspace UI that projects real V1 Project + LPS via existing V2-A1 Server Actions.
- Wire Create Project success CTA to open the workspace for the created project id.
- Anchor the V2-A1 process-local RuntimeApplicationService singleton on `globalThis` so Next.js route/chunk graphs share one in-memory store (fixes cross-route PROJECT_NOT_FOUND).
- Keep Core V1 and V2-A1 contracts unchanged; disclosures remain LOCAL_PROCESS / NOT_GUARANTEED / DISABLED / NOT_READY.

## Architecture
UI Create → createProjectRuntimeAction → RuntimeApplicationService → LocalProjectFacade → Project + LPS
→ navigate `/studio/projects/[id]` → getProjectRuntimeAction → Workspace projection.

## Scope
In: workspace route/components/styles/tests/docs, Create→Workspace CTA, disclosure surface, navigation type helper, singleton holder.
Out: IAM, product persistence, D1, browser storage, real agent, recommendation engine, full dashboard, delivery, cutover, Figma, 390px.

## Validation
- Targeted UI/runtime/increment/boundary tests PASS
- Full suite PASS (781)
- typecheck / lint / build / git diff --check PASS
- Runtime evidence: create form, create success, workspace loaded; matching project id; fixture=false; no PROJECT_NOT_FOUND

## Visual evidence
Local captures under `.tmp-sfia-review/evidence/v2-a3/` (03/04/05) — not committed.

## Runtime disclosures
LOCAL_PROCESS · NOT_GUARANTEED · AGENT DISABLED · NOT_READY
IAM NOT_SELECTED · PRODUCT PERSISTENCE NOT_SELECTED · DELIVERY NOT_AUTHORIZED · CUTOVER NOT_AUTHORIZED

## Known limitations
- Process-local volatile memory only (restart/hot-reload may lose state).
- Not multi-instance safe.
- No durable product store.

## Out of scope
IAM, persistence, agent execution, recommendation, dashboard, delivery, cutover.

## Checklist
- [ ] Local commits exist on delivery branch
- [ ] Branch pushed (separate Morris GO)
- [ ] CI green
- [ ] Reviewer confirms no Core V1 / contract drift
- [ ] Anti-claims acknowledged
```

## Contenu complet — fichiers créés
### `projects/sfia-studio/app/app/studio/projects/[id]/page.tsx`

```tsx
import { StudioShell } from "@/components/shell/StudioShell";
import { ProjectWorkspaceClient } from "@/features/vertical-slice-ui/ProjectWorkspaceClient";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
import styles from "@/features/vertical-slice-ui/project-workspace.module.css";
import type { StudioShellRoute } from "@/lib/navigation";

interface ProjectWorkspacePageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectWorkspacePage({
  params,
}: ProjectWorkspacePageProps) {
  const { id } = await params;
  const projectId = decodeURIComponent(id);
  const activeRoute =
    `/studio/projects/${projectId}` as StudioShellRoute;

  return (
    <StudioShell
      variant="flush"
      activeRoute={activeRoute}
      title="Espace projet"
      showTabs={false}
      primaryAction={null}
      pills={[
        { label: "LOCAL_PROCESS", tone: "orange" },
        { label: "NOT_READY", tone: "orange" },
      ]}
      copilot={{
        variant: "flush",
        name: "Nora · Project Copilot",
        subtitle: "Lecture seule · aucune autorité",
        avatarTone: "purple",
        levelPill: "Aucune décision",
        summary:
          "Je rappelle le contexte local du Project. Je ne recommande aucun cycle et je ne prends aucune décision Morris.",
        watchLabel: "GARDE-FOUS",
        watchItems: [
          { label: "État process-local volatil", dotColor: "#faa629" },
          { label: "IAM non sélectionné", dotColor: "#7a4df5" },
          { label: "Agent réel désactivé", dotColor: "#51607a" },
        ],
        riskTitle: "MODE LOCAL UNIQUEMENT",
        riskText:
          "Un redémarrage ou hot reload peut perdre le Project et son LPS. Aucune persistance produit, delivery ou cutover.",
      }}
    >
      <div className={styles.page}>
        <RuntimeDisclosureBanner surface="workspace" />
        <ProjectWorkspaceClient projectId={projectId} />
      </div>
    </StudioShell>
  );
}
```

### `projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceClient.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { ProjectWorkspaceView } from "./ProjectWorkspaceView";
import styles from "./project-workspace.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;

/**
 * Client loader: process-local V2-A1 state is reached through Server Actions,
 * matching Create Project. The V2-A1 singleton is process-anchored on globalThis
 * so create (/new) and get (/[id]) share the same in-memory store in one Node process.
 */
export function ProjectWorkspaceClient({ projectId }: { projectId: string }) {
  const [result, setResult] = useState<GetProjectResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    void getProjectRuntimeAction(projectId).then((next) => {
      if (!cancelled) setResult(next);
    });
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  if (!result) {
    return (
      <p className={styles.hint} data-testid="project-workspace-loading">
        Chargement de la projection locale…
      </p>
    );
  }

  return <ProjectWorkspaceView projectId={projectId} result={result} />;
}
```

### `projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx`

```tsx
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./project-workspace.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;
type GetProjectSuccess = Extract<GetProjectResult, { ok: true }>;
type GetProjectFailure = Extract<GetProjectResult, { ok: false }>;

function ProjectProjection({ result }: { result: GetProjectSuccess }) {
  return (
    <Card variant="flush" className={styles.workspaceCard}>
      <div data-testid="project-workspace-projection">
      <div className={styles.workspaceHeader}>
        <div>
          <h2>Espace de travail projet</h2>
          <p className={styles.hint}>
            Vue de contexte locale — projection réelle du core V1, sans
            dashboard, sans agent et sans persistance produit.
          </p>
        </div>
        <div className={styles.pillGroup}>
          <StatusPill tone="green">REAL_LOCAL_CORE</StatusPill>
          <StatusPill tone="orange">{result.readiness.status}</StatusPill>
        </div>
      </div>

      <section className={styles.section} aria-labelledby="workspace-project">
        <h3 id="workspace-project">Project</h3>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Project ID</dt>
            <dd className={styles.valueCode}>{result.project.projectId}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Nom</dt>
            <dd>{result.project.name}</dd>
          </div>
          {result.project.shortReference ? (
            <div className={styles.definitionItem}>
              <dt>Référence courte</dt>
              <dd>{result.project.shortReference}</dd>
            </div>
          ) : null}
          <div className={styles.definitionItem}>
            <dt>Criticité perçue</dt>
            <dd>{result.project.criticality}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Objectif</dt>
            <dd>{result.project.objective}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Contexte résumé</dt>
            <dd>{result.project.contextSummary}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Source</dt>
            <dd>{result.project.source}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Fixture</dt>
            <dd>{String(result.project.fixture)}</dd>
          </div>
        </dl>
        {result.project.constraints.length > 0 ? (
          <ul className={styles.constraintList} aria-label="Contraintes">
            {result.project.constraints.map((constraint, index) => (
              <li key={`${index}:${constraint}`}>{constraint}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>Aucune contrainte principale.</p>
        )}
      </section>

      <section className={styles.section} aria-labelledby="workspace-lps">
        <h3 id="workspace-lps">Doctrine et Living Project State</h3>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Doctrine</dt>
            <dd>{result.doctrine.id}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Version / statut</dt>
            <dd>
              {result.doctrine.version} · {result.doctrine.status}
            </dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Digest</dt>
            <dd className={styles.valueCode}>{result.doctrine.digest}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>LPS</dt>
            <dd className={styles.valueCode}>{result.livingState.id}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>LPS version / date</dt>
            <dd>
              v{result.livingState.version} · {result.livingState.createdAt}
            </dd>
          </div>
        </dl>
      </section>

      <section className={styles.truthBox} aria-labelledby="workspace-truth">
        <h3 id="workspace-truth">Vérité runtime</h3>
        <div className={styles.pillGroup}>
          <StatusPill tone="orangeFlush">
            {result.disclosures.runtimeMode}
          </StatusPill>
          <StatusPill tone="muted">{result.disclosures.persistence}</StatusPill>
          <StatusPill tone="muted">
            AGENT {result.disclosures.agentExecution}
          </StatusPill>
          <StatusPill tone="orange">{result.readiness.status}</StatusPill>
        </div>
        <p className={styles.hint}>
          IAM {result.disclosures.iam} · PRODUCT PERSISTENCE{" "}
          {result.disclosures.productPersistence} · DELIVERY{" "}
          {result.disclosures.delivery} · CUTOVER {result.disclosures.cutover} ·
          RUN READY = {String(result.readiness.runReady)} · PRODUCT READY ={" "}
          {String(result.readiness.productReady)}
        </p>
      </section>

      <div className={styles.actions}>
        <Link className={styles.navLink} href="/studio/projects/new">
          Créer un autre projet
        </Link>
      </div>
      </div>
    </Card>
  );
}

function MissingProject({
  projectId,
  result,
}: {
  projectId: string;
  result: GetProjectFailure;
}) {
  return (
    <Card variant="flush" className={styles.missingCard}>
      <div data-testid="project-workspace-missing">
      <div>
        <h2>Projet introuvable dans ce processus</h2>
        <p className={styles.hint}>
          L’identifiant demandé n’est pas disponible dans l’état process-local
          courant. Un redémarrage ou hot reload peut avoir effacé le Project et
          son LPS.
        </p>
      </div>
      <dl className={styles.definitionGrid}>
        <div className={styles.definitionItem}>
          <dt>Project ID demandé</dt>
          <dd className={styles.valueCode}>{projectId}</dd>
        </div>
        <div className={styles.definitionItem}>
          <dt>Code</dt>
          <dd>{result.error.code}</dd>
        </div>
        <div className={styles.definitionItem}>
          <dt>Message</dt>
          <dd>{result.error.message}</dd>
        </div>
        <div className={styles.definitionItem}>
          <dt>Runtime</dt>
          <dd>
            {result.disclosures.runtimeMode} · {result.disclosures.persistence}
          </dd>
        </div>
      </dl>
      <div className={styles.actions}>
        <CtaButton href="/studio/projects/new" variant="secondary">
          Retour à la création
        </CtaButton>
      </div>
      </div>
    </Card>
  );
}

export function ProjectWorkspaceView({
  projectId,
  result,
}: {
  projectId: string;
  result: GetProjectResult;
}) {
  if (!result.ok) {
    return <MissingProject projectId={projectId} result={result} />;
  }
  return <ProjectProjection result={result} />;
}
```

### `projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css`

```css
.page {
  display: grid;
  gap: var(--sfia-space-lg);
  padding-bottom: var(--sfia-space-xl);
}

.workspaceCard,
.missingCard {
  display: grid;
  gap: var(--sfia-space-lg);
}

.workspaceHeader,
.actions,
.metaRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sfia-space-md);
  flex-wrap: wrap;
}

.pillGroup {
  display: flex;
  gap: var(--sfia-space-xs);
  flex-wrap: wrap;
}

.workspaceCard h2,
.missingCard h2 {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 20px;
  line-height: 1.3;
}

.hint,
.empty {
  margin: 0;
  color: var(--sfia-muted);
  font-size: 13px;
  line-height: var(--sfia-line-body);
}

.section {
  display: grid;
  gap: var(--sfia-space-md);
}

.section h3 {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 15px;
}

.definitionGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  background: var(--sfia-border-soft);
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-sm);
  overflow: hidden;
}

.definitionItem {
  min-width: 0;
  background: #fff;
  padding: 11px 12px;
}

.definitionItem dt {
  color: var(--sfia-muted);
  font-size: 11px;
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.definitionItem dd {
  margin: 4px 0 0;
  color: var(--sfia-ink);
  font-size: 13px;
  line-height: var(--sfia-line-body);
  overflow-wrap: anywhere;
}

.valueCode {
  color: var(--sfia-ink);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  overflow-wrap: anywhere;
}

.constraintList {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 5px;
  color: var(--sfia-ink);
  font-size: 13px;
}

.truthBox {
  display: grid;
  gap: var(--sfia-space-sm);
  padding: 14px;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-sm);
  background: var(--sfia-surface);
}

.actions {
  justify-content: flex-end;
  padding-top: var(--sfia-space-xs);
  border-top: 1px solid var(--sfia-border-soft);
}

.missingCard {
  border-left: 4px solid var(--sfia-orange);
}

.navLink {
  color: var(--sfia-blue);
  font-size: 13px;
  font-weight: 650;
  text-decoration: none;
}

.navLink:focus-visible {
  outline: 3px solid var(--sfia-blue-soft);
  outline-offset: 2px;
}
```

### `projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx`

```tsx
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import axe from "axe-core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { StudioShell } from "@/components/shell/StudioShell";
import { ProjectWorkspaceClient } from "@/features/vertical-slice-ui/ProjectWorkspaceClient";
import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
import {
  isStudioProjectWorkspaceRoute,
  type StudioShellRoute,
} from "@/lib/navigation";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/lib/vertical-slice-runtime/disclosures", () => ({
  RUNTIME_DISCLOSURES: {
    runtimeMode: "LOCAL_PROCESS",
    persistence: "NOT_GUARANTEED",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "NOT_SELECTED",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true,
    restartMayLoseState: true,
    messages: [],
  },
  RUNTIME_READINESS_NOT_READY: {
    status: "NOT_READY",
    hard: "OPEN",
    tA6: "INCOMPLETE",
    iam: "NOT_SELECTED",
    productPersistence: "NOT_SELECTED",
    realAgentExecution: "DISABLED",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    runReady: false,
    productReady: false,
  },
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const SUCCESS_RESULT = {
  ok: true as const,
  project: {
    projectId: "prj:v2-a3-1",
    name: "Projet V2-A3",
    shortReference: "V2-A3",
    objective: "Consulter le workspace projet.",
    contextSummary: "Contexte local borné.",
    criticality: "STANDARD" as const,
    constraints: ["Sans IAM", "Sans IAM"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:v2-a3",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:v2-a3-1",
    version: 1 as const,
    createdAt: "2026-07-30T09:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "NOT_GUARANTEED" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    messages: [] as const,
  },
};

const MISSING_RESULT = {
  ok: false as const,
  error: {
    code: "PROJECT_NOT_FOUND" as const,
    message: "Project not found in the local process.",
    retryable: false,
  },
  disclosures: SUCCESS_RESULT.disclosures,
};

beforeEach(() => {
  getProjectRuntimeActionMock.mockReset();
});

afterEach(() => {
  cleanup();
});

describe("V2-A3 Project Workspace UI", () => {
  it("projects Project, LPS, doctrine and runtime truths without dashboard claims", () => {
    render(
      <ProjectWorkspaceView projectId="prj:v2-a3-1" result={SUCCESS_RESULT} />,
    );

    expect(
      screen.getByRole("heading", { name: "Espace de travail projet" }),
    ).toBeVisible();
    expect(screen.getByTestId("project-workspace-projection")).toBeVisible();
    expect(screen.getByText("prj:v2-a3-1")).toBeVisible();
    expect(screen.getByText("Projet V2-A3")).toBeVisible();
    expect(screen.getByText("pkg:studio-v3-oa")).toBeVisible();
    expect(screen.getByText("lps:v2-a3-1")).toBeVisible();
    expect(screen.getAllByText("REAL_LOCAL_CORE").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
    expect(screen.getAllByText("LOCAL_PROCESS").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
    expect(screen.getByText(/AGENT DISABLED/)).toBeVisible();
    expect(
      within(screen.getByLabelText("Contraintes")).getAllByText("Sans IAM"),
    ).toHaveLength(2);
    expect(
      screen.getByRole("link", { name: "Créer un autre projet" }),
    ).toHaveAttribute("href", "/studio/projects/new");
    expect(screen.queryByText(/\brecommendation engine\b/i)).toBeNull();
    expect(screen.queryByText(/\borchestrateur\b/i)).toBeNull();
    expect(screen.queryByRole("heading", { name: /dashboard/i })).toBeNull();
  });

  it("loads the workspace through getProjectRuntimeAction", async () => {
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS_RESULT);
    render(<ProjectWorkspaceClient projectId="prj:v2-a3-1" />);

    expect(screen.getByTestId("project-workspace-loading")).toBeVisible();
    expect(
      await screen.findByTestId("project-workspace-projection"),
    ).toBeVisible();
    expect(getProjectRuntimeActionMock).toHaveBeenCalledWith("prj:v2-a3-1");
    expect(screen.getByText("Projet V2-A3")).toBeVisible();
  });

  it("renders a bounded missing state for unknown process-local projects", () => {
    render(
      <ProjectWorkspaceView projectId="prj:missing" result={MISSING_RESULT} />,
    );

    expect(screen.getByTestId("project-workspace-missing")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: "Projet introuvable dans ce processus",
      }),
    ).toBeVisible();
    expect(screen.getByText("prj:missing")).toBeVisible();
    expect(screen.getByText("PROJECT_NOT_FOUND")).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Retour à la création" }),
    ).toHaveAttribute("href", "/studio/projects/new");
  });

  it("keeps workspace disclosures and shell defaults for V2-A3", async () => {
    const route = "/studio/projects/prj:v2-a3-1" as StudioShellRoute;
    expect(isStudioProjectWorkspaceRoute(route)).toBe(true);
    expect(isStudioProjectWorkspaceRoute("/studio/projects/new")).toBe(false);

    render(
      <StudioShell
        variant="flush"
        activeRoute={route}
        title="Projet V2-A3"
        showTabs={false}
        primaryAction={null}
        pills={[{ label: "LOCAL_PROCESS", tone: "orange" }]}
        copilot={{
          variant: "flush",
          name: "Nora · Project Copilot",
          subtitle: "Lecture seule · aucune autorité",
          avatarTone: "purple",
          levelPill: "Aucune décision",
          summary: "Lecture seule.",
          watchLabel: "GARDE-FOUS",
          watchItems: [
            { label: "État process-local volatil", dotColor: "#faa629" },
          ],
          riskTitle: "MODE LOCAL UNIQUEMENT",
          riskText: "Aucune persistance produit.",
        }}
      >
        <RuntimeDisclosureBanner surface="workspace" />
        <ProjectWorkspaceView projectId="prj:v2-a3-1" result={SUCCESS_RESULT} />
      </StudioShell>,
    );

    expect(screen.getByText(/consulte un Project et son LPS/i)).toBeVisible();
    expect(screen.queryByTestId("topbar-tabs")).toBeNull();
    expect(
      within(screen.getByTestId("topbar")).queryByRole("link", {
        name: /Nouvelle demande/i,
      }),
    ).toBeNull();

    const results = await axe.run(document.body, {
      rules: {
        "color-contrast": { enabled: false },
        region: { enabled: false },
      },
    });
    expect(results.violations).toEqual([]);
    await waitFor(() => expect(true).toBe(true));
  });
});
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a3-project-workspace-ui/README.md`

```markdown
# SFIA Studio V2-A3 — Project Workspace UI

## Cycle record

| Field | Value |
|---|---|
| Date / time / zone | 2026-07-30 11:20 CEST (+0200) |
| Cycle | 8 — Delivery / implementation UI |
| Profile | Standard |
| Control depth | Standard reinforced |
| Typology | EVOL |
| Project branch | `delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui` |
| Base | `origin/main` at `d0e498ec1636122246e0de0103c50fb3ccb9fdd7` |
| Local status | Implemented locally; not pushed; not PR'd |

## Gate consumed

`GO CYCLE V2-A3 PROJECT WORKSPACE UI`

This gate authorizes a bounded Project Workspace UI on top of the integrated
V2-A2 Create Project foundation and the unchanged V2-A1 runtime / V1 core.
It does not authorize a project-branch push, pull request, merge, Figma write,
product delivery, or cutover.

## Morris decisions reused

- D-VS-01: retain and adapt `StudioShell`; use `/studio/*`.
- D-VS-02: OA business state remains in memory.
- D-VS-03: no fixtures, harness, or browser storage in the happy path.
- D-VS-04: Project/T-A0/T-A1 precede recommendation, decision, and dashboard.
- D-V2-01: server-only application runtime exposed by Server Actions.
- D-V2-02: process-local singleton.
- D-V2-04: `/studio/projects/*` namespace.
- D-V2-05: runtime disclosures are mandatory.

Not selected: IAM, product persistence, real agent execution, delivery,
cutover, dashboard, recommendation engine. HARD remains OPEN and T-A6 remains
INCOMPLETE.

## Delivered architecture

```text
/studio/projects/new
  CreateProjectForm success → link to /studio/projects/[id]

/studio/projects/[id]
  StudioShell (flush; tabs hidden; historical primary action hidden)
    RuntimeDisclosureBanner (Server Component, surface=workspace)
      → vertical-slice-runtime/disclosures
    ProjectWorkspaceClient (Client Component)
      → getProjectRuntimeAction (Server Action)
        → RuntimeApplicationService V2-A1
          → LocalProjectFacade V1
            → getProjectOverview (Project + Living Project State)
      ← ProjectWorkspaceView serializable local projection
```

The client loader uses the same Server Action entrypoint as Create Project so the
process-local V2-A1 singleton remains reachable without changing V1/V2-A1.

No API route, `fetch`, browser storage, UI business cache, D1 action, fixture,
harness, agent, recommendation, decision, or dashboard is involved.

## Route and components

- route: `/studio/projects/[id]`;
- `ProjectWorkspaceClient.tsx`: client loader via `getProjectRuntimeAction`;
- `ProjectWorkspaceView.tsx`: bounded Project / doctrine / LPS / runtime truth
  projection, plus process-local missing state;
- `project-workspace.module.css`: bounded styles using existing `--sfia-*`
  tokens;
- `RuntimeDisclosureBanner`: optional `surface="workspace"` copy;
- Create Project success: CTA `Ouvrir l’espace de travail`;
- `StudioShellRoute` extended with `/studio/projects/${string}` without adding
  a dedicated rail entry (workspace remains a context view).

## Validation

- UI workspace tests;
- V2-A2 regression (create → workspace link);
- runtime import boundaries including `/studio/projects/[id]`;
- typecheck / lint / build;
- `git diff --check`.

## Anti-claims

This lot does not claim PRODUCT READY, RUN READY, HARD CLOSED, T-A6 COMPLETE,
authenticated Morris identity, durable product persistence, live agent
execution, delivery authorization, or cutover authorization.

## Remaining debt and next gate

- no dedicated V2-A3 Figma frame;
- responsive 390 px outside this lot;
- process-local volatility remains disclosed;
- non-blocking `StudioShellRoute` → `StudioRoute` cast remains.

Candidate next decision (not automatic): PR readiness for V2-A3.
```

## Contenu complet — fichiers modifiés (état final + diff utile)

### `projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts` (état final)

```ts
import "./serverGuard";
import {
  createRuntimeApplicationService,
  type RuntimeApplicationService,
  type RuntimeApplicationServiceOptions,
} from "./service";

/**
 * D-V2-02: process-local singleton holder.
 * Business state lives in the underlying V1 in-memory stores for this process only.
 * Not safe across serverless multi-instance deployments — disclosures say so.
 *
 * Anchored on `globalThis` so Next.js route/chunk graphs that reload this module
 * still share one process-local instance (create on /new → get on /[id]).
 * This is not durable persistence and not a cross-process store.
 */
const RUNTIME_GLOBAL_KEY = "__SFIA_V2_RUNTIME_APPLICATION_SERVICE__" as const;

type ProcessLocalRuntimeSlot = {
  service: RuntimeApplicationService | null;
  options: RuntimeApplicationServiceOptions | undefined;
};

function getProcessLocalRuntimeSlot(): ProcessLocalRuntimeSlot {
  const g = globalThis as typeof globalThis & {
    [RUNTIME_GLOBAL_KEY]?: ProcessLocalRuntimeSlot;
  };
  if (!g[RUNTIME_GLOBAL_KEY]) {
    g[RUNTIME_GLOBAL_KEY] = { service: null, options: undefined };
  }
  return g[RUNTIME_GLOBAL_KEY];
}

function envAuditMode(): RuntimeApplicationServiceOptions["auditMode"] {
  const raw = process.env.SFIA_V2_RUNTIME_AUDIT?.trim().toLowerCase();
  if (raw === "memory" || raw === "sqlite" || raw === "noop") return raw;
  return "noop";
}

function defaultSingletonOptions(): RuntimeApplicationServiceOptions {
  return {
    auditMode: envAuditMode(),
    nowIso: process.env.SFIA_V2_RUNTIME_NOW_ISO || undefined,
  };
}

/**
 * Returns the process-local RuntimeApplicationService, creating it once.
 * Optional `options` apply only on first creation (or after test reset).
 */
export function getRuntimeApplicationService(
  options?: RuntimeApplicationServiceOptions,
): RuntimeApplicationService {
  const slot = getProcessLocalRuntimeSlot();
  if (!slot.service) {
    slot.options = options ?? defaultSingletonOptions();
    slot.service = createRuntimeApplicationService(slot.options);
  }
  return slot.service;
}

export function isRuntimeApplicationServiceInitialized(): boolean {
  return getProcessLocalRuntimeSlot().service !== null;
}

/**
 * Test-only reset. Throws outside test / explicit allow flag.
 */
export function resetRuntimeApplicationServiceForTests(): void {
  const allowed =
    process.env.NODE_ENV === "test" ||
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET === "1";
  if (!allowed) {
    throw new Error(
      "resetRuntimeApplicationServiceForTests is only allowed in test environments.",
    );
  }
  const slot = getProcessLocalRuntimeSlot();
  slot.service = null;
  slot.options = undefined;
}
```

### `projects/sfia-studio/app/lib/navigation.ts` (état final)

```ts
export type StudioRoute =
  | "/synthese"
  | "/nouvelle-demande"
  | "/cycle-actif"
  | "/decision";

/**
 * Shell-level routes include the real Studio namespace while preserving the
 * legacy POC union consumed exhaustively by vertical-slice/mapping.ts.
 * Dynamic project workspace routes are typed but not added to the rail.
 */
export type StudioProjectWorkspaceRoute = `/studio/projects/${string}`;

export type StudioShellRoute =
  | StudioRoute
  | "/studio/projects/new"
  | StudioProjectWorkspaceRoute;

export function isStudioProjectWorkspaceRoute(
  route: StudioShellRoute,
): boolean {
  return (
    route.startsWith("/studio/projects/") && route !== "/studio/projects/new"
  );
}

export interface NavItem {
  id: string;
  route: StudioShellRoute;
  label: string;
  railIcon: string;
  railKey: "home" | "plus" | "grid" | "diamond" | "project" | "gear";
}

export interface TabItem {
  id: string;
  route?: StudioRoute;
  label: string;
  disabled?: boolean;
  simulated?: boolean;
}

export const STUDIO_ROUTES: NavItem[] = [
  {
    id: "synthese",
    route: "/synthese",
    label: "Vue synthèse",
    railIcon: "⌂",
    railKey: "home",
  },
  {
    id: "nouvelle-demande",
    route: "/nouvelle-demande",
    label: "Nouvelle demande",
    railIcon: "＋",
    railKey: "plus",
  },
  {
    id: "studio-create-project",
    route: "/studio/projects/new",
    label: "Créer un projet Studio",
    railIcon: "◆",
    railKey: "project",
  },
  {
    id: "cycle-actif",
    route: "/cycle-actif",
    label: "Cycle actif",
    railIcon: "◫",
    railKey: "grid",
  },
  {
    id: "decision",
    route: "/decision",
    label: "Décision Morris",
    railIcon: "◇",
    railKey: "diamond",
  },
];

export const FLUSH_TABS: TabItem[] = [
  { id: "synthese", route: "/synthese", label: "Synthèse" },
  { id: "demande", route: "/nouvelle-demande", label: "Demande" },
  { id: "cycle", route: "/cycle-actif", label: "Cycle actif" },
  { id: "decisions", route: "/decision", label: "Décisions" },
  {
    id: "preuves",
    label: "Preuves",
    disabled: true,
    simulated: true,
  },
];

export const SIMULATION_TITLE = "Simulation — aucune action Git réelle";

export function routeForTab(tabId: string): StudioRoute | undefined {
  return FLUSH_TABS.find((t) => t.id === tabId)?.route;
}

export function isActiveRoute(
  activeRoute: StudioShellRoute,
  route: StudioShellRoute,
): boolean {
  return activeRoute === route;
}
```

### `projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx` (état final)

```tsx
import { Card } from "@/components/ui/Card";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  RUNTIME_DISCLOSURES,
  RUNTIME_READINESS_NOT_READY,
} from "@/lib/vertical-slice-runtime/disclosures";
import styles from "./create-project.module.css";

/**
 * Server component: the disclosure contract is read directly from V2-A1.
 * It must remain visible before and after the client form submits.
 */
export function RuntimeDisclosureBanner({
  surface = "create",
}: {
  surface?: "create" | "workspace";
} = {}) {
  const intro =
    surface === "workspace"
      ? "Cette interface consulte un Project et son LPS dans le processus Node local uniquement."
      : "Cette interface crée un Project et son LPS dans le processus Node local uniquement.";

  return (
    <Card variant="flush" className={styles.disclosure}>
      <div className={styles.disclosureHeader}>
        <div>
          <h2>Mode local borné</h2>
          <p>{intro}</p>
        </div>
        <div className={styles.pillGroup} aria-label="Statuts runtime">
          <StatusPill tone="orangeFlush">
            {RUNTIME_DISCLOSURES.runtimeMode}
          </StatusPill>
          <StatusPill tone="muted">
            {RUNTIME_DISCLOSURES.persistence}
          </StatusPill>
          <StatusPill tone="muted">
            AGENT {RUNTIME_DISCLOSURES.agentExecution}
          </StatusPill>
          <StatusPill tone="orange">
            {RUNTIME_READINESS_NOT_READY.status}
          </StatusPill>
        </div>
      </div>

      <ul className={styles.disclosureList}>
        <li>
          État métier volatil : un redémarrage ou hot reload peut perdre les
          données.
        </li>
        <li>IAM {RUNTIME_DISCLOSURES.iam}.</li>
        <li>
          PRODUCT PERSISTENCE {RUNTIME_DISCLOSURES.productPersistence}.
        </li>
        <li>DELIVERY {RUNTIME_DISCLOSURES.delivery}.</li>
        <li>CUTOVER {RUNTIME_DISCLOSURES.cutover}.</li>
        <li>
          HARD {RUNTIME_READINESS_NOT_READY.hard} · T-A6{" "}
          {RUNTIME_READINESS_NOT_READY.tA6} · RUN READY = false.
        </li>
      </ul>
    </Card>
  );
}
```

### `CreateProjectForm.tsx` — section `ProjectCreationResult` (inclut CTA workspace)

```tsx
function ProjectCreationResult({
  result,
  onReset,
}: {
  result: RuntimeSuccess;
  onReset: () => void;
}) {
  return (
    <Card variant="flush" className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <div>
          <h2>Projet créé localement</h2>
          <p className={styles.resultHint}>
            Projection réelle du core V1 — aucune fixture et aucune
            persistance produit.
          </p>
        </div>
        <div className={styles.pillGroup}>
          <StatusPill tone="green">REAL_LOCAL_CORE</StatusPill>
          <StatusPill tone="orange">
            {result.readiness.status}
          </StatusPill>
        </div>
      </div>

      <section className={styles.resultSection} aria-labelledby="project-data">
        <h3 id="project-data">Project</h3>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Project ID</dt>
            <dd className={styles.valueCode}>{result.projectId}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Nom</dt>
            <dd>{result.project.name}</dd>
          </div>
          {result.project.shortReference ? (
            <div className={styles.definitionItem}>
              <dt>Référence courte</dt>
              <dd>{result.project.shortReference}</dd>
            </div>
          ) : null}
          <div className={styles.definitionItem}>
            <dt>Criticité perçue</dt>
            <dd>{result.project.criticality}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Objectif</dt>
            <dd>{result.project.objective}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Contexte résumé</dt>
            <dd>{result.project.contextSummary}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Source</dt>
            <dd>{result.project.source}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Fixture</dt>
            <dd>{String(result.project.fixture)}</dd>
          </div>
        </dl>
        {result.project.constraints.length > 0 ? (
          <ul className={styles.constraintList} aria-label="Contraintes">
            {result.project.constraints.map((constraint, index) => (
              <li key={`${index}:${constraint}`}>{constraint}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}
```

### Diff utile complet — 7 fichiers tracked modifiés

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 7eb7386..a26360c 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -53,7 +53,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
     expect(violations).toEqual([]);
   });

-  it("allows only the bounded V2-A2 UI runtime entrypoints", () => {
+  it("allows only the bounded V2 UI runtime entrypoints", () => {
     const uiRoots = [
       path.join(APP_ROOT, "app"),
       path.join(APP_ROOT, "components"),
@@ -75,6 +75,8 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {

     const allowed = new Set([
       "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/RuntimeDisclosureBanner.tsx:@/lib/vertical-slice-runtime/disclosures",
     ]);
     const normalized = imports.map((entry) => {
@@ -87,9 +89,10 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
     expect(new Set(normalized)).toEqual(allowed);
   });

-  it("keeps V2-A2 UI free of core, internal runtime, D1, fixtures, storage, network, and agents", () => {
+  it("keeps V2-A2/V2-A3 UI free of core, internal runtime, D1, fixtures, storage, network, and agents", () => {
     const roots = [
       path.join(APP_ROOT, "app/studio/projects/new"),
+      path.join(APP_ROOT, "app/studio/projects/[id]"),
       path.join(APP_ROOT, "features/vertical-slice-ui"),
     ];
     const forbidden =
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
index c2f2c1e..1f8468e 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
@@ -164,6 +164,14 @@ describe("V2-A1 RuntimeApplicationService", () => {
     expect(a).toBe(b);
     expect(isRuntimeApplicationServiceInitialized()).toBe(true);

+    const slotKey = "__SFIA_V2_RUNTIME_APPLICATION_SERVICE__";
+    const slot = (
+      globalThis as typeof globalThis & {
+        [slotKey]?: { service: unknown };
+      }
+    )[slotKey];
+    expect(slot?.service).toBe(a);
+
     const created = await a.createProject({
       ...INPUT,
       idempotencyKey: "idem:singleton",
@@ -175,6 +183,7 @@ describe("V2-A1 RuntimeApplicationService", () => {

     resetRuntimeApplicationServiceForTests();
     expect(isRuntimeApplicationServiceInitialized()).toBe(false);
+    expect(slot?.service).toBeNull();
   });

   it("defaults audit mode to noop (D-V2-03)", async () => {
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
index e143269..506a0fb 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
@@ -371,7 +371,9 @@ describe("V2-A2 Create Project UI", () => {
     expect(screen.getByText("lps:v2-a2-1")).toBeVisible();
     expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
     expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
-    expect(screen.queryByRole("link", { name: /projet/i })).toBeNull();
+    expect(
+      screen.getByRole("link", { name: "Ouvrir l’espace de travail" }),
+    ).toHaveAttribute("href", "/studio/projects/prj%3Av2-a2-1");
     expect(screen.queryByText(/recommendation|dashboard/i)).toBeNull();

     await user.click(
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
index c42318a..acb8a14 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
@@ -248,6 +248,12 @@ function ProjectCreationResult({
         <CtaButton type="button" variant="secondary" onClick={onReset}>
           Créer un autre projet
         </CtaButton>
+        <CtaButton
+          href={`/studio/projects/${encodeURIComponent(result.projectId)}`}
+          data-testid="open-project-workspace"
+        >
+          Ouvrir l’espace de travail
+        </CtaButton>
       </div>
     </Card>
   );
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
index 3ebd5ee..8b26afc 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
@@ -10,16 +10,22 @@ import styles from "./create-project.module.css";
  * Server component: the disclosure contract is read directly from V2-A1.
  * It must remain visible before and after the client form submits.
  */
-export function RuntimeDisclosureBanner() {
+export function RuntimeDisclosureBanner({
+  surface = "create",
+}: {
+  surface?: "create" | "workspace";
+} = {}) {
+  const intro =
+    surface === "workspace"
+      ? "Cette interface consulte un Project et son LPS dans le processus Node local uniquement."
+      : "Cette interface crée un Project et son LPS dans le processus Node local uniquement.";
+
   return (
     <Card variant="flush" className={styles.disclosure}>
       <div className={styles.disclosureHeader}>
         <div>
           <h2>Mode local borné</h2>
-          <p>
-            Cette interface crée un Project et son LPS dans le processus Node
-            local uniquement.
-          </p>
+          <p>{intro}</p>
         </div>
         <div className={styles.pillGroup} aria-label="Statuts runtime">
           <StatusPill tone="orangeFlush">
diff --git a/projects/sfia-studio/app/lib/navigation.ts b/projects/sfia-studio/app/lib/navigation.ts
index 0d93dac..6677be6 100644
--- a/projects/sfia-studio/app/lib/navigation.ts
+++ b/projects/sfia-studio/app/lib/navigation.ts
@@ -7,8 +7,22 @@ export type StudioRoute =
 /**
  * Shell-level routes include the real Studio namespace while preserving the
  * legacy POC union consumed exhaustively by vertical-slice/mapping.ts.
+ * Dynamic project workspace routes are typed but not added to the rail.
  */
-export type StudioShellRoute = StudioRoute | "/studio/projects/new";
+export type StudioProjectWorkspaceRoute = `/studio/projects/${string}`;
+
+export type StudioShellRoute =
+  | StudioRoute
+  | "/studio/projects/new"
+  | StudioProjectWorkspaceRoute;
+
+export function isStudioProjectWorkspaceRoute(
+  route: StudioShellRoute,
+): boolean {
+  return (
+    route.startsWith("/studio/projects/") && route !== "/studio/projects/new"
+  );
+}

 export interface NavItem {
   id: string;
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
index 6901273..6725f19 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
@@ -9,9 +9,27 @@ import {
  * D-V2-02: process-local singleton holder.
  * Business state lives in the underlying V1 in-memory stores for this process only.
  * Not safe across serverless multi-instance deployments — disclosures say so.
+ *
+ * Anchored on `globalThis` so Next.js route/chunk graphs that reload this module
+ * still share one process-local instance (create on /new → get on /[id]).
+ * This is not durable persistence and not a cross-process store.
  */
-let processLocalRuntime: RuntimeApplicationService | null = null;
-let processLocalOptions: RuntimeApplicationServiceOptions | undefined;
+const RUNTIME_GLOBAL_KEY = "__SFIA_V2_RUNTIME_APPLICATION_SERVICE__" as const;
+
+type ProcessLocalRuntimeSlot = {
+  service: RuntimeApplicationService | null;
+  options: RuntimeApplicationServiceOptions | undefined;
+};
+
+function getProcessLocalRuntimeSlot(): ProcessLocalRuntimeSlot {
+  const g = globalThis as typeof globalThis & {
+    [RUNTIME_GLOBAL_KEY]?: ProcessLocalRuntimeSlot;
+  };
+  if (!g[RUNTIME_GLOBAL_KEY]) {
+    g[RUNTIME_GLOBAL_KEY] = { service: null, options: undefined };
+  }
+  return g[RUNTIME_GLOBAL_KEY];
+}

 function envAuditMode(): RuntimeApplicationServiceOptions["auditMode"] {
   const raw = process.env.SFIA_V2_RUNTIME_AUDIT?.trim().toLowerCase();
@@ -33,15 +51,16 @@ function defaultSingletonOptions(): RuntimeApplicationServiceOptions {
 export function getRuntimeApplicationService(
   options?: RuntimeApplicationServiceOptions,
 ): RuntimeApplicationService {
-  if (!processLocalRuntime) {
-    processLocalOptions = options ?? defaultSingletonOptions();
-    processLocalRuntime = createRuntimeApplicationService(processLocalOptions);
+  const slot = getProcessLocalRuntimeSlot();
+  if (!slot.service) {
+    slot.options = options ?? defaultSingletonOptions();
+    slot.service = createRuntimeApplicationService(slot.options);
   }
-  return processLocalRuntime;
+  return slot.service;
 }

 export function isRuntimeApplicationServiceInitialized(): boolean {
-  return processLocalRuntime !== null;
+  return getProcessLocalRuntimeSlot().service !== null;
 }

 /**
@@ -56,6 +75,7 @@ export function resetRuntimeApplicationServiceForTests(): void {
       "resetRuntimeApplicationServiceForTests is only allowed in test environments.",
     );
   }
-  processLocalRuntime = null;
-  processLocalOptions = undefined;
+  const slot = getProcessLocalRuntimeSlot();
+  slot.service = null;
+  slot.options = undefined;
 }
```
## Review Handoff Git

| Champ | Valeur |
|-------|--------|
| Mode | publish-in-cycle |
| Branche | sfia/review-handoff |
| Fichier | sfia-review-handoff/latest-chatgpt-review.md |
| Message | docs(review-handoff): publish SFIA Studio V2-A3 PR readiness review |
| Push handoff L3 | autorisé |
| Commit/push projet | interdit |

## Verdict unique

**TECHNICALLY READY — LOCAL COMMITS REQUIRED — MORRIS DECISION REQUIRED**

## Instruction ChatGPT

Lire depuis Git la branche sfia/review-handoff et le fichier sfia-review-handoff/latest-chatgpt-review.md avant toute réponse à Morris. Vérifier cycle, gate, branche, HEAD/base, working tree, fichiers créés/modifiés, correctif singleton, tests, preuves runtime, draft PR, réserves, absence de commit/push projet et verdict TECHNICALLY READY — LOCAL COMMITS REQUIRED — MORRIS DECISION REQUIRED.
