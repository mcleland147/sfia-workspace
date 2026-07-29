# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 01:25:20 CEST (+0200) |
| **Niveau** | Full |
| **Mono-cycle** | Correctif V2-A2 + PR readiness de clôture uniquement |
| **Repository** | `mcleland147/sfia-workspace` |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| **Cycle principal** | 8 — Delivery / implémentation corrective |
| **Cycle de sortie** | 13 — PR readiness |
| **Profil** | Standard · profondeur Standard renforcé · typologie EVOL |
| **Gate Morris consommé** | `GO CORRECT SFIA STUDIO V2-A2 PR READINESS FINDINGS — FIX README T-A0/T-A1 AND DUPLICATE CONSTRAINT REACT KEYS — THEN RERUN PR READINESS` |
| **Branche projet** | `delivery/sfia-studio-visible-slice-v2-a2-create-project-ui` |
| **Base main** | `169e1a71fcd8625ff87565c1b7112d63d9044492` |
| **HEAD initial** | `d7126be51365c9687939dc021ed9ce3a1ebacc77` |
| **Commit correctif** | `55a28d3cb30adb5b00ac347ffe9876879e199458` |
| **HEAD final** | `55a28d3cb30adb5b00ac347ffe9876879e199458` |
| **Upstream projet** | aucun |
| **Branche distante projet** | absente |
| **PR existante** | aucune |
| **Push projet / PR / merge** | non effectués |
| **Verdict unique** | **READY FOR PR WITH RESERVES** |

## Git Review Index

| Champ | Valeur |
|-------|--------|
| base branch | `origin/main` |
| base SHA | `169e1a71fcd8625ff87565c1b7112d63d9044492` |
| branche | `delivery/sfia-studio-visible-slice-v2-a2-create-project-ui` |
| HEAD initial | `d7126be51365c9687939dc021ed9ce3a1ebacc77` |
| HEAD après correctif | `55a28d3cb30adb5b00ac347ffe9876879e199458` |
| HEAD final | `55a28d3cb30adb5b00ac347ffe9876879e199458` |
| commits avant | 3 (`8ce9391`, `58141b2`, `d7126be`) |
| commit créé | `55a28d3` — `fix(sfia-studio): resolve V2-A2 readiness findings` |
| commits après | 4 ahead de `origin/main` (`0 4`) |
| fichiers corrigés | 3 (README, CreateProjectForm, createProjectUi.test) |
| fichiers globaux dans le diff | 12 chemins exacts |
| tests et validations | UI 12 · runtime 13 · core 16 · increments 14 · suite 88/777 · typecheck · lint · build — PASS |
| captures | 3 PNG 1440×1024 régénérées, non trackées |
| diff stat | `12 files changed, 1830 insertions(+), 36 deletions(-)` |
| diff name-status | 6 M + 6 A (voir section dédiée) |
| réserves | non bloquantes (voir section Réserves) |
| décision Morris suivante | candidate `GO PUSH AND CREATE PR SFIA STUDIO V2-A2 CREATE PROJECT UI` (non exécutée) |
| review pack | full |
| verdict | READY FOR PR WITH RESERVES |

## Review pack content coverage

| Critère | Statut |
|---------|--------|
| created files full content | not applicable |
| modified sections complete | yes |
| useful corrective diff included | yes |
| global branch diff reviewed | yes |
| per-file corrective review included | yes |
| PR body complete | yes |
| synthesis only | **no** |
| review pack verdict | **complete** |

## Sources consultées

| Source | Rôle | Sections / usage |
|--------|------|------------------|
| `prompts/templates/sfia-cycle-execution-template.md` | méthode d’exécution | structure cycle, handoff, stops |
| `prompts/templates/2026-07-04-05-validate-pr-readiness.md` | template PR readiness | contrôles, body, verdicts |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | routage | cycles 8 → 13 |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | operating model | Cursor vs ChatGPT, handoff |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | garde-fous | no push/PR sans GO |
| `method/sfia-fast-track/checklists/sfia-validation-checklist.md` | checklist QA | validations |
| `method/.../sfia-v2.5-project-cycles-method-candidate.md` | cycles projet | typologie EVOL |
| `method/.../cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` | CKC fallback | guidance expérimentale (non baseline) |
| `docs/architecture/sfia-delivery-pipeline.md` | architecture | anti-claims delivery |
| `docs/architecture/2026-06-27-sfia-decision-engine.md` | décision | anti-claims |
| `scripts/sfia/README.md` | publisher handoff | L3 borné |
| handoff précédent `0567648` | constats P1/P3 | NOT READY FOR PR |
| README V2-A2 + CreateProjectForm + test UI | correctif | allowlist 3 fichiers |
| V1/V2-A1 (lecture seule) | sémantique T-A0/T-A1 + contraintes | confirmation |

