# SFIA Studio Next — ML4C Avenant Régularisation Preuves PR #678 — Review Pack FULL

**Date / heure :** 2026-11-15 ~21:00 CET  
**Autorité :** GO Morris — avenant final au contrat d'exécution PR #678 (15/11/2026)  
**Type :** DELIVERY CORRECTIF + QA + PR READINESS · PATCH / **NO RELEASE**  
**Profil :** STANDARD · Review Pack **FULL** · Handoff **required / publish-in-cycle**  
**PR :** https://github.com/mcleland147/sfia-workspace/pull/678  
**Branche :** `docs/next-ml4c-closure-20261115`

---

## 0. Verdict

**ML4C NAVIGATION VERIFIED — PR #678 READY FOR MORRIS MERGE GO**

| Condition | État |
| --- | --- |
| Test discriminant concurrence post-`ready` | **PASS** (local + CI) |
| Isolation inter-projets A→B | **PASS** (unit + e2e) |
| Contrats G4 B1–B4 / surfaces / authority | **préservés** |
| Documentation delivery-history + as-built G4 | **synchronisée** |
| Review Pack FULL | **ce document** |
| Push FF PR #678 | **vérifié** `bb21d24c` |
| CI verte HEAD final | **SUCCESS** [43755913981](https://github.com/mcleland147/sfia-workspace/actions/runs/43755913981) |
| Required gates | Next **PASS** · Studio **PASS** [43755913982](https://github.com/mcleland147/sfia-workspace/actions/runs/43755913982) |
| MERGEABLE / CLEAN | **oui** |
| Handoff L3 | **REMOTE VERIFIED** (commit suivant pack) |
| Merge #678 | **NON** — gate Morris restant |

ML4D NOT STARTED · Gate C OPEN · STABLE NOT AVAILABLE · NO RELEASE / NOT ADOPTED.

---

## 1. Git Truth Check

### Références distantes attendues vs observées

| Réf | Attendu (mandat / cycle) | Observé |
| --- | --- | --- |
| `origin/main` | `05e71a7166562211b1c8c168a40dcd35e4f8c8a3` | **identique** |
| Branche cible | `docs/next-ml4c-closure-20261115` | **active** |
| HEAD pré-avenant | `69aa8b1d477fd3add7ca038815c7157b9b467f7e` | confirmé (parent de la régularisation) |
| CI pré-avenant | [43749279172](https://github.com/mcleland147/sfia-workspace/actions/runs/43749279172) SUCCESS | confirmé |
| Handoff pré-avenant | `sfia/review-handoff@384da790` blob `b291c635…` | confirmé |
| **HEAD final PR #678** | — | **`bb21d24c3f6b096a268b9b03aa8b1841b98ee8fa`** |
| Tree web final | — | **`3f34d2ad4a4340fc2fdf6f19ac0b15858441e39a`** |
| Tree web @69aa8b1d | — | `787537cb344cc2c13dc3cd20c43e8572d52249af` |
| Tree repo HEAD | — | `b9e451cc3d79f40e95372e9576dfd325128ffb87` |

### Worktree / statut local

| Item | Valeur |
| --- | --- |
| Worktree isolé | `/Users/morris/Projects/sfia-workspace-next-ml4c-closure-678-navfix` |
| Branche | `docs/next-ml4c-closure-20261115` == `origin/…` |
| Staged / unstaged / untracked produit | **propre** (seul `.tmp-sfia-review/` local pour pack) |
| Produit WT frère | `fix/next-semantic-intent-convergence-20261112@11f7077e` (hors portée) |

### Commits sur PR #678 (`main..HEAD`)

```
bb21d24c docs(next): sync ML4C nav delivery-history with verified CI
c2d9b24f fix(next): scope surface nav intent and harden load-race proofs
69aa8b1d chore(next): strip trailing whitespace in ML4C closure docs
1a657684 fix(next): preserve project surface intent across async load
968ea252 docs(next): make ML4C roadmap closure effective at documentary merge gate
d7f7cb70 docs(next): close ML4C with reserved evidence and governance trace
```

### Diffstat avenant (`69aa8b1d..bb21d24c`) sous `projects/sfia-studio-next/`

```
 .../as-built-g4-correctifs-b1-b4-2026-11-08.md     |  7 ++
 .../construction/delivery-history.md               | 17 +++--
 .../web/src/app/projects/[projectId]/page.tsx      | 31 +++++---
 .../web/src/components/figma/ProjectChrome.tsx     | 11 ++-
 .../web/src/components/shell/StudioShell.tsx       | 12 ++--
 .../web/src/components/shell/studio-rail.ts        | 37 +++++++---
 .../tests/e2e/project-surface-nav-intent.spec.ts   | 83 +++++++++++++++++++++-
 .../web/tests/unit/studio-rail.test.ts             | 36 ++++++++--
 8 files changed, 199 insertions(+), 35 deletions(-)
```

---

## 2. Écart 1 — Preuve de concurrence (diagnostic + correctif)

### Problème ChatGPT

Après libération du GET projet retardé, les assertions URL pouvaient réussir **avant** la fin du traitement React de `load()` (sync surface / `replace`). Le simple achèvement HTTP ne prouve pas la fin de synchronisation.

### Correctif

1. **Signal produit observable** (instrumentation minimale, sans autorité navigation) :
   - état React `projectLoadState: "loading" | "ready"` sur `ProjectPage` ;
   - exposé via `ProjectChrome` : `data-testid="project-load-state"` + `data-project-load-state` + `data-project-surface`.
2. `setProjectLoadState("ready")` **uniquement après** lecture URL live, `resolveProjectLoadSurface`, éventuel `syncSurfaceUrl`, et reprise pilotage non-bloquante — donc **après** la sync surface du load.
3. Annulation `cancelled` sur changement `projectId` pour éviter un load obsolète qui marque `ready` trop tard.
4. E2E : clic Pilotage pendant `loading` → `release()` → attendre `ready` → assert URL `surface=pilotage` + `data-project-surface=pilotage`.
5. **Aucun sleep / timeout arbitraire** comme substitut de preuve.

### Preuve discriminante (ancien vs nouveau)

| Comportement | Sans intent + sans wait `ready` | Avec intent project-scoped + wait `ready` |
| --- | --- | --- |
| Clic Pilotage pendant GET hold | `load()` peut `replace(?surface=travail)` | Intent + resolve → Pilotage |
| Assert juste après HTTP | Peut passer avant sync React | Interdit — gate sur `ready` |
| Unit oracle | `resolveProjectLoadSurface({raw:null, pending:null})` → `travail` | `pending:"pilotage"` → `pilotage` |

Oracle G4 B1–B4 (`g4-b1-b4-correctifs.spec.ts`) **inchangé**.

---

## 3. Écart 2 — Isolation des intentions entre projets

### Qualification

`projectSurfaceNavIntent` était une variable de module **globale** (`StudioSurface | null`). Risque confirmé : Pilotage noté pour projet A pouvait être lu par `peek()` pendant `load()` du projet B.

### Correctif

Intent transitoire `{ projectId, surface }` :

- `noteProjectSurfaceNavIntent(projectId, surface)`
- `peekProjectSurfaceNavIntent(projectId)` — retourne `null` si autre projet
- `clearProjectSurfaceNavIntent(projectId?, matched?)` — ignore clear d’un autre projet

`StudioShell` et `selectSurface` passent le `projectId` courant. Pas de second store durable. Autorité D1–D9 / API / DB **non modifiées**.

### Scénarios couverts

| Scénario | Couverture |
| --- | --- |
| Intent Pilotage A puis ouverture B | e2e négatif + unit scope |
| Nav annulée / projectId change | `cancelled` + reset load-state |
| Changement rapide de surface | e2e rapid switches |
| Back/Forward | sync `searchParams` + clear si match |
| Refresh / deep-link | URL live gagne ; intent seulement si même projectId |
| `documentId` | inchangé dans `applyUrlDocumentState` / sync |

---

## 4. Écart 3 — Traçabilité documentaire

Entrée `DELIV-2026-11-15-ML4C-NAV-SURFACE-INTENT` mise à jour (append-only logique) :

- correctif initial `1a657684` + hygiene `69aa8b1d` + CI `43749279172` ;
- régularisation code `c2d9b24f` + trees web `787537cb` → `3f34d2ad` ;
- tests locaux UNIT 369 / PG 471 / PW 31 ;
- CI régularisation `43755023230` / Studio `43755023210` ;
- tip docs sync `bb21d24c` + CI finale `43755913981` (pack) ;
- NO RELEASE ; gate Morris restant.

As-built G4 : **Addendum 2026-11-15b** (intent scopé, load-state, e2e). D2 / UAT historique / cahier / Roadmap **non réécrits**.

---

## 5. Fichiers — contenus / diffs utiles

### 5.1 `studio-rail.ts` — intent project-scoped (extrait complet du contrat)

```typescript
type ProjectSurfaceNavIntent = { projectId: string; surface: StudioSurface };

let projectSurfaceNavIntent: ProjectSurfaceNavIntent | null = null;

export function noteProjectSurfaceNavIntent(
  projectId: string | null | undefined,
  surface: StudioSurface | null,
): void {
  if (!projectId || !surface) {
    return;
  }
  projectSurfaceNavIntent = { projectId, surface };
}

export function peekProjectSurfaceNavIntent(
  projectId: string | null | undefined,
): StudioSurface | null {
  if (!projectId || !projectSurfaceNavIntent) return null;
  if (projectSurfaceNavIntent.projectId !== projectId) return null;
  return projectSurfaceNavIntent.surface;
}

export function clearProjectSurfaceNavIntent(
  projectId?: string | null,
  matched?: StudioSurface | null,
): void {
  if (!projectSurfaceNavIntent) return;
  if (projectId != null && projectSurfaceNavIntent.projectId !== projectId) return;
  if (matched == null || projectSurfaceNavIntent.surface === matched) {
    projectSurfaceNavIntent = null;
  }
}

export function resolveProjectLoadSurface(input: {
  rawSurface: string | null | undefined;
  pendingIntent: StudioSurface | null;
}): ProjectLoadSurfaceDecision {
  const qSurface = parseStudioSurface(input.rawSurface ?? null);
  const effectiveSurface = qSurface ?? input.pendingIntent ?? "travail";
  const shouldNormalizeUrl =
    !input.rawSurface || (Boolean(input.rawSurface) && !qSurface);
  return { effectiveSurface, shouldNormalizeUrl };
}
```

Fichier complet : `projects/sfia-studio-next/web/src/components/shell/studio-rail.ts` (309 lignes) @ tree web `3f34d2ad`.

### 5.2 Diff `StudioShell.tsx` (avenant)

```diff
-                  if (surfaceKey) noteProjectSurfaceNavIntent(surfaceKey);
+                  if (projectId && surfaceKey) {
+                    noteProjectSurfaceNavIntent(projectId, surfaceKey);
+                  }
-              onClick={() => noteProjectSurfaceNavIntent("document")}
+              onClick={() => noteProjectSurfaceNavIntent(projectId, "document")}
-              onClick={() => noteProjectSurfaceNavIntent("git")}
+              onClick={() => noteProjectSurfaceNavIntent(projectId, "git")}
```

(même pattern desktop + mobile rail.)

### 5.3 Diff `page.tsx` (load + cancel + ready)

```diff
+  const [projectLoadState, setProjectLoadState] = useState<"loading" | "ready">("loading");
...
+    let cancelled = false;
+    setProjectLoadState("loading");
+    pendingSurfaceRef.current = null;
     async function load() {
       const res = await fetch(`/api/projects/${params.projectId}`);
+      if (cancelled) return;
...
-        pendingSurfaceRef.current ?? peekProjectSurfaceNavIntent();
+        pendingSurfaceRef.current ?? peekProjectSurfaceNavIntent(params.projectId);
...
-        clearProjectSurfaceNavIntent(qSurface);
+        clearProjectSurfaceNavIntent(params.projectId, qSurface);
...
+      if (!cancelled) setProjectLoadState("ready");
     }
     void load();
+    return () => { cancelled = true; };
...
+    if (qSurface && peekProjectSurfaceNavIntent(params.projectId) === qSurface) {
+      clearProjectSurfaceNavIntent(params.projectId, qSurface);
+    }
...
+      loadState={projectLoadState}
```

### 5.4 `ProjectChrome.tsx` — signal observable (complet pertinent)

```tsx
export function ProjectChrome(props: {
  projectId: string;
  surface: Surface;
  meta?: string;
  loadState?: "loading" | "ready";
  onSelectSurface: (s: Surface) => void;
  children: React.ReactNode;
}) {
  const loadState = props.loadState ?? "ready";
  return (
    <div
      className="fig-page"
      data-project-surface={props.surface}
      data-testid="project-load-state"
      data-project-load-state={loadState}
      data-project-id={props.projectId}
    >
```

### 5.5 E2E complet — `project-surface-nav-intent.spec.ts` (175 lignes)

Fichier publié intégralement sur HEAD ; sections clés :

**Concurrence post-ready :**

```typescript
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "loading",
  );
  await rail.getByTestId("nav-pilotage").click();
  deferred.release();
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "ready",
  );
  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}\\?surface=pilotage`));
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-surface",
    "pilotage",
  );
