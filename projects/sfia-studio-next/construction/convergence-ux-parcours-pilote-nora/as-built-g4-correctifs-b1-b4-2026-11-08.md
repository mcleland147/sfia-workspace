# As-built G4 — correctifs B1–B4 + accès DEV (2026-11-08)

**Branch :** `feat/next-convergence-ux-g4-construction`
**Lane :** DEV only · **NO RELEASE**
**Parent construction :** `dbaccfda` · base `f0d59bc8`

## Correctifs

| ID | Correction |
|---|---|
| B1 | `buildShellNav` : liens réels `?surface=` sous `projectId` ; labels désactivés (pas `#`) hors contexte ; mobile = mêmes surfaces ; variante F1 par mapping frame↔route↔état |
| B2 | Sync URL↔surface↔document via `searchParams` (Back/Forward/reload) ; `push` pour nav utilisateur ; `replace` seulement normalisation ; lecture URL live en fin de load (anti-race) ; `documentId` étranger → état contrôlé sans contenu |
| B3 | Succès uniquement si `result.status === AVAILABLE` ; CONFLICT conserve brouillon + rebase explicite ; UNKNOWN/ACK → relecture revisions/correlationKey avant retry ; même `correlationKey` |
| B4 | Double-clic bloqué ; ACK perdu → **pas** de second POST auto ; relecture portefeuille ; erreurs réseau pagination/création explicites ; Reprendre = GET |

## Preuves

- `tsc --noEmit` OK
- unit 122 passed
- integration PG 144 passed
- `next build` OK
- Playwright `g4-b1-b4-correctifs.spec.ts` PASS (lane :3101 isolée)
- G2 `verify-g2-pack.sh` VERIFY PASS
- F2/G5 DOM≤2px : **NOT RUN** (pas revendiqué)

## DEV opérateur

- URL : `http://127.0.0.1:3100`
- Login : `/login` → **Pilote A (DEV)** (fake, pas OAuth LIVE)
- Arrêt : `kill` du PID `next dev` sur 3100

---

## Addendum 2026-11-15 — Fiabilisation navigation surface (PR #678)

**Statut :** PATCH correctif · NO RELEASE · lot PR `docs/next-ml4c-closure-20261115` (#678)
**Diagnostic amont :** handoff `sfia/review-handoff@c892727a` · CI fail run `43739913521` (g4-b1-b4 `nav-pilotage` → URL restait `surface=travail`)

### Comportement antérieur

- `StudioShell` naviguait les surfaces projet via `<Link>` Next **sans** poser d’intention partagée.
- `ProjectPage.selectSurface` (ProjectChrome) posait `pendingSurfaceRef` ; `load()` préférait ce pending si l’URL n’avait pas encore de `surface` valide.
- En fin de `load()`, une normalisation `router.replace(?surface=travail)` pouvait donc **écraser** un clic rail concurrent vers Pilotage / Journal / Documents.

### Correction implémentée

- Intention **transitoire unique** `noteProjectSurfaceNavIntent` / `peek` / `clear` dans `studio-rail.ts` (pas de second store durable).
- `StudioShell` (desktop + mobile + accès directs) note l’intention au `onClick` du Link.
- `selectSurface` note la même intention.
- `resolveProjectLoadSurface` : URL valide > intent pending > défaut `travail` ; normalisation uniquement si surface absente/invalide, vers la surface **effective** (donc `pilotage` si pending).

### Invariants conservés

NAV-01…NAV-10 du contrat 15/11/2026 : push utilisateur / replace normalisation ; deep-links ; documentId / états doc ; reprise ; rail F1 246/246/240/244 ; aucune autorité D1–D9 / API métier.

### Fichiers

- `web/src/components/shell/studio-rail.ts`
- `web/src/components/shell/StudioShell.tsx`
- `web/src/app/projects/[projectId]/page.tsx`
- `web/tests/unit/studio-rail.test.ts`
- `web/tests/e2e/project-surface-nav-intent.spec.ts` (nouveau)
- oracle `g4-b1-b4-correctifs.spec.ts` **inchangé**

### Preuves locales (lane DEV / E2E `:3101` / PG isolé)

- `tsc --noEmit` PASS
- ESLint : warnings préexistants only
- `next build` PASS
- Vitest unit **368** PASS
- Vitest PG **471** PASS
- Playwright **30** PASS (dont discriminant concurrence + G4 B1–B4)

### Limites

- Preuve FAKE/BROWSER ; Nora LIVE / Git REAL non concernés.
- Trace chronologique CI historique absente ; discrimination apportée par harness d’interception contrôlée.