**CKC** : recherché ; cycle principal 8 ; sortie 13 ; pilote détaillé absent ; fallback synthetic map ; method-candidate ; experimental cognitive guidance ; aucune autorité d’exécution ; non présenté comme baseline Morris.

## Local Git Truth Check (pré-écriture)

```text
pwd = /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
remote = origin → github.com/mcleland147/sfia-workspace.git
branch = delivery/sfia-studio-visible-slice-v2-a2-create-project-ui
HEAD initial = d7126be51365c9687939dc021ed9ce3a1ebacc77
status tracked = propre ; stage vide ; untracked = .tmp-sfia-review/ only
origin/main = 169e1a71fcd8625ff87565c1b7112d63d9044492
merge-base = 169e1a71fcd8625ff87565c1b7112d63d9044492
rev-list initial = 0 3
remote project branch = absent
PR = aucune
```

Truth check : **PASSED**. Aucun STOP.

## Phase 1 — Correctif

### Fichiers autorisés (exactement 3)

1. `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md`
2. `projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx`
3. `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`

Aucun quatrième fichier tracké modifié.

### Correction README T-A0/T-A1

Section **Delivered architecture** — formulation finale :

```text
/studio/projects/new
  StudioShell (flush; tabs hidden; historical primary action hidden)
    RuntimeDisclosureBanner (Server Component)
      → vertical-slice-runtime/disclosures
    CreateProjectForm (Client Component)
      → createProjectRuntimeAction (Server Action)
        → RuntimeApplicationService V2-A1
          → LocalProjectFacade V1
            → T-A0 doctrine-package resolution
            → T-A1 Project + initial Living Project State creation
      ← serializable real-local projection rendered inline
```

Vérifications :

- T-A0 = résolution du package de doctrine — **OK**
- T-A1 = création atomique Project + LPS initial — **OK**
- aucune attribution Project à T-A0 — **OK**
- aucune attribution LPS seul à T-A1 — **OK**
- aucune persistance produit attribuée à T-A1 — **OK**
- ligne D-VS-04 `Project/T-A0/T-A1 precede…` : ordre de parcours, pas une attribution erronée — **conservée**
- statut du lot, anti-claims, décisions Morris, périmètre, limites, prochain gate — **inchangés**

### Correction clés React

```tsx
{result.project.constraints.map((constraint, index) => (
  <li key={`${index}:${constraint}`}>{constraint}</li>
))}
```

- clés uniques pour contraintes textuellement identiques — **OK**
- texte affiché inchangé — **OK**
- pas de déduplication — **OK**
- DTO / V1 / dépendances inchangés — **OK**

### Test obligatoire ajouté

```tsx
  it("renders identical constraints twice without duplicate React key warnings", async () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);
    createProjectRuntimeActionMock.mockResolvedValue({
      ...SUCCESS_RESULT,
      project: {
        ...SUCCESS_RESULT.project,
        constraints: ["Sans IAM", "Sans IAM"],
      },
    });
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));

    const constraints = await screen.findByLabelText("Contraintes");
    expect(within(constraints).getAllByText("Sans IAM")).toHaveLength(2);
    expect(
      consoleError.mock.calls.some((args) =>
        args.some(
          (arg) =>
            typeof arg === "string" &&
            /Encountered two children with the same key/i.test(arg),
        ),
      ),
    ).toBe(false);
    consoleError.mockRestore();
  });
```

Fichier UI : **12** tests (précédemment 11).

### Diff correctif utile complet (`55a28d3`)

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
index d78ef80..e143269 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
@@ -385,6 +385,37 @@ describe("V2-A2 Create Project UI", () => {
     expect(screen.getByLabelText(/Nom du projet/)).toHaveValue("");
   });