```

**Isolation A→B :**

```typescript
  const projectA = await createNamedProject("Projet NAV A");
  await page.getByTestId("studio-rail").getByTestId("nav-pilotage").click();
  // ... portfolio → create B without Pilotage click
  await expect(page).toHaveURL(new RegExp(`/projects/${projectB}\\?surface=travail`));
  await expect(page).not.toHaveURL(/surface=pilotage/);
```

### 5.6 Unit — isolation + discriminant ancien comportement

```typescript
  it("preserves pending pilotage when URL has no surface yet (race with load)", () => {
    const withoutPending = resolveProjectLoadSurface({
      rawSurface: null,
      pendingIntent: null,
    });
    expect(withoutPending.effectiveSurface).toBe("travail"); // ancien défaut

    const d = resolveProjectLoadSurface({
      rawSurface: null,
      pendingIntent: "pilotage",
    });
    expect(d.effectiveSurface).toBe("pilotage");
  });

  it("scopes transient intent to projectId (A cannot leak to B)", () => {
    noteProjectSurfaceNavIntent("proj-a", "pilotage");
    expect(peekProjectSurfaceNavIntent("proj-b")).toBeNull();
    const forB = resolveProjectLoadSurface({
      rawSurface: null,
      pendingIntent: peekProjectSurfaceNavIntent("proj-b"),
    });
    expect(forB.effectiveSurface).toBe("travail");
  });
```

### 5.7 Delivery-history (entrée régularisée)

Voir `projects/sfia-studio-next/construction/delivery-history.md` § `DELIV-2026-11-15-ML4C-NAV-SURFACE-INTENT` — champs CI / SHA / trees / tests / NO RELEASE / gate Morris.

### 5.8 As-built addendum 2026-11-15b

```markdown
### Addendum 2026-11-15b — Régularisation preuves (PR #678)

- Intent de navigation **scopé par `projectId`** (`note`/`peek`/`clear`) : une intention Pilotage sur A ne s'applique pas au load de B.
- Signal produit `data-testid=project-load-state` / `data-project-load-state=loading|ready` après sync surface de `load()`.
- E2E : concurrence attend `ready` puis URL+surface Pilotage ; test négatif isolation A→B.
- Oracle G4 B1–B4 inchangé.
```

---

## 6. Exécution locale et non-régression (résultats réels)

Lane : **DEV / E2E isolés `:3101` / PG isolé** · RECETTE non mutée · STABLE N/A · Git REAL non exercé · FAKE/BROWSER ≠ LIVE.

| Suite | Résultat |
| --- | --- |
| TypeScript `tsc --noEmit` | **PASS** |
| ESLint | **PASS** (warnings préexistants only) |
| `next build` | **PASS** |
| Vitest unit | **369 PASS** |
| Vitest PG isolé | **471 PASS** |
| Playwright ciblé nav-intent | **PASS** (concurrence + rapid + isolation) |
| Playwright suite complète | **31 PASS** |
| G4 B1–B4 oracle | **PASS** (fichier inchangé) |

Préservations vérifiées par suites existantes + e2e étendus : Travail / Pilotage / Journal / Documents / Git · Back/Forward · refresh · deep-links · documentId · rail variants · resolve authority/idempotence.

---

## 7. Commit, push, CI, readiness

### Commits avenant (FF only)

| SHA | Message |
| --- | --- |
| `c2d9b24f5db474a7a40bc13edc027582b154480b` | `fix(next): scope surface nav intent and harden load-race proofs` |
| `bb21d24c3f6b096a268b9b03aa8b1841b98ee8fa` | `docs(next): sync ML4C nav delivery-history with verified CI` |

Push : fast-forward `docs/next-ml4c-closure-20261115` — **pas** de force / rebase / nouvelle PR.

Allowlist : navigation shell + ProjectChrome signal + tests + delivery/as-built. **Aucun secret.**

### CI HEAD final `bb21d24c`

| Run | Conclusion | Gates |
| --- | --- | --- |
| [43755913981](https://github.com/mcleland147/sfia-workspace/actions/runs/43755913981) SFIA Studio Next CI | **success** | Detect PASS · Build Next PASS · **Next Required Gate PASS** |
| [43755913982](https://github.com/mcleland147/sfia-workspace/actions/runs/43755913982) SFIA Studio CI | **success** | Detect PASS · Build Studio skipped · **Studio Required Gate PASS** |

CI code régularisation (même tree web) : [43755023230](https://github.com/mcleland147/sfia-workspace/actions/runs/43755023230) on `c2d9b24f` SUCCESS.

### PR #678

| Champ | Valeur |
| --- | --- |
| URL | https://github.com/mcleland147/sfia-workspace/pull/678 |
| `headRefOid` | `bb21d24c3f6b096a268b9b03aa8b1841b98ee8fa` |
| `baseRefOid` | `05e71a7166562211b1c8c168a40dcd35e4f8c8a3` |
| mergeable | **MERGEABLE** |
| mergeStateStatus | **CLEAN** |
| Merge | **NON effectué** |

### Trees web

| Point | Tree `projects/sfia-studio-next/web` |
| --- | --- |
| Pré-avenant `@69aa8b1d` | `787537cb344cc2c13dc3cd20c43e8572d52249af` |
| Post-régularisation `@c2d9b24f` / `@bb21d24c` | `3f34d2ad4a4340fc2fdf6f19ac0b15858441e39a` |

---

## 8. Limites et réserves

- Preuves **FAKE / BROWSER / DEV-E2E** — pas assimilées à Nora LIVE ni Git REAL.
- Réserves ML4C historiques inchangées (S05-06/08, TTL, ENV-R09, etc.).
- Instrumentation `data-project-load-state` = observabilité test/produit légère — **pas** une autorité de navigation.
- Clôture ML4C reste **conditionnelle** au merge Morris autorisé et vérifié.
- ML4D NOT STARTED · Gate C OPEN · STABLE NOT AVAILABLE · **NO RELEASE / NOT ADOPTED**.

---

## 9. ENV-01 / Product Versioning

- DEV / E2E isolés uniquement (`:3101`).
- RECETTE **non mutée**.
- STABLE **NOT AVAILABLE**.
- Aucune action Git REAL applicative.
- Versioning : **PATCH / NO RELEASE**.

---

## 10. Gate Morris restant

1. Relire ce pack + handoff L3.  
2. Décider **GO MERGE** ou blocage.  
3. Si GO : merge **humain** PR #678 (Cursor **ne merge pas**).  
4. Post-merge : vérité documentaire / clôture ML4C selon protocole existant.

---

## 11. Handoff L3

Branche : `sfia/review-handoff`  
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`  
Commit mono-fichier + push FF — SHA / blob / relecture distante renseignés en bas de cycle après publication.

---

**FIN REVIEW PACK FULL — Avenant régularisation PR #678**