+  it("renders identical constraints twice without duplicate React key warnings", async () => {
+    const consoleError = vi
+      .spyOn(console, "error")
+      .mockImplementation(() => undefined);
+    createProjectRuntimeActionMock.mockResolvedValue({
+      ...SUCCESS_RESULT,
+      project: {
+        ...SUCCESS_RESULT.project,
+        constraints: ["Sans IAM", "Sans IAM"],
+      },
+    });
+    const user = userEvent.setup();
+    render(<CreateProjectForm />);
+    await fillRequiredFields(user);
+
+    await user.click(screen.getByTestId("create-project-submit"));
+
+    const constraints = await screen.findByLabelText("Contraintes");
+    expect(within(constraints).getAllByText("Sans IAM")).toHaveLength(2);
+    expect(
+      consoleError.mock.calls.some((args) =>
+        args.some(
+          (arg) =>
+            typeof arg === "string" &&
+            /Encountered two children with the same key/i.test(arg),
+        ),
+      ),
+    ).toBe(false);
+    consoleError.mockRestore();
+  });
+
   it("keeps StudioShell defaults and allows V2-A2 to hide tabs and primary CTA", () => {
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
index eefae4a..c42318a 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
@@ -171,8 +171,8 @@ function ProjectCreationResult({
         </dl>
         {result.project.constraints.length > 0 ? (
           <ul className={styles.constraintList} aria-label="Contraintes">
-            {result.project.constraints.map((constraint) => (
-              <li key={constraint}>{constraint}</li>
+            {result.project.constraints.map((constraint, index) => (
+              <li key={`${index}:${constraint}`}>{constraint}</li>
             ))}
           </ul>
         ) : (
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md
index 716ea28..5d7cacd 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md
@@ -55,7 +55,8 @@ INCOMPLETE.
       → createProjectRuntimeAction (Server Action)
         → RuntimeApplicationService V2-A1
           → LocalProjectFacade V1
-            → T-A0 Project + T-A1 initial LPS
+            → T-A0 doctrine-package resolution
+            → T-A1 Project + initial Living Project State creation
       ← serializable real-local projection rendered inline
 ```
```

### Validations correctives (phase 1)

| Contrôle | Résultat |
|----------|----------|
| `npm run test -- __tests__/vertical-slice-ui/createProjectUi.test.tsx` | PASS (12) |
| `npm run test -- __tests__/vertical-slice-runtime` | PASS (13) |
| `npm run test -- __tests__/vertical-slice-core` | PASS (16) |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (warning dépréciation `next lint` non bloquant) |
| `npm run build` | PASS · route `/studio/projects/new` 7.78 kB |
| `git diff --check` | PASS |
| stage commit | exactement 3 fichiers |
| amend/rebase/squash | non |

### Commit correctif

```text
55a28d3cb30adb5b00ac347ffe9876879e199458
fix(sfia-studio): resolve V2-A2 readiness findings

Correct the T-A0/T-A1 architecture wording in the V2-A2 README and
render identical constraints with unique React keys, with an explicit
duplicate-key regression test.
```

Post-commit : `rev-list origin/main...HEAD` = `0 4` · trois commits antérieurs inchangés · tracked propre · stage vide.

## Phase 2 — PR readiness (read-only hors review pack / handoff)

### Quatre commits audités

| SHA | Message | Rôle |
|-----|---------|------|
| `8ce93917543fab5b4b4ab7ace020ff72266b5ec3` | feat(sfia-studio): add V2-A2 create project UI | feature |
| `58141b2c1697f51f61618229d5d670dced549cb3` | test(sfia-studio): validate V2-A2 create project UI | tests |
| `d7126be51365c9687939dc021ed9ce3a1ebacc77` | docs(sfia-studio): document V2-A2 create project UI | docs initiale |
| `55a28d3cb30adb5b00ac347ffe9876879e199458` | fix(sfia-studio): resolve V2-A2 readiness findings | correctif readiness |

Ordre cohérent · séparation des responsabilités · aucun fixup/parasite · correctif limité aux 3 fichiers · pas de réécriture des 3 commits initiaux.

### Diff global `origin/main...HEAD`

**Stat :** `12 files changed, 1830 insertions(+), 36 deletions(-)`

**Name-status :**

```text
M	projects/sfia-studio/app/__tests__/increment-a.test.tsx
M	projects/sfia-studio/app/__tests__/increment-b.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
A	projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
A	projects/sfia-studio/app/app/studio/projects/new/page.tsx
M	projects/sfia-studio/app/components/shell/StudioShell.tsx
M	projects/sfia-studio/app/components/shell/Topbar.tsx
A	projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
A	projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
A	projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
M	projects/sfia-studio/app/lib/navigation.ts
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md
```

Budget : **exactement 12 chemins** · aucun 13ᵉ · aucun PNG/artefact temporaire tracké · aucun package/lockfile/workflow · core V1 et runtime V2-A1 **inchangés** hors consommation read-only.

### Chemins protégés

Confirmé inchangés dans le correctif et non élargis au-delà du lot V2-A2 d’origine :

- `vertical-slice-core/**`, `vertical-slice-runtime/**` (hors tests frontières déjà dans le lot)
- `oa/**`, `d1/**`, `platform/**`, `harness/**`, `ops1/**`, `agents/**`
- `package.json` / lockfiles / `.github/**` / `prompts/**` / `method/**` / `docs/**` racine
- migrations / schemas / Figma / secrets

### Validations fraîches PR readiness

Exécutées depuis `projects/sfia-studio/app` au HEAD `55a28d3` :

| Contrôle | Résultat |
|----------|----------|
| `__tests__/vertical-slice-ui` | PASS · 1 file · **12** tests |
| dont test contraintes identiques | **PASS** |
| `__tests__/vertical-slice-runtime` | PASS · 13 |
| `__tests__/vertical-slice-core` | PASS · 16 |
| increments a+b | PASS · 14 |
| `npm run test` suite complète | PASS · **88** files · **777** tests |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS · dépréciation `next lint` non bloquante |
| `npm run build` | PASS · `/studio/projects/new` **7.78 kB** First Load 114 kB |
| `git diff --check origin/main...HEAD` | PASS |
| tracked après validation | propre (`?? .tmp-sfia-review/` only) |
| stage | vide |
| HEAD inchangé | `55a28d3…` |

### Runtime / preuves UX

Dev local `npm run dev -- --port 3020` · viewport **1440×1024** · captures régénérées au nouveau HEAD (non trackées) :

| Fichier | SHA-256 | Dimensions |
|---------|---------|------------|
| `.tmp-sfia-review/evidence/v2-a2/01-initial.png` | `115cb3638ff44db471e4b9de0e82afc52c8014aba872d5ea38a91dd0bddb756e` | 1440×1024 |
| `.tmp-sfia-review/evidence/v2-a2/02-validation-errors.png` | `b43536125dc5bb52fa1676389ac6ef43f5649c043422909ca0fd5e7ed8991197` | 1440×1024 |
| `.tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png` | `7def6c798c4c1ccd3f69d60fb3d1a979f4a65f0a896d49862576325fbf0db821` | 1440×1024 |

Contrôles runtime :

- Initial : shell flush · rail actif · disclosures · formulaire · Nora read-only — **OK**
- Validation : erreurs name/objective/context · focus · valeurs conservées — **OK**
- Succès : Project · doctrine · LPS · **deux contraintes « Sans IAM »** · `REAL_LOCAL_CORE` · aucune fixture · `NOT_READY` / `RUN READY = false` · disclosures — **OK**
- Correction de clé : **aucun changement de rendu visuel** — **OK**

Qualification Figma : aucune frame V2-A2 dédiée · aucune écriture Figma · aucune claim pixel-perfect · contrat Git + tokens existants uniquement.

### Architecture client/server (exacte)

```text
UI
→ createProjectRuntimeAction
→ RuntimeApplicationService V2-A1
→ LocalProjectFacade V1
→ T-A0 doctrine-package resolution
→ T-A1 Project + initial LPS creation
→ serializable local UI projection
```

Confirmations :

- core V1 inchangé
- contrats / implémentations V2-A1 inchangés
- aucun D1 · aucune API route · aucun fetch · aucun browser storage
- aucune dépendance ajoutée · aucun agent réel

### Anti-claims (aucun claim)

HARD CLOSED · T-A6 COMPLETE · RUN READY · PRODUCT READY · persistance durable · identité Morris authentifiée · agent actif · delivery/cutover autorisé · alignement Figma pixel-perfect — **tous absents / niés**.

### Accessibilité

- labels / required / invalid states présents
- liste contraintes `aria-label="Contraintes"`
- Nora disabled / lecture seule
- focus visible sur erreur (capture 02)
- réserves a11y non bloquantes hors 390 px (hors lot)

### Sécurité et hygiène

Diff inspecté : aucun secret/token/password/clé privée · aucune PII/email réelle · aucun chemin `/Users/...` tracké · aucun `console.log` produit · aucun `it.only`/`describe.only` · aucun skip ajouté · aucun `@ts-ignore` · aucun eslint-disable large · aucun TODO/FIXME bloquant · aucune dépendance · artefacts `.tmp-sfia-review/**` non trackés — **OK**.

## Réserves classées

| ID | Sévérité | Description | Bloquant PR ? |
|----|----------|-------------|---------------|
| R1 | Mineure | Cast `activeRoute as StudioRoute` dans `StudioShell` (union legacy fixture) | Non |
| R2 | Mineure | Aucune frame Figma V2-A2 dédiée — pas de claim pixel-perfect | Non |
| R3 | Mineure | Responsive 390 px hors lot | Non |
| R4 | Mineure | Warning dépréciation `next lint` / futur `allowedDevOrigins` | Non |
| R5 | Informative | État process-local volatil (by design, disclosure) | Non |

Aucune réserve bloquante ou majeure. Constats P1 (README T-A0/T-A1) et P3 (clés React) **fermés**.

## Draft PR (préparé — non créé)

### Titre

```text
feat(sfia-studio): add V2-A2 create project UI
```

### Body

```markdown
## Summary

- Adds the first user-visible V2-A2 create-project UI at `/studio/projects/new`, wired through StudioShell (flush layout, bounded disclosures, Nora read-only).
- Calls the real local V2-A1 Server Action path and renders the serializable Project + Living Project State projection (no fixtures, no product persistence).
- Includes focused UI/runtime/core coverage, including an explicit regression for textually identical constraints (unique React keys, no duplicate-key warning).

## Architecture

```text
UI
→ createProjectRuntimeAction
→ RuntimeApplicationService V2-A1
→ LocalProjectFacade V1
→ T-A0 doctrine-package resolution
→ T-A1 Project + initial LPS creation
→ serializable local UI projection
```

## Validation

- [x] UI tests (`createProjectUi.test.tsx`, 12) including identical-constraints / no React duplicate-key warning
- [x] vertical-slice-runtime tests
- [x] vertical-slice-core tests
- [x] increment-a / increment-b
- [x] full suite (88 files / 777 tests)
- [x] typecheck
- [x] lint
- [x] build (`/studio/projects/new` generated)
- [x] fresh local runtime evidence regenerated at review HEAD (initial / validation errors / success with duplicate constraints, REAL_LOCAL_CORE, NOT_READY) — local-only artifacts, not committed

## Known limitations

- No dedicated V2-A2 Figma frame; Git tokens/shell contract only — not pixel-perfect / not FIGMA TO RUNTIME ALIGNED.
- 390 px responsive polish is out of this lot.
- Future `allowedDevOrigins` / Next lint CLI migration remain follow-ups (`next lint` deprecation warning is non-blocking).
- Process-local volatile state only (disclosed); no durable product persistence.
- Non-blocking `StudioShellRoute` → `StudioRoute` cast retained for legacy fixture union compatibility.

## Anti-claims

Not HARD CLOSED · not T-A6 COMPLETE · not RUN READY · not PRODUCT READY · no durable persistence · no authenticated Morris identity · no live agent · no delivery/cutover authorization · not merged to main.
```

## Conditions avant push / création de PR

Requiert une **décision Morris distincte** :

`GO PUSH AND CREATE PR SFIA STUDIO V2-A2 CREATE PROJECT UI`

Interdit sans ce GO : `git push` branche projet · création/MAJ PR · merge · force push · rebase · amend · modification main · suppression de branche.

## Review Handoff Git

| Champ | Valeur |
|-------|--------|
| Décision | required |
| Mode | publish-in-cycle |
| Branche | `sfia/review-handoff` |
| Fichier canonique | `sfia-review-handoff/latest-chatgpt-review.md` |
| Source | `.tmp-sfia-review/chatgpt-review.md` |
| Remote before | `0567648f64fcba6f5f7870c5fdf081550edd5892` |
| Remote after | *(filled after publish — see publisher output / origin tip)* |
| Commit handoff | `docs(review-handoff): publish SFIA Studio V2-A2 corrected PR readiness review` |
| Push handoff | oui — L3 borné FF-only |
| Fichier distant relu | oui |
| Retour branche projet | `delivery/sfia-studio-visible-slice-v2-a2-create-project-ui` @ `55a28d3…` |
| Push projet | **non** |
| Verdict handoff | **HANDOFF UPDATED — REMOTE VERIFIED** |

## Décision Morris suivante (candidate — non exécutée)

`GO PUSH AND CREATE PR SFIA STUDIO V2-A2 CREATE PROJECT UI`

## Verdict unique

**READY FOR PR WITH RESERVES**

## Instruction ChatGPT obligatoire

Avant de répondre à Morris, lire depuis Git :

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier : gate correctif · branche · base · HEAD initial/final · commit correctif · trois fichiers · quatre commits · douze fichiers globaux · T-A0/T-A1 exacts · test doublon · validations · captures · réserves · body de PR · absence de push projet et de PR · statut handoff · verdict unique.
