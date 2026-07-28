# Review pack FULL — T-A7 L-F11F13 PR readiness

## Meta

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-07-28 23:37:01 CEST (+0200) |
| Repository | mcleland147/sfia-workspace |
| Workspace | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge |
| Branche | delivery/sfia-studio-t-a7-f11-f13-internal-completion |
| HEAD | b4b1defef72832aa5f09d8c55a41d03114e19d94 |
| origin/main | 770605bcfa4cc3e403ee2c4615c1a115ccd38458 |
| Upstream projet | aucun |
| Cycle | 13 — PR readiness (+ QA/archi/sécurité/obs/REX) |
| Profil | Standard |
| Typologie | EVOL |
| CKC | absent — fallback méthode + handoff L-F11F13 |
| Gate consommé | GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER |
| Handoff avant cycle (blob) | 795eeebd8fd67aad9f29b1ff971fa921fcb99901 |
| Actions projet | aucune modification / commit / push / PR / merge |

## Local Git Truth Check

```
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
delivery/sfia-studio-t-a7-f11-f13-internal-completion
b4b1defef72832aa5f09d8c55a41d03114e19d94
770605bcfa4cc3e403ee2c4615c1a115ccd38458
?? .tmp-sfia-review/
b4b1def (HEAD -> delivery/sfia-studio-t-a7-f11-f13-internal-completion) feat(sfia-studio): complete internal F11 F13 bounded contracts
dcdc90a (docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing) docs(sfia-studio): record F11 F13 completion decisions
ed62367 docs(sfia-studio): close T-A7 lot 1 post-merge and frame next blockers
770605b (origin/main, origin/HEAD) Merge pull request #287 from mcleland147/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
b6a1933 (origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness, framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness) fix(sfia-studio): harden T-A7 bounded readiness foundations
47e26fd feat(sfia-studio): implement T-A7 bounded readiness foundations
0141037 test(sfia-studio): collect T-A7 readiness evidence
a33f4a3 docs(sfia-studio): frame T-A7 technical readiness
2a3c59c Merge pull request #286 from mcleland147/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
960c90b (origin/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status, docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status) docs(sfia-studio): align T-A7 F03 F11 F13 README post-merge status
dad6e00 Merge pull request #285 from mcleland147/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
6849b6f (origin/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration, framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration) docs(sfia-studio): record T-A7 F03 F11 F13 Morris decisions
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
+ delivery/sfia-studio-control-tower-fast-track                                 c895a96 (/Users/morris/Projects/sfia-workspace) [origin/delivery/sfia-studio-control-tower-fast-track] docs(sfia-studio): formalize F-A6 as mitigated after M1
* delivery/sfia-studio-t-a7-f11-f13-internal-completion                         b4b1def feat(sfia-studio): complete internal F11 F13 bounded contracts
  docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing                    dcdc90a docs(sfia-studio): record F11 F13 completion decisions
  framing/sfia-studio-control-tower                                             32e5271 feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
/Users/morris/Projects/sfia-workspace                                                                                                    c895a96 [delivery/sfia-studio-control-tower-fast-track]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge                                                                               b4b1def [delivery/sfia-studio-t-a7-f11-f13-internal-completion]
.tmp-sfia-review/chatgpt-review.md

```

**Verdict Truth Check :** PASS

## Commits revus (lot L-F11F13)

### 1. Documentaire
```
commit dcdc90a0779859ec5d34a91021bab65122447ee5
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Tue Jul 28 22:59:09 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Tue Jul 28 22:59:09 2026 +0200

    docs(sfia-studio): record F11 F13 completion decisions

    Record Morris D1–D8 as adopted and authorize the local L-F11F13
    internal completion lot without project push, PR, or delivery.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../12-f11-2-completion-surface-and-gaps.md        | 168 ++++++++++++++++++++
 .../13-f13-4-completion-surface-and-gaps.md        | 135 ++++++++++++++++
 ...-f11-f13-dependencies-and-runtime-boundaries.md | 176 +++++++++++++++++++++
 ...-f11-f13-completion-options-and-bounded-lots.md |  98 ++++++++++++
 .../16-morris-f11-f13-completion-decision-pack.md  |  70 ++++++++
 .../t-a7-technical-readiness-framing/README.md     |  74 ++++++---
 6 files changed, 695 insertions(+), 26 deletions(-)
 create mode 100644 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
 create mode 100644 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
 create mode 100644 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
 create mode 100644 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
 create mode 100644 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md

```

### 2. Implémentation
```
commit b4b1defef72832aa5f09d8c55a41d03114e19d94
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Tue Jul 28 23:24:24 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Tue Jul 28 23:24:24 2026 +0200

    feat(sfia-studio): complete internal F11 F13 bounded contracts

    Harden F11.2 as INTERNAL_ONLY with honest READY/NOT_READY/UNKNOWN
    states, and enrich F13.4 seed with explicit Git SHA, PREFIX_ONLY
    pagination, deferred audit, and GIT_ONLY retention.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../d1/t-a7-operational-readiness.test.ts          |  59 ++++-
 .../platform/t-a7-bounded-history.test.ts          |  83 ++++++-
 projects/sfia-studio/app/lib/d1/index.ts           |   2 +
 .../sfia-studio/app/lib/d1/operationalReadiness.ts | 113 ++++++++--
 .../app/lib/platform/t-a7/boundedHistoryRead.ts    | 246 +++++++++++++++++----
 .../12-f11-2-completion-surface-and-gaps.md        |  15 +-
 .../13-f13-4-completion-surface-and-gaps.md        |  17 +-
 .../16-morris-f11-f13-completion-decision-pack.md  |  10 +-
 .../17-f11-f13-internal-completion-lot-results.md  | 196 ++++++++++++++++
 .../t-a7-technical-readiness-framing/README.md     |  25 ++-
 10 files changed, 677 insertions(+), 89 deletions(-)
 create mode 100644 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md

```

### 3. Inclus dans origin/main...HEAD (ancêtre post-merge)
```
commit ed62367f8c6b286c49191076e929271ea70965a3
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Tue Jul 28 22:17:46 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Tue Jul 28 22:17:46 2026 +0200

    docs(sfia-studio): close T-A7 lot 1 post-merge and frame next blockers

    Align the T-A7 readiness pack README to main after PR #287 and add a
    post-merge framing note for the next Morris blocker-reduction decision.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 ...-a7-lot1-post-merge-and-next-blocker-framing.md | 335 +++++++++++++++++++++
 .../t-a7-technical-readiness-framing/README.md     |  69 +++--
 2 files changed, 385 insertions(+), 19 deletions(-)
 create mode 100644 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/11-t-a7-lot1-post-merge-and-next-blocker-framing.md

```

**Note PR composition :** `origin/main..HEAD` contient **3** commits (`ed62367`, `dcdc90a`, `b4b1def`), pas seulement les 2 commits L-F11F13. Une future PR depuis cette branche inclurait aussi le cadrage post-merge (doc 11 + README).

## Diff PR potentiel

### log
```
b4b1def feat(sfia-studio): complete internal F11 F13 bounded contracts
dcdc90a docs(sfia-studio): record F11 F13 completion decisions
ed62367 docs(sfia-studio): close T-A7 lot 1 post-merge and frame next blockers

```

### --stat
```
 .../d1/t-a7-operational-readiness.test.ts          |  59 +++-
 .../platform/t-a7-bounded-history.test.ts          |  83 ++++-
 projects/sfia-studio/app/lib/d1/index.ts           |   2 +
 .../sfia-studio/app/lib/d1/operationalReadiness.ts | 113 ++++++-
 .../app/lib/platform/t-a7/boundedHistoryRead.ts    | 246 ++++++++++++---
 ...-a7-lot1-post-merge-and-next-blocker-framing.md | 335 +++++++++++++++++++++
 .../12-f11-2-completion-surface-and-gaps.md        | 171 +++++++++++
 .../13-f13-4-completion-surface-and-gaps.md        | 138 +++++++++
 ...-f11-f13-dependencies-and-runtime-boundaries.md | 176 +++++++++++
 ...-f11-f13-completion-options-and-bounded-lots.md |  98 ++++++
 .../16-morris-f11-f13-completion-decision-pack.md  |  76 +++++
 .../17-f11-f13-internal-completion-lot-results.md  | 196 ++++++++++++
 .../t-a7-technical-readiness-framing/README.md     |  92 ++++--
 13 files changed, 1704 insertions(+), 81 deletions(-)

```

### --name-status
```
M	projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
M	projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
M	projects/sfia-studio/app/lib/d1/index.ts
M	projects/sfia-studio/app/lib/d1/operationalReadiness.ts
M	projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/11-t-a7-lot1-post-merge-and-next-blocker-framing.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md

```

### --check
```
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md:110: trailing whitespace.
+Données temporaires autorisées : copies frozen, timestamps d’évaluation.
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md:97: trailing whitespace.
+Aucun lot ci-dessus n’autorise delivery preparation, delivery ou cutover.

```

Fichiers hors scope interdits : **aucun**.
`.tmp-sfia-review` : **absent du diff** (untracked local uniquement).

## Matrice D1–D8

| ID | Décision | Preuve code | Preuve tests | Alignement doc | Statut revue |
|----|----------|-------------|--------------|----------------|--------------|
| D1 | INTERNAL_ONLY | accessSurface INTERNAL_ONLY | operational-readiness | README/16/17 | PASS |
| D2 | Audit différé | audit DEFERRED_EXPLICITLY F11+F13 | assertions audit | 16/17 | PASS |
| D3 | Seed+SHA | seed enrichi + gitCanonicalSha | SHA inject/invalid tests | 13/17 | PASS |
| D4 | PREFIX_ONLY | paginationMode/nextCursor null | volume/prefix tests | 17 | PASS |
| D5 | GIT_ONLY | retention GIT_ONLY | retention assertions | 17 | PASS |
| D6 | L-F11F13 | branche/commits | lot tests | 16/17 | PASS |
| D7 | IAM NOT_SELECTED | snap.iam | JSON assertions | 16/17 | PASS |
| D8 | Persistence NOT_SELECTED | snap.persistence | JSON assertions | 16/17 | PASS |

## Analyse F11.2

- schemaVersion `t-a7-f11.2-l-f11f13`
- INTERNAL_ONLY, mutable/adminUi/writeCommands false
- readinessStatus READY|NOT_READY|UNKNOWN ; hold → NOT_READY ; health SIMULATED → jamais READY
- iam/persistence NOT_SELECTED ; audit DEFERRED_EXPLICITLY
- aucune route HTTP / UI dans le lot
- barrel d1 exporte query + types ; **pas** de helpers hold test-only

## Analyse F13.4

- Git canonical + gitCanonicalSha validé fail-closed
- pin DEFAULT `770605bc…` ou injection caller ; pas de shell git
- PREFIX_ONLY max 50 ; nextCursor null ; ordre stable
- retention GIT_ONLY ; audit différé ; seed enrichi (7 entrées incl. PR #287)

## Architecture

- frontières D1/F11 et D3/F13 préservées
- F11 consomme provider F13 en lecture
- pas de dépendance npm nouvelle
- back-compat seed-array factory : **source du finding Major TS** (voir findings)
- rollback : revert des 3 commits (ou 2 L-F11F13 si base = ed62367)

## Sécurité

- SHA invalide rejeté
- limites pagination
- pas de surface réseau / IAM fictive / persistance
- hold ≠ ACL
- health SIMULATED honnête

## Performance

- bornage 50, slice préfixe O(k), pas de scan non borné

## Documentation

- D1–D8 alignées ; doc 17 complet ; anti-claims préservés
- README gate suivant NOT CONSUMED (PR readiness désormais consommé dans ce cycle d’analyse)
- trailing whitespace docs 14/15 (Minor)

## Tests exécutés

Commande :
```bash
cd projects/sfia-studio/app
./node_modules/.bin/vitest run \
  __tests__/d1/t-a7-operational-readiness.test.ts \
  __tests__/platform/t-a7-bounded-history.test.ts \
  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
  __tests__/d1/t-a7-method-mode-hold.test.ts \
  __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts \
  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
  __tests__/platform/t-a7-local-volume.probe.test.ts
```

Résultat :
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 17ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 64ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 1ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 16ms
 ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 82ms
 ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 27ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 6ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 4ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-07-28T21:35:47.995Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-07-28T21:35:48.006Z","status":"ok","projectId":"proj-0dc60e91-810c-4222-bd9a-5ebe3451e194","durationMs":0}
{"event":"d1.method_mode_hold_blocked","ts":"2026-07-28T21:35:48.006Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-07-28T21:35:48.006Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-07-28T21:35:48.009Z","status":"ok","projectId":"proj-55cb987e-c650-4052-ad9e-2e0ebf8fdae8","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-07-28T21:35:48.009Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-07-28T21:35:48.009Z","status":"ok","projectId":"proj-55cb987e-c650-4052-ad9e-2e0ebf8fdae8","durationMs":0}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-07-28T21:35:48.010Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 22ms

 Test Files  9 passed (9)
      Tests  44 passed (44)
   Start at  23:35:47
   Duration  523ms (transform 566ms, setup 667ms, collect 1.53s, tests 239ms, environment 1ms, prepare 432ms)


```

## Typecheck

Commande : `npm run typecheck` / `tsc --noEmit`

Résultat :
```
lib/platform/t-a7/boundedHistoryRead.ts(274,9): error TS2322: Type 'readonly BoundedHistoryEntry[] | DocumentaryBoundedHistoryProviderOptions | { seed: any[]; }' is not assignable to type 'DocumentaryBoundedHistoryProviderOptions'.
  Type 'readonly BoundedHistoryEntry[]' has no properties in common with type 'DocumentaryBoundedHistoryProviderOptions'.

```

CI référence : `.github/workflows/sfia-studio-ci.yml` exécute `npm run typecheck` → **échec attendu sur cette branche**.

Build Next : non exécuté (proportionné ; typecheck déjà bloquant).

## Findings

| ID | Sévérité | Fichier | Preuve | Impact | Correction | Bloquant PR |
|----|----------|---------|--------|--------|------------|-------------|
| F-PR-01 | **Major** | `boundedHistoryRead.ts:274` | `tsc` TS2322 union Array.isArray → DocumentaryBoundedHistoryProviderOptions | CI typecheck rouge | Narrowing/overloads TypeScript corrects (cycle correctif) | **OUI** |
| F-PR-02 | Minor | docs `14` L110, `15` L97 | `git diff --check` trailing whitespace | bruit CI/hooks éventuel | strip trailing spaces | NON |
| F-PR-03 | Info | historique branche | 3 commits vs main | PR description doit couvrir post-merge + L-F11F13 | clarifier corps PR | NON |
| F-PR-04 | Info | operationalReadiness | health toujours SIMULATED | READY inatteignable actuellement (voulu) | aucune | NON |
| F-PR-05 | Info | hold reasons | F11_2_INCOMPLETE / F13_4_INCOMPLETE encore présents | blockers non fermés via hold (voulu) | aucune | NON |

Critical : **0** · Major : **1** · Minor : **1** · Info : **3**

## Matrice PR readiness

| Dimension | Statut | Note |
|-----------|--------|------|
| Scope | PASS | 13 fichiers pack+app bornés |
| Commits | PASS with Info | 2 L-F11F13 + 1 post-merge ancêtre |
| Architecture | PASS with Major reserve | TS overload |
| Fonctionnalité | PASS | contrats D1–D8 runtime OK ; vitest 44/44 |
| Sécurité | PASS | |
| QA | FAIL (typecheck) | vitest PASS ; tsc FAIL |
| Documentation | PASS with Minor | trailing ws |
| Rollback | PASS | revert Git |
| Risques | Major CI | |
| Gouvernance | PASS | blockers ouverts préservés |
| **Verdict global** | **NOT READY** | Major F-PR-01 |

## Risques / réserves

1. Push/PR maintenant ⇒ CI typecheck échoue.
2. SHA pin peut diverger si main avance (caller injection prévue).
3. READY unreachable tant que health reste SIMULATED.

## Rollback

`git revert` des commits concernés ou reset local non poussé (branche sans upstream).

## Blockers ouverts (inchangés)

B5 OPEN · R1 OPEN · R-M01 OPEN · HARD OPEN HARD · T-A6 NOT DECLARED COMPLETE · Option A NOT COMPLETE · delivery/cutover NOT AUTHORIZED · IAM/Persistence NOT SELECTED

## Actions non exécutées

correction code · commit projet · amend/rebase/squash · push projet · PR · merge · delivery · cutover · move_agent_to_root · checkout hors branche

## Statut Git final (pré-handoff)

```
## delivery/sfia-studio-t-a7-f11-f13-internal-completion
?? .tmp-sfia-review/

b4b1def (HEAD -> delivery/sfia-studio-t-a7-f11-f13-internal-completion) feat(sfia-studio): complete internal F11 F13 bounded contracts
dcdc90a (docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing) docs(sfia-studio): record F11 F13 completion decisions
ed62367 docs(sfia-studio): close T-A7 lot 1 post-merge and frame next blockers
770605b (origin/main, origin/HEAD) Merge pull request #287 from mcleland147/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness
b6a1933 (origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness, framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness) fix(sfia-studio): harden T-A7 bounded readiness foundations
47e26fd feat(sfia-studio): implement T-A7 bounded readiness foundations
0141037 test(sfia-studio): collect T-A7 readiness evidence
a33f4a3 docs(sfia-studio): frame T-A7 technical readiness
2a3c59c Merge pull request #286 from mcleland147/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status
960c90b (origin/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status, docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status) docs(sfia-studio): align T-A7 F03 F11 F13 README post-merge status
dad6e00 Merge pull request #285 from mcleland147/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration
6849b6f (origin/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration, framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration) docs(sfia-studio): record T-A7 F03 F11 F13 Morris decisions

```

## Verdict

`NOT READY FOR PROJECT PUSH OR PR — CORRECTIVE CYCLE REQUIRED`

Gate candidat suivant (non consommé) :

`GO CORRECT T-A7 F11 F13 INTERNAL COMPLETION LOT — FIX TYPESCRIPT OVERLOAD IN BOUNDED HISTORY PROVIDER — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER`

Statut : **NOT READY FOR MORRIS PUSH AND PR DECISION** (tant que F-PR-01 ouvert).

---

## Contenu complet — fichiers du périmètre (état HEAD)

### `projects/sfia-studio/app/lib/d1/operationalReadiness.ts`

```typescript
/**
 * T-A7 L-F11F13 — F11.2 operational readiness (internal-only, read-only).
 * Assembles observed state; never mutates MethodMode or history.
 * No HTTP, UI, IAM, or persistence.
 */

import {
  decideMethodModeTransition,
  readMethodModeHold,
  type MethodModeHoldState,
  type MethodModeTransitionDecision,
} from "@/lib/d1/methodModeHold";
import {
  defaultBoundedHistoryProvider,
  type BoundedHistoryAvailability,
  type BoundedHistoryPage,
  type BoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import {
  METHOD_MODES,
  type MethodMode,
  type D1Project,
} from "@/lib/d1/types";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";

export type ReadinessUnknown = "UNKNOWN";

/** D1 — access surface is server/internal only (no HTTP). */
export type OperationalReadinessAccessSurface = "INTERNAL_ONLY";

/**
 * Aggregate readiness for internal consumers.
 * Absence of signal must not become READY.
 */
export type OperationalReadinessStatus = "READY" | "NOT_READY" | "UNKNOWN";

export interface OperationalReadinessLegacyDeps {
  readonly methodModesAuthorized: readonly MethodMode[];
  readonly canonicalCorePaths: readonly string[];
  readonly methodCorePathCount: number;
  readonly note: string;
}

export interface OperationalReadinessMigrationStatus {
  readonly status: "NOT_STARTED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHealth {
  readonly status: "SIMULATED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHistorySummary {
  readonly availability: BoundedHistoryAvailability | ReadinessUnknown;
  readonly returned: number;
  readonly gitCanonical: true;
  readonly gitCanonicalSha: string | null;
  readonly paginationMode: "PREFIX_ONLY" | ReadinessUnknown;
  readonly completeness: "BOUNDED_L_F11F13";
}

export interface OperationalReadinessAudit {
  readonly status: "DEFERRED_EXPLICITLY";
  readonly detail: string;
}

export interface OperationalReadinessSnapshot {
  readonly schemaVersion: "t-a7-f11.2-l-f11f13";
  readonly accessSurface: OperationalReadinessAccessSurface;
  readonly readinessStatus: OperationalReadinessStatus;
  readonly readinessReasons: readonly string[];
  readonly evaluatedAt: string;
  readonly timezoneNote: "timestamps are ISO-8601 UTC (Z)";
  readonly completeness: "BOUNDED_L_F11F13";
  readonly iam: "NOT_SELECTED";
  readonly persistence: "NOT_SELECTED";
  readonly audit: OperationalReadinessAudit;
  readonly observed: {
    readonly projectId: string | null;
    readonly methodMode: MethodMode | null;
    readonly projectState: D1Project["state"] | null;
    readonly hold: MethodModeHoldState;
    readonly legacyDependencies: OperationalReadinessLegacyDeps;
    readonly migration: OperationalReadinessMigrationStatus;
    readonly health: OperationalReadinessHealth;
    readonly history: OperationalReadinessHistorySummary;
    readonly openBlockers: readonly string[];
  };
  readonly decision: MethodModeTransitionDecision["decision"];
  readonly recommendation: "KEEP_HOLD" | "NO_RECOMMENDATION";
  readonly authorization: MethodModeTransitionDecision["authorization"];
  readonly mutable: false;
  readonly adminUi: false;
  readonly writeCommands: false;
}

export interface OperationalReadinessQueryInput {
  readonly project?: D1Project | null;
  readonly historyProvider?: BoundedHistoryProvider;
  readonly historyLimit?: number;
}

function summarizeHistory(page: BoundedHistoryPage): OperationalReadinessHistorySummary {
  return {
    availability: page.availability,
    returned: page.returned,
    gitCanonical: true,
    gitCanonicalSha: page.gitCanonicalSha,
    paginationMode: page.paginationMode,
    completeness: "BOUNDED_L_F11F13",
  };
}

function deriveReadinessStatus(args: {
  holdActive: boolean;
  healthStatus: OperationalReadinessHealth["status"];
  historyAvailability: BoundedHistoryAvailability | ReadinessUnknown;
}): { status: OperationalReadinessStatus; reasons: string[] } {
  const reasons: string[] = [];

  if (args.holdActive) {
    reasons.push("HOLD_ACTIVE");
  }
  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
    reasons.push("HEALTH_NOT_OBSERVED");
  }
  if (args.historyAvailability === "NOT_AVAILABLE") {
    reasons.push("HISTORY_NOT_AVAILABLE");
  } else if (args.historyAvailability === "UNKNOWN") {
    reasons.push("HISTORY_UNKNOWN");
  }

  // Hold blocks transitions → NOT_READY (never READY while hold active).
  if (args.holdActive) {
    return { status: "NOT_READY", reasons };
  }

  // Without an observed health probe, never claim READY.
  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
    return { status: "UNKNOWN", reasons };
  }

  if (args.historyAvailability === "NOT_AVAILABLE") {
    return { status: "UNKNOWN", reasons };
  }

  return { status: "READY", reasons: reasons.length ? reasons : ["OBSERVED_OK"] };
}

export function queryOperationalReadiness(
  input: OperationalReadinessQueryInput = {},
): OperationalReadinessSnapshot {
  const hold = readMethodModeHold();
  const transition = decideMethodModeTransition();
  const historyProvider = input.historyProvider ?? defaultBoundedHistoryProvider;
  const historyPage = historyProvider.read({
    limit: input.historyLimit ?? 10,
  });
  const project = input.project ?? null;
  const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
    p.startsWith("method/"),
  );

  const health: OperationalReadinessHealth = {
    status: "SIMULATED",
    detail:
      "No production readiness probe; simulated/local observation only — not evidence of healthy runtime.",
  };

  const derived = deriveReadinessStatus({
    holdActive: hold.active,
    healthStatus: health.status,
    historyAvailability: historyPage.availability,
  });

  const snapshot: OperationalReadinessSnapshot = {
    schemaVersion: "t-a7-f11.2-l-f11f13",
    accessSurface: "INTERNAL_ONLY",
    readinessStatus: derived.status,
    readinessReasons: derived.reasons,
    evaluatedAt: new Date().toISOString(),
    timezoneNote: "timestamps are ISO-8601 UTC (Z)",
    completeness: "BOUNDED_L_F11F13",
    iam: "NOT_SELECTED",
    persistence: "NOT_SELECTED",
    audit: {
      status: "DEFERRED_EXPLICITLY",
      detail:
        "D2 — read audit journal deferred; no persistent audit store in this lot.",
    },
    observed: {
      projectId: project?.projectId ?? null,
      methodMode: project?.methodMode ?? null,
      projectState: project?.state ?? null,
      hold,
      legacyDependencies: {
        methodModesAuthorized: METHOD_MODES,
        canonicalCorePaths: [...SFIA_CANONICAL_CORE_PATHS],
        methodCorePathCount: methodCores.length,
        note: "Observed allowlisted dependencies only; not a removal plan.",
      },
      migration: {
        status: "NOT_STARTED",
        detail: "No migration authorized in T-A7 L-F11F13.",
      },
      health,
      history: summarizeHistory(historyPage),
      openBlockers: hold.reasons.map((r) => r.code),
    },
    decision: transition.decision,
    recommendation: transition.allowed ? "NO_RECOMMENDATION" : "KEEP_HOLD",
    authorization: transition.authorization,
    mutable: false,
    adminUi: false,
    writeCommands: false,
  };

  return Object.freeze({
    ...snapshot,
    readinessReasons: Object.freeze([...snapshot.readinessReasons]),
    audit: Object.freeze({ ...snapshot.audit }),
    observed: Object.freeze({
      ...snapshot.observed,
      hold: Object.freeze({
        ...snapshot.observed.hold,
        reasons: Object.freeze([...snapshot.observed.hold.reasons]),
      }),
      legacyDependencies: Object.freeze({
        ...snapshot.observed.legacyDependencies,
        methodModesAuthorized: Object.freeze([
          ...snapshot.observed.legacyDependencies.methodModesAuthorized,
        ]),
        canonicalCorePaths: Object.freeze([
          ...snapshot.observed.legacyDependencies.canonicalCorePaths,
        ]),
      }),
      migration: Object.freeze({ ...snapshot.observed.migration }),
      health: Object.freeze({ ...snapshot.observed.health }),
      history: Object.freeze({ ...snapshot.observed.history }),
      openBlockers: Object.freeze([...snapshot.observed.openBlockers]),
    }),
  });
}

/** Contract guard: readiness snapshot exposes no write surface. */
export function assertOperationalReadinessReadOnly(
  snapshot: OperationalReadinessSnapshot,
): void {
  if (
    snapshot.mutable !== false ||
    snapshot.adminUi !== false ||
    snapshot.writeCommands !== false ||
    snapshot.accessSurface !== "INTERNAL_ONLY"
  ) {
    throw new Error(
      "Operational readiness snapshot must remain read-only and INTERNAL_ONLY.",
    );
  }
}

```

### `projects/sfia-studio/app/lib/d1/index.ts`

```typescript
/**
 * Public D1 product surface.
 * Intentionally does NOT re-export MethodMode hold test helpers.
 */
export * from "./types";
export * from "./commands";
export * from "./errors";
export {
  METHOD_MODE_HOLD_REASON_CODES,
  getDefaultMethodModeHoldState,
  readMethodModeHold,
  decideMethodModeTransition,
  assertMethodModeTransitionAllowed,
} from "./methodModeHold";
export type {
  MethodModeHoldReasonCode,
  MethodModeHoldReason,
  MethodModeHoldState,
  MethodModeTransitionDecision,
} from "./methodModeHold";
export {
  queryOperationalReadiness,
  assertOperationalReadinessReadOnly,
} from "./operationalReadiness";
export type {
  OperationalReadinessSnapshot,
  OperationalReadinessQueryInput,
  OperationalReadinessStatus,
  OperationalReadinessAccessSurface,
} from "./operationalReadiness";
export { resetD1DbForTests } from "./db";

```

### `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`

```typescript
/**
 * T-A7 L-F11F13 — F13.4 bounded read-only history foundation.
 * Git remains canonical. Seed enriched + explicit gitCanonicalSha.
 * Pagination: PREFIX_ONLY. Retention: GIT_ONLY. Audit: deferred.
 * No migration, durable store, UI, HTTP, ACL/IAM.
 */

export const BOUNDED_HISTORY_MAX_ITEMS = 50 as const;

/** Pinned tip for documentary seed (main after PR #287). Caller may override. */
export const DEFAULT_BOUNDED_HISTORY_GIT_SHA =
  "770605bcfa4cc3e403ee2c4615c1a115ccd38458" as const;

export type BoundedHistoryAvailability =
  | "PARTIAL"
  | "NOT_AVAILABLE"
  | "EMPTY";

export type BoundedHistoryEntryStatus = "HISTORICAL" | "ACTIVE_REFERENCE";

export type BoundedHistoryPaginationMode = "PREFIX_ONLY";

export type BoundedHistoryRetention = "GIT_ONLY";

export interface BoundedHistoryEntry {
  readonly id: string;
  readonly category: string;
  readonly status: BoundedHistoryEntryStatus;
  readonly occurredAt: string;
  readonly gitProvenance: {
    readonly kind: "git-ref" | "documentary-pack" | "synthetic-fixture";
    readonly ref: string;
  };
  readonly metadata: Readonly<Record<string, string>>;
}

export interface BoundedHistoryPagination {
  readonly mode: BoundedHistoryPaginationMode;
  /** Prefix length requested (clamped). */
  readonly prefixLength: number;
  /** Always null — D4 forbids multi-page cursors in this lot. */
  readonly nextCursor: null;
  readonly hasMore: boolean;
}

export interface BoundedHistoryAudit {
  readonly status: "DEFERRED_EXPLICITLY";
  readonly detail: string;
}

export interface BoundedHistoryPage {
  readonly availability: BoundedHistoryAvailability;
  readonly items: readonly BoundedHistoryEntry[];
  readonly limit: number;
  readonly returned: number;
  readonly truncated: boolean;
  readonly gitCanonical: true;
  /** Full-length Git object id tying this page to a canonical tip. */
  readonly gitCanonicalSha: string;
  readonly pagination: BoundedHistoryPagination;
  readonly paginationMode: BoundedHistoryPaginationMode;
  readonly retention: BoundedHistoryRetention;
  readonly audit: BoundedHistoryAudit;
  readonly mutable: false;
  readonly evaluatedAt: string;
  readonly completeness: "BOUNDED_L_F11F13";
  readonly note: string;
}

export interface BoundedHistoryReadRequest {
  /** Prefix length (PREFIX_ONLY). Alias of historical `limit`. */
  readonly limit?: number;
  readonly prefixLength?: number;
}

export interface DocumentaryBoundedHistoryProviderOptions {
  readonly seed?: readonly BoundedHistoryEntry[];
  /**
   * Canonical Git SHA for this page. Injected by caller / default pinned tip.
   * No arbitrary git shell in product runtime.
   */
  readonly gitCanonicalSha?: string;
}

export class BoundedHistoryMutationError extends Error {
  readonly code = "MUTATION_FORBIDDEN" as const;
  constructor(message = "F13.4 bounded history is read-only; mutation refused.") {
    super(message);
    this.name = "BoundedHistoryMutationError";
  }
}

export interface BoundedHistoryProvider {
  readonly read: (request?: BoundedHistoryReadRequest) => BoundedHistoryPage;
}

const GIT_SHA_FULL_RE = /^[0-9a-f]{40}$/i;

/** Validate a full Git object id (40 hex). Fail closed on invalid input. */
export function assertGitCanonicalSha(sha: string): string {
  if (typeof sha !== "string" || !GIT_SHA_FULL_RE.test(sha.trim())) {
    throw new RangeError(
      "gitCanonicalSha must be a 40-character hexadecimal Git object id",
    );
  }
  return sha.trim().toLowerCase();
}

function freezeEntry(entry: BoundedHistoryEntry): BoundedHistoryEntry {
  return Object.freeze({
    ...entry,
    gitProvenance: Object.freeze({ ...entry.gitProvenance }),
    metadata: Object.freeze({ ...entry.metadata }),
  });
}

function freezePage(page: BoundedHistoryPage): BoundedHistoryPage {
  return Object.freeze({
    ...page,
    items: Object.freeze(page.items.map(freezeEntry)),
    pagination: Object.freeze({ ...page.pagination }),
    audit: Object.freeze({ ...page.audit }),
  });
}

function resolvePrefixLength(request: BoundedHistoryReadRequest): number {
  const raw =
    request.prefixLength !== undefined ? request.prefixLength : request.limit;
  const value = raw ?? BOUNDED_HISTORY_MAX_ITEMS;
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError("prefixLength/limit must be a positive number");
  }
  return Math.min(Math.floor(value), BOUNDED_HISTORY_MAX_ITEMS);
}

/** Documentary/Git references — enriched seed, ordered stably (prefix-only). */
const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
  freezeEntry({
    id: "hist-t-a7-f03-f11-f13",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T17:54:21.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "dad6e00344ad5750cd352db3af33c150c780491b",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "285",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-readme-post-merge",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T18:17:54.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "2a3c59c46c105bae458d1a7329079c5f591da421",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "286",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-technical-readiness-frame",
    category: "readiness-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T18:40:10.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563",
    },
    metadata: {
      pack: "t-a7-technical-readiness-framing",
      commit: "docs-frame",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-lot1-feat",
    category: "readiness-foundation",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T19:20:08.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "47e26fdc851b82588aa5225aca84307543147160",
    },
    metadata: {
      commit: "feat-bounded-foundations",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-lot1-harden",
    category: "readiness-foundation",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T19:37:59.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "b6a19335f5116940175f5986492e3693722563bc",
    },
    metadata: {
      commit: "fix-harden-override",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-lot1-merged-main",
    category: "integration",
    status: "ACTIVE_REFERENCE",
    occurredAt: "2026-07-28T19:52:20.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "770605bcfa4cc3e403ee2c4615c1a115ccd38458",
    },
    metadata: {
      pr: "287",
      note: "lot-1-integrated-on-main",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-technical-readiness-pack-path",
    category: "documentary-pack",
    status: "ACTIVE_REFERENCE",
    occurredAt: "2026-07-28T22:45:18.000Z",
    gitProvenance: {
      kind: "documentary-pack",
      ref: "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/",
    },
    metadata: {
      lot: "n3-completion-framing",
    },
  }),
]);

function buildPage(args: {
  availability: BoundedHistoryAvailability;
  items: readonly BoundedHistoryEntry[];
  prefixLength: number;
  truncated: boolean;
  gitCanonicalSha: string;
  note: string;
}): BoundedHistoryPage {
  return freezePage({
    availability: args.availability,
    items: args.items,
    limit: args.prefixLength,
    returned: args.items.length,
    truncated: args.truncated,
    gitCanonical: true,
    gitCanonicalSha: args.gitCanonicalSha,
    pagination: {
      mode: "PREFIX_ONLY",
      prefixLength: args.prefixLength,
      nextCursor: null,
      hasMore: args.truncated,
    },
    paginationMode: "PREFIX_ONLY",
    retention: "GIT_ONLY",
    audit: {
      status: "DEFERRED_EXPLICITLY",
      detail: "D2 — read audit deferred; no persistent access journal.",
    },
    mutable: false,
    evaluatedAt: new Date().toISOString(),
    completeness: "BOUNDED_L_F11F13",
    note: args.note,
  });
}

export function createDocumentaryBoundedHistoryProvider(
  options: DocumentaryBoundedHistoryProviderOptions | readonly BoundedHistoryEntry[] = {},
): BoundedHistoryProvider {
  // Back-compat: previous signature accepted seed array as first arg.
  const opts: DocumentaryBoundedHistoryProviderOptions = Array.isArray(options)
    ? { seed: options }
    : options;

  const frozenSeed = Object.freeze(
    (opts.seed ?? DOCUMENTARY_SEED).map(freezeEntry),
  );
  const gitCanonicalSha = assertGitCanonicalSha(
    opts.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  );

  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      const prefixLength = resolvePrefixLength(request);
      const slice = frozenSeed.slice(0, prefixLength);
      return buildPage({
        availability: frozenSeed.length === 0 ? "EMPTY" : "PARTIAL",
        items: slice,
        prefixLength,
        truncated: frozenSeed.length > slice.length,
        gitCanonicalSha,
        note:
          "Git remains canonical (D5 GIT_ONLY). PREFIX_ONLY pagination (D4). " +
          "Page tied to injected/pinned gitCanonicalSha — not a live git shell.",
      });
    },
  };
}

export function createUnavailableBoundedHistoryProvider(
  options: Pick<DocumentaryBoundedHistoryProviderOptions, "gitCanonicalSha"> = {},
): BoundedHistoryProvider {
  const gitCanonicalSha = assertGitCanonicalSha(
    options.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  );
  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      let prefixLength = 1;
      try {
        prefixLength = resolvePrefixLength(request);
      } catch {
        prefixLength = 1;
      }
      return buildPage({
        availability: "NOT_AVAILABLE",
        items: [],
        prefixLength,
        truncated: false,
        gitCanonicalSha,
        note: "Bounded history provider unavailable; Git remains canonical (GIT_ONLY).",
      });
    },
  };
}

/** Refuse mutation attempts against a frozen page (contract guard). */
export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
  if (
    page.mutable !== false ||
    page.gitCanonical !== true ||
    page.retention !== "GIT_ONLY" ||
    page.paginationMode !== "PREFIX_ONLY"
  ) {
    throw new BoundedHistoryMutationError(
      "Bounded history page must declare mutable=false, gitCanonical=true, GIT_ONLY, PREFIX_ONLY.",
    );
  }
  assertGitCanonicalSha(page.gitCanonicalSha);
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page as any).items = [];
    throw new BoundedHistoryMutationError(
      "Bounded history page was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page.items as any).push({});
    throw new BoundedHistoryMutationError(
      "Bounded history items array was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
  }
}

export const defaultBoundedHistoryProvider =
  createDocumentaryBoundedHistoryProvider();

```

### `projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts`

```typescript
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertOperationalReadinessReadOnly,
  queryOperationalReadiness,
} from "@/lib/d1/operationalReadiness";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold.test-only";
import {
  createDocumentaryBoundedHistoryProvider,
  createUnavailableBoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import fs from "node:fs";
import path from "node:path";

describe("T-A7 L-F11F13 F11.2 operational readiness (internal-only)", () => {
  beforeEach(() => {
    resetMethodModeHoldForTests();
  });

  afterEach(() => {
    resetMethodModeHoldForTests();
  });

  it("returns a frozen INTERNAL_ONLY read-only snapshot with hold and blockers", () => {
    const snap = queryOperationalReadiness();
    expect(snap.schemaVersion).toBe("t-a7-f11.2-l-f11f13");
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
    expect(snap.mutable).toBe(false);
    expect(snap.adminUi).toBe(false);
    expect(snap.writeCommands).toBe(false);
    expect(snap.iam).toBe("NOT_SELECTED");
    expect(snap.persistence).toBe("NOT_SELECTED");
    expect(snap.audit.status).toBe("DEFERRED_EXPLICITLY");
    expect(snap.observed.hold.active).toBe(true);
    expect(snap.observed.openBlockers.length).toBeGreaterThan(0);
    expect(snap.decision).toBe("BLOCK");
    expect(snap.authorization).toBe("NOT_AUTHORIZED_WHEN_HOLD_ACTIVE");
    expect(snap.observed.migration.status).toBe("NOT_STARTED");
    expect(snap.observed.health.status).toBe("SIMULATED");
    expect(snap.observed.history.gitCanonical).toBe(true);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.observed.history.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
    expect(snap.readinessStatus).toBe("NOT_READY");
    expect(snap.readinessReasons).toContain("HOLD_ACTIVE");
    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
    assertOperationalReadinessReadOnly(snap);
    expect(() => {
      // @ts-expect-error intentional mutation attempt
      snap.mutable = true;
    }).toThrow();
  });

  it("never treats incomplete/simulated health as READY", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const snap = queryOperationalReadiness();
    expect(snap.decision).toBe("ALLOW");
    expect(snap.readinessStatus).toBe("UNKNOWN");
    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
    expect(snap.readinessStatus).not.toBe("READY");
  });

  it("serializes stably for core contract fields", () => {
    const snap = queryOperationalReadiness();
    const json = JSON.stringify({
      schemaVersion: snap.schemaVersion,
      accessSurface: snap.accessSurface,
      readinessStatus: snap.readinessStatus,
      mutable: snap.mutable,
      writeCommands: snap.writeCommands,
      adminUi: snap.adminUi,
      iam: snap.iam,
      persistence: snap.persistence,
      audit: snap.audit.status,
      decision: snap.decision,
      blockers: snap.observed.openBlockers,
    });
    expect(json).toContain("t-a7-f11.2-l-f11f13");
    expect(json).toContain("INTERNAL_ONLY");
    expect(json).toContain("B5_OPEN");
    expect(json).toContain("DEFERRED_EXPLICITLY");
  });

  it("exposes NOT_AVAILABLE history without inventing READY", () => {
    const snap = queryOperationalReadiness({
      historyProvider: createUnavailableBoundedHistoryProvider(),
    });
    expect(snap.observed.history.availability).toBe("NOT_AVAILABLE");
    expect(snap.observed.history.returned).toBe(0);
    expect(snap.readinessStatus).not.toBe("READY");
  });

  it("reflects inactive hold without recommending keep", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const snap = queryOperationalReadiness();
    expect(snap.decision).toBe("ALLOW");
    expect(snap.recommendation).toBe("NO_RECOMMENDATION");
  });

  it("integrates PREFIX_ONLY history summary", () => {
    const snap = queryOperationalReadiness({
      historyProvider: createDocumentaryBoundedHistoryProvider(),
      historyLimit: 2,
    });
    expect(snap.observed.history.returned).toBe(2);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.completeness).toBe("BOUNDED_L_F11F13");
  });

  it("has no HTTP readiness route under app/", () => {
    const appRouter = path.resolve(__dirname, "../../app");
    if (!fs.existsSync(appRouter)) return;
    const hasReadinessRoute = fs
      .readdirSync(appRouter, { recursive: true })
      .map(String)
      .some((p) => /readiness|cutover/i.test(p) && /route\.ts$/.test(p));
    expect(hasReadinessRoute).toBe(false);
  });
});

```

### `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  BOUNDED_HISTORY_MAX_ITEMS,
  DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  assertBoundedHistoryImmutable,
  assertGitCanonicalSha,
  createDocumentaryBoundedHistoryProvider,
  createUnavailableBoundedHistoryProvider,
  BoundedHistoryMutationError,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold.test-only";

const ALT_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

describe("T-A7 L-F11F13 F13.4 bounded history foundation", () => {
  it("reads a bounded immutable documentary page with Git canonical SHA", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 2 });
    expect(page.gitCanonical).toBe(true);
    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
    expect(page.mutable).toBe(false);
    expect(page.availability).toBe("PARTIAL");
    expect(page.returned).toBe(2);
    expect(page.truncated).toBe(true);
    expect(page.limit).toBe(2);
    expect(page.paginationMode).toBe("PREFIX_ONLY");
    expect(page.pagination.mode).toBe("PREFIX_ONLY");
    expect(page.pagination.nextCursor).toBeNull();
    expect(page.pagination.hasMore).toBe(true);
    expect(page.retention).toBe("GIT_ONLY");
    expect(page.audit.status).toBe("DEFERRED_EXPLICITLY");
    expect(page.completeness).toBe("BOUNDED_L_F11F13");
    assertBoundedHistoryImmutable(page);
  });

  it("enforces PREFIX_ONLY max prefix length", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 10_000 });
    expect(page.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.pagination.prefixLength).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
  });

  it("accepts prefixLength alias and keeps stable order", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const a = provider.read({ prefixLength: 3 });
    const b = provider.read({ limit: 3 });
    expect(a.items.map((i) => i.id)).toEqual(b.items.map((i) => i.id));
    expect(a.items[0]?.id).toBe("hist-t-a7-f03-f11-f13");
    expect(a.pagination.nextCursor).toBeNull();
  });

  it("covers volume bounds 0/1/max/max+1 semantics", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    expect(() => provider.read({ limit: 0 })).toThrow(/positive/);
    const one = provider.read({ limit: 1 });
    expect(one.returned).toBe(1);
    const max = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS });
    expect(max.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
    expect(max.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    const over = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS + 1 });
    expect(over.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(over.returned).toBe(max.returned);
  });

  it("ties page to injected gitCanonicalSha and rejects invalid SHA", () => {
    const provider = createDocumentaryBoundedHistoryProvider({
      gitCanonicalSha: ALT_SHA,
    });
    const page = provider.read({ limit: 1 });
    expect(page.gitCanonicalSha).toBe(ALT_SHA);
    expect(() =>
      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "not-a-sha" }),
    ).toThrow(/40-character/);
    expect(() =>
      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "abcd" }),
    ).toThrow(/40-character/);
    expect(() => assertGitCanonicalSha("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")).toThrow();
  });

  it("enriches seed with lot-1 main tip reference", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({
      limit: BOUNDED_HISTORY_MAX_ITEMS,
    });
    const tip = page.items.find((i) => i.id === "hist-t-a7-lot1-merged-main");
    expect(tip).toBeDefined();
    expect(tip?.gitProvenance.ref).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
    expect(tip?.metadata.pr).toBe("287");
  });

  it("supports unavailable provider without claiming full archive", () => {
    const page = createUnavailableBoundedHistoryProvider().read();
    expect(page.availability).toBe("NOT_AVAILABLE");
    expect(page.items).toEqual([]);
    expect(page.gitCanonical).toBe(true);
    expect(page.retention).toBe("GIT_ONLY");
    expect(page.paginationMode).toBe("PREFIX_ONLY");
    expect(page.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
  });

  it("refuses mutation semantics via contract helper", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({ limit: 1 });
    expect(() => assertBoundedHistoryImmutable(page)).not.toThrow(
      BoundedHistoryMutationError,
    );
  });

  it("integrates with F11.2 readiness without circular product writes", () => {
    resetMethodModeHoldForTests();
    const snap = queryOperationalReadiness({
      historyProvider: createDocumentaryBoundedHistoryProvider({
        gitCanonicalSha: ALT_SHA,
      }),
      historyLimit: 1,
    });
    expect(snap.observed.history.returned).toBe(1);
    expect(snap.observed.history.availability).toBe("PARTIAL");
    expect(snap.observed.history.gitCanonicalSha).toBe(ALT_SHA);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.writeCommands).toBe(false);
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
  });

  it("preserves back-compat seed-array factory signature", () => {
    const page = createDocumentaryBoundedHistoryProvider([]).read({ limit: 5 });
    expect(page.availability).toBe("EMPTY");
    expect(page.returned).toBe(0);
    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
  });
});

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md`

```markdown
# T-A7 — Technical readiness framing

| Champ | Valeur |
|-------|--------|
| **Mise à jour N3** | 2026-07-28 22:45:18 CEST (+0200) |
| **Mise à jour D1–D8 / L-F11F13** | 2026-07-28 22:58:09 CEST (+0200) |
| **Mise à jour résultats L-F11F13** | 2026-07-28 23:22:34 CEST (+0200) |
| **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` · **implémenté localement** (voir `17`) |
| **Gate N3 (consommé)** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 FOR F11.2 AND F13.4 COMPLETION FRAMING ONLY — DEFINE FINAL SURFACE GAPS DEPENDENCIES IAM PERSISTENCE AND RUNTIME BOUNDARIES — NO IMPLEMENTATION DELIVERY OR CUTOVER` |
| **O3** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287) · merge `770605bc…`) |
| **F03.3** | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| **P03–P11** | P03–P07 · P10–P11 **PARTIAL** · P08 · P09 **MISSING** |
| **F11.2** | contrat **INTERNAL_ONLY** durci (L-F11F13) · pas HTTP/UI · **≠ cutover-complete** |
| **F13.4** | seed enrichi + SHA Git · PREFIX_ONLY · GIT_ONLY · **≠ archive complète / cutover** |
| **IAM / Persistence** | `NOT SELECTED` / `NOT SELECTED` |
| **B5 / R1 / R-M01** | `OPEN` |
| **HARD** | `OPEN HARD` |
| **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
| **Delivery / cutover** | `NOT AUTHORIZED` |
| **Push / PR projet (branche docs courante)** | **aucun** |

## Index du pack

| Doc | Sujet |
|-----|-------|
| `01`–`09` | framing readiness / O2 |
| `10` | lot 1 borné (O3) |
| `11` | post-merge + options N1–N5 |
| `12` | F11.2 completion surface & gaps |
| `13` | F13.4 completion surface & gaps |
| `14` | dépendances & frontières runtime |
| `15` | options de lots bornés futurs |
| `16` | decision pack Morris F11/F13 |
| `17` | résultats lot L-F11F13 (implémentation locale) |

## Lot 1 intégré sur `main`

1. MethodMode hold (défaut actif ; override test-only hors barrel)
2. F11.2 readiness read-only interne
3. F13.4 historique RO borné (Git canonique)

## Cadrage N3 + lot L-F11F13 (local)

Documents `12`–`16` : surfaces, gaps, D1–D8. Document `17` : résultats d’implémentation locale.

**N3 ≠ cutover. L-F11F13 local ≠ push/PR/delivery.**

## Anti-claims

- lot 1 intégré ≠ T-A7 entièrement ouvert ≠ delivery/cutover ready
- L-F11F13 local ≠ HTTP public ≠ IAM ≠ persistence
- contrat interne F11 ≠ API réseau
- seed F13 + SHA ≠ store concurrent à Git
- hold ≠ blockers fermés
- tests verts ≠ RUN READY / RGPD VALIDATED

## Gate candidat suivant

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` · `READY FOR PR READINESS`

## Verdict courant

`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY — F13 SEED+SHA PREFIX-ONLY GIT-ONLY — AUDIT DEFERRED — IAM AND PERSISTENCE NOT SELECTED — TESTS PASSED — BLOCKERS OPEN — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`

---

## Historique post-merge (lot 1)

> Section **historique**. Voir aussi `11-t-a7-lot1-post-merge-and-next-blocker-framing.md`.

Post-merge confirmé 2026-07-28 : PR #287 · checks `30393629328` / `30393814783` · branche source préservée · README aligné main.

Gate d’intégration et options N1–N5 : document `11`. N3 a depuis été **sélectionné** par Morris (ce cycle).

---

## Historique du lot local pré-intégration

> Section **historique** uniquement. Ne décrit **pas** l’état courant sur `main`.

Avant PR #287, le lot 1 existait uniquement en local sur
`framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness`
au-dessus de `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421`.

À cette étape, le résumé d’état indiquait correctement :

- `Push / PR projet : aucun`
- gate d’intégration candidat `NOT CONSUMED`
- verdict se terminant par `PROJECT BRANCH NOT PUSHED`

Ces formulations étaient **vraies avant** push/PR/merge #287 (2026-07-28 ~21:49–21:52 CEST).
Elles sont **obsolètes** pour l’état courant documenté en tête de ce README.

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/11-t-a7-lot1-post-merge-and-next-blocker-framing.md`

```markdown
# 11 — T-A7 lot 1 post-merge & next blocker-reduction framing

| Champ | Valeur |
|-------|--------|
| **Document** | `11-t-a7-lot1-post-merge-and-next-blocker-framing.md` |
| **Date/heure/fuseau** | 2026-07-28 22:16:12 CEST (+0200) |
| **Gate consommé** | `GO POST-MERGE T-A7 FIRST BOUNDED DEVELOPMENT LOT — CONFIRM MAIN INTEGRATION — CORRECT STALE LOCAL-ONLY README STATUS IF NEEDED — FRAME NEXT BLOCKER-REDUCTION CYCLE — NO DELIVERY OR CUTOVER` |
| **Base** | `origin/main` @ `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| **Branche locale** | `docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing` |
| **Push / PR projet** | **aucun** (cycle documentaire local) |
| **Code / tests** | **aucune modification** |

---

## 1. Sources Git

| Source | Référence |
|--------|-----------|
| PR | [#287](https://github.com/mcleland147/sfia-workspace/pull/287) |
| Merge | `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| Parents | `2a3c59c…` + `b6a19335…` |
| Tree | `712720a1a2371f98c137a6c8b29299ac556299c7` |
| Checks PR | run `30393629328` SUCCESS |
| Checks post-merge | run `30393814783` SUCCESS |
| Branche source | `origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` @ `b6a19335…` |
| Handoff intégration | blob `2d0959c456f728a1ef0ad7be43ef3197108eba47` |
| Pack | `t-a7-technical-readiness-framing/` (01–10 + README) |

Quatre commits intégrés :

1. `a33f4a32…` docs framing
2. `01410377…` test evidence O2
3. `47e26fdc…` feat foundations
4. `b6a19335…` fix harden override

---

## 2. Confirmation post-merge

| Contrôle | Attendu | Observé | Preuve | Verdict |
|----------|---------|---------|--------|---------|
| PR #287 mergée | MERGED | MERGED 2026-07-28T19:52:20Z | `gh pr view 287` | PASS |
| Merge commit | `770605bc…` | exact | `origin/main` | PASS |
| Parents | main pré + HEAD lot | `2a3c59c…` + `b6a19335…` | `git cat-file -p` | PASS |
| Tree | tree lot | `712720a1…` | merge object | PASS |
| 4 commits | présents | 4 | log PR | PASS |
| Branche source | préservée | `b6a19335…` remote | `ls-remote` | PASS |
| Checks PR | verts | Detect/Build/Gate SUCCESS | run `30393629328` | PASS |
| Checks post-merge | verts | Detect/Build/Gate SUCCESS | run `30393814783` | PASS |
| Blobs hold/F11/F13 | présents | hold `30220327…` · test-only `ad9d1a5c…` · F11 `1ae8deac…` · F13 `2be059af…` | `git rev-parse main:path` | PASS |
| Barrel D1 | sans override | BARREL_CLEAN | `index.ts` | PASS |
| Override | test-only | `methodModeHold.test-only.ts` | blob `ad9d1a5c…` | PASS |
| Hold | ACTIVE défaut | module + raisons B5/R1/… | code main | PASS |
| F11.2 | RO fondation | `operationalReadiness.ts` | main | PASS |
| F13.4 | RO bornée | `boundedHistoryRead.ts` | main | PASS |
| Déploiement/cutover | non déclenché | CI Studio seulement | runs GitHub | PASS |

**Verdict :** `T-A7 LOT 1 MAIN INTEGRATION CONFIRMED — POST-MERGE VERIFIED`

---

## 3. Surfaces intégrées (état)

| Surface | État | Limite |
|---------|------|--------|
| MethodMode hold | intégré · défaut ACTIVE · CONFLICT | pas de hold DB persistant · pas IAM |
| Test override | test-only · hors barrel · boundary tests | store module-level résiduel Info |
| F11.2 | query interne RO · frozen snapshot | pas d’API HTTP · pas d’UI admin |
| F13.4 | provider documentary/Git · max 50 · immutable | pas de vue runtime finale · pas ACL |

---

## 4. P03–P11 (sans promotion artificielle)

| ID | État actuel | Preuves sur main | Écart restant | Bloquant pour |
|----|-------------|------------------|---------------|---------------|
| P03 | PARTIAL | `canonicalPaths` · probes | adoption produit globale | cutover / remplacement OA |
| P04 | PARTIAL | `sourceLoader` · asymmetry probe | loader cutover unique | cutover |
| P05 | PARTIAL | CKC · OA sans import method | guidance-only | cutover |
| P06 | PARTIAL | hold lot 1 | session OA correlation | cutover · delivery prep |
| P07 | PARTIAL | hold bloque transitions | MethodMode toujours présent | cutover |
| P08 | MISSING | allowlist method active | lectures `method/**` absentes OA | cutover · lot N1 |
| P09 | MISSING | UI OA native absente | badges/surfaces OA | cutover · lot N1 |
| P10 | PARTIAL | import boundaries · isolation probe | live runtime OPS1↔OA | cutover · lot N2 |
| P11 | PARTIAL | F13.4 fondation | vue RO finale | cutover · lot N3 |

Aucun P03–P11 en `SATISFIED` pour le **remplacement** Option A.

Distinction :

- **prochain développement borné** : peut cibler une fondation/preuve (N1–N4) sous gate Morris ;
- **delivery preparation / delivery / cutover** : toujours `NOT AUTHORIZED`.

---

## 5. F03.3

`F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED`

- critères documentaires / décisions : largement satisfaits ;
- critères d’implémentation cutover : **non** satisfaits ;
- lot 1 a réduit des blockers d’implémentation (hold · F11/F13 fondations) **sans** fermer B5/R1/R-M01/HARD.

**Ne pas déclarer** F03.3 fully satisfied.

---

## 6. Blockers ouverts

| Blocker | Preuve | Risque | Dépendances | Réductible maintenant ? | Gate requis |
|---------|--------|--------|-------------|-------------------------|-------------|
| P08 lectures method | allowlist active · probes | lecture legacy silencieuse | F03 · path-policy | cadrage oui · code sous gate N1 | N1 |
| P09 badges/UI OA | absence UI OA | confusion UX | F11 · design | cadrage oui · UI sous gate futur | N1 |
| Live OPS1↔OA isolation | static PARTIAL · live UNKNOWN | double identité | W1-D04 · env `.sfia-exec` | preuve oui · pas de mod OPS1 | N2 |
| F11.2 API/exposition finale | fondation RO seule | claim cutover prématuré | IAM? UI? | cadrage écart oui | N3 |
| F13.4 vue runtime finale | fondation métadonnées | mutation historique | persistence? ACL? | cadrage écart oui | N3 |
| Rollback R1–R3 | doc `04` NOT TESTED | rollback non prouvé | delivery futur | cadrage oui · pas d’exécution | N4 |
| B5 | OPEN · STOP BEFORE DELIVERY | delivery prématuré | HARD | **non fermer** | N4 / gate delivery |
| R1 atomicité | OPEN | incohérence état | delivery | **non fermer** | N4 |
| R-M01 ClaimEvaluator | OPEN | claims non prêts | T-A6 | **non fermer** | N4 |
| HARD | OPEN HARD | exécution réelle | B5 | **non fermer** | delivery/cutover |
| Persistence | NOT SELECTED | store caché | F13 | **ne pas sélectionner** | gate futur |
| IAM | NOT SELECTED | exposition ACL | F11 | **ne pas sélectionner** | gate futur |
| RGPD production | NOT VALIDATED | conformité | IAM/data | hors lot | gate futur |

---

## 7. Dette / limites du lot 1

- hold non persistant DB ;
- F11/F13 incomplets vs surfaces finales ;
- P08/P09 toujours MISSING ;
- live OPS1 non instrumenté ;
- R1–R3 non testés ;
- README local pré-intégration était stale (corrigé dans ce cycle).

---

## 8. Options prochain cycle

### N1 — P08/P09 replacement foundations

| Champ | Contenu |
|-------|---------|
| Objectif | Cadrer capacités manquantes pour lectures `method/**` absentes OA (P08) et surfaces/badges OA (P09) **sans implémenter** |
| Valeur immédiate | Empêche un lot code trop large ; clarifie fichiers protégés |
| Blockers réduits | compréhension P08/P09 (pas fermeture) |
| Non réduits | B5 · HARD · F11/F13 finales · live OPS1 |
| Code potentiel futur | loader/CI no-fallback · design UI OA (gates distincts) |
| Dépendances | F03 · path-policy · design UX |
| Risques | glissement vers retrait legacy / cutover |
| Dette | pack doc supplémentaire |
| Réversibilité | haute (doc) |
| Gate Morris | `GO FRAME T-A7 N1 P08 P09 REPLACEMENT FOUNDATIONS — NO METHOD RETIREMENT UI DELIVERY OR CUTOVER` |
| Impact delivery/cutover | aucun autorisé |
| Profil | Critical |

### N2 — OPS1 runtime isolation evidence

| Champ | Contenu |
|-------|---------|
| Objectif | Compléter preuves dynamiques live OPS1↔OA et hits allowlist **sans modifier OPS1** |
| Valeur immédiate | réduit UNKNOWN live / volumes |
| Blockers réduits | profondeur P10 evidence |
| Non réduits | P08/P09 · F11/F13 finales · B5 |
| Code potentiel futur | probes/instrumentation read-only |
| Dépendances | environnement `.sfia-exec` / session live |
| Risques | fausse confiance « isolation cutover » |
| Dette | campagne evidence |
| Réversibilité | haute |
| Gate Morris | `GO COLLECT T-A7 N2 OPS1 RUNTIME ISOLATION EVIDENCE — NO OPS1 FUNCTIONAL CHANGE DELIVERY OR CUTOVER` |
| Impact delivery/cutover | aucun |
| Profil | Critical |

### N3 — F11.2/F13.4 completion framing

| Champ | Contenu |
|-------|---------|
| Objectif | Définir l’écart fondations intégrées ↔ surfaces finales **sans** choisir persistence, IAM ou UI |
| Valeur immédiate | cadre le prochain lot technique sur surfaces déjà livrées |
| Blockers réduits | ambiguïté F11/F13 « done » |
| Non réduits | P08/P09 · live OPS1 · B5/HARD |
| Code potentiel futur | API interne élargie / vue RO (gates futurs) |
| Dépendances | lot 1 sur main · décisions F11.2/F13.4 |
| Risques | sélection implicite IAM/persistence |
| Dette | doc d’écart |
| Réversibilité | haute |
| Gate Morris | `GO FRAME T-A7 N3 F11.2 F13.4 COMPLETION GAP — NO PERSISTENCE IAM UI DELIVERY OR CUTOVER` |
| Impact delivery/cutover | aucun |
| Profil | Critical |

### N4 — Rollback and blocker-control readiness

| Champ | Contenu |
|-------|---------|
| Objectif | Cadrer R1–R3, B5, R1, R-M01, HARD **sans les fermer** |
| Valeur immédiate | readiness gouvernance avant tout lot delivery-adjacent |
| Blockers réduits | flou sur rollback / stop conditions |
| Non réduits | P08/P09 · F11/F13 finales |
| Code potentiel futur | drills rollback (gate distinct) |
| Dépendances | doc `04` · `06` |
| Risques | pseudo-fermeture de blockers |
| Dette | pack gouvernance |
| Réversibilité | haute |
| Gate Morris | `GO FRAME T-A7 N4 ROLLBACK AND BLOCKER CONTROLS — KEEP B5 R1 R-M01 HARD OPEN — NO DELIVERY OR CUTOVER` |
| Impact delivery/cutover | aucun |
| Profil | Critical |

### N5 — Custom / différer

Différer tout nouveau lot T-A7 ; capitaliser ailleurs ; attendre décision produit.

Gate : `GO DEFER T-A7 NEXT BLOCKER-REDUCTION LOT — NO DEVELOPMENT DELIVERY OR CUTOVER`

---

## 9. Comparaison

| Critère | N1 | N2 | N3 | N4 | N5 |
|---------|----|----|----|----|-----|
| Utile maintenant | moyen | fort (UNKNOWN) | **fort** (suite lot 1) | moyen | contexte-dépendant |
| Proximité produit | élevée (risque) | preuve | cadrage produit | gouvernance | nulle |
| Risque cutover drift | élevé | moyen | contrôlé | bas | nul |
| Besoin code | futur | probes possibles | non | non | non |
| Continuité lot 1 | partielle | faible | **directe** | latérale | — |

**Combinaison** N3+N2 possible seulement si périmètre reste purement cadrage/evidence — sinon séparer.

---

## 10. Recommandation

**Statut :** `RECOMMENDED — NOT DECIDED`

**Option recommandée :** **N3** — F11.2/F13.4 completion framing

### Challenge

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | oui — évite de traiter les fondations comme finales |
| Blocker réduit ? | ambiguïté « F11/F13 done » ; prépare lot technique borné |
| Dette ? | documentaire seulement |
| Plus simple ? | oui vs N1 (retrait/UI) ou code immédiat |
| Repo-first ? | s’appuie sur blobs main lot 1 |
| Exécution vs arbitrage ? | arbitrage Morris puis cadrage Cursor |
| Gate nécessaire ? | oui |
| Produit vs preuve ? | rapproche du **cadrage produit** des surfaces déjà intégrées |

**Alternatives fortes :** N2 (si priorité = UNKNOWN live) · N4 (si priorité = stop/rollback avant tout code).

**Non recommandé maintenant :** N1 comme premier lot post-intégration (trop proche cutover/retrait/UI sans écart F11/F13 clarifié).

---

## 11. Bulletin Morris

### Question

Quel prochain cycle T-A7 doit être ouvert après l’intégration du lot 1 ?

### Options

- **N1** — P08/P09 replacement foundations (cadrage)
- **N2** — OPS1 runtime isolation evidence
- **N3** — F11.2/F13.4 completion framing *(recommandé, non décidé)*
- **N4** — Rollback and blocker-control readiness
- **N5** — Custom / différer

### État repo

- `main` @ `770605bc…` · lot 1 intégré · hold/F11/F13 fondations présentes
- T-A7 `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY`
- B5/R1/R-M01/HARD OPEN · delivery/cutover NOT AUTHORIZED

### Bénéfices / blockers / risques / dette

Voir §8–§10. Aucune option ne ferme B5/HARD ni n’autorise delivery.

### Fichiers candidats (futurs, non touchés ici)

- pack `t-a7-technical-readiness-framing/` extensions
- éventuellement probes read-only (N2) sous gate

### Fichiers protégés

- `method/**` · OPS1 fonctionnel · migrations · IAM · UI runtime · CI

### Tests candidats

- aucune exécution dans ce cycle ; futurs : boundaries · probes live (N2) · non-régression hold

### Stop conditions

- toute demande de fermer B5/HARD ;
- sélection persistence/IAM dans un lot « cadrage » ;
- push/PR non autorisés ;
- retrait `method/**` ;
- claim delivery/cutover.

### Profil

Critical

### Gate générique

`GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N1 N2 N3 N4 OR CUSTOM — NO DELIVERY OR CUTOVER`

**Statut bulletin :** `MORRIS DECISION REQUIRED`

---

## 12. Anti-claims

- post-merge confirmé ≠ delivery ready ;
- lot 1 intégré ≠ T-A7 entièrement ouvert ;
- README corrigé ≠ nouvelle baseline produit ;
- cadrage suivant ≠ lot autorisé ;
- recommandation ≠ décision ;
- fondations F11/F13 ≠ surfaces finales ;
- blockers documentés ≠ blockers fermés.

---

## 13. Gate candidat

`GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N1 N2 N3 N4 OR CUSTOM — NO DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED`

---

## 14. Verdict

`T-A7 LOT 1 POST-MERGE CONFIRMED — PR #287 AND POST-MERGE CHECKS VERIFIED — SOURCE BRANCH PRESERVED — README ALIGNED TO MAIN WITH HISTORICAL LOCAL-ONLY SECTION — P03 TO P11 AND F03.3 REASSESSED WITHOUT PROMOTION — BLOCKERS STRUCTURED — N1 TO N5 FRAMED — MORRIS DECISION REQUIRED — NO CODE PUSH PR MERGE DELIVERY OR CUTOVER`

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md`

```markdown
# 12 — F11.2 completion surface & gaps

| Champ | Valeur |
|-------|--------|
| **Document** | `12-f11-2-completion-surface-and-gaps.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Décision parent** | D-T-A7-F11 = **F11.2** (`DECIDED`) |
| **Gate N3** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 …` · **N3 DECIDED** |
| **Base Git** | `origin/main` @ `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| **Implémentation** | **interdite** dans le cycle N3 · **réalisée localement** en L-F11F13 (voir `17`) |
| **Statut F11.2** | contrat INTERNAL_ONLY L-F11F13 · **≠ cutover-complete** |

---

## 1. État actuel (main)

| Élément | Preuve | Limite |
|---------|--------|--------|
| Module | `app/lib/d1/operationalReadiness.ts` | interne TypeScript |
| Entrée | `queryOperationalReadiness(input?)` | pas de route HTTP |
| Snapshot | `schemaVersion: t-a7-f11.2-l-f11f13` · frozen | `completeness: BOUNDED_L_F11F13` · `accessSurface: INTERNAL_ONLY` |
| Readiness | `READY` \| `NOT_READY` \| `UNKNOWN` | absence signal ≠ READY |
| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` | contrats RO |
| Hold | lu via `readMethodModeHold` / `decideMethodModeTransition` | défaut ACTIVE |
| History | résumé F13 (`availability`, `returned`, `gitCanonical`, `gitCanonicalSha`, `PREFIX_ONLY`) | pas d’items complets |
| Health | `SIMULATED` | pas de probe prod |
| Audit | `DEFERRED_EXPLICITLY` | D2 |
| IAM / Persistence | `NOT_SELECTED` | D7 / D8 |
| Migration | `NOT_STARTED` | pas de schéma |
| Tests | `t-a7-operational-readiness.test.ts` | L-F11F13 |
| Barrel | exporté depuis `lib/d1/index.ts` (API produit lecture) | ≠ HTTP public |

**Anti-claim :** contrat interne L-F11F13 ≠ API HTTP · ≠ cutover ready · ≠ IAM.

---

## 2. Finalité cible F11.2

Exigence décidée (pack F03/F11/F13) : **API minimale de lecture / readiness sans UI admin dédiée**, avant tout cutover futur.

Finalité :

- exposer un **état opérationnel observé** (MethodMode, hold, blockers, deps legacy, migration, health, historique borné) ;
- séparer **observed / decision / recommendation / authorization** ;
- rester **strictement read-only** ;
- permettre audit / support / gouvernance **sans** mutation ni console admin.

Consommateurs candidats (non autorisés ici) :

| Consommateur | Besoin | Statut |
|--------------|--------|--------|
| Services serveur internes OA/D1 | snapshot local | partiel (appel direct) |
| Opérateur / Morris (via surface future) | lecture gouvernée | **non exposé** |
| CI / probes | non-régression RO | tests unitaires existants |
| UI admin | — | **hors F11.2** (F11.3 non retenue) |
| Clients HTTP externes | — | **non sélectionné** |

---

## 3. Contrat fonctionnel cible (minimal)

### 3.1 Données exposées (cible)

| Domaine | Fondation actuelle | Cible minimale complète | Gap |
|---------|--------------------|-------------------------|-----|
| Identity projet | `projectId` optionnel injecté | résolution projet bornée documentée | qui fournit le projet ? |
| MethodMode | mode + state si projet fourni | lecture mode/state stable + version/optimistic si pertinent | pas de binding session OA |
| Hold | actif + reasons codes | hold + provenance + evaluatedAt + codes stables | OK partiel |
| Blockers | codes hold | mapping explicite B5/R1/R-M01/HARD ≠ fermeture | OK partiel |
| Legacy deps | METHOD_MODES + canonical paths | inventaire versionné / digest éventuel | digest non exposé |
| Migration | NOT_STARTED | enum élargi + détail non-bavard | pas de pipeline |
| Health | SIMULATED | états observés documentés (local/unknown/degraded) | pas de probe |
| History summary | availability/returned | lien stable vers page F13 + fraîcheur | pas de cursor/page id |
| Decision layer | BLOCK/ALLOW + authz strings | inchangé fonctionnellement | OK |
| Audit lecture | absente | événement borné (qui/quand/quoi résumé) | **MISSING** |

### 3.2 Contrat read-only (normatif)

- `mutable=false` · `adminUi=false` · `writeCommands=false` obligatoires ;
- aucune commande write via cette surface ;
- aucune mutation MethodMode / history / DB via F11.2 ;
- résultat immuable (freeze / copie) ;
- erreurs non bavardes (pas de secrets, pas de chemins utilisateur absolus).

### 3.3 Erreurs / disponibilité / fraîcheur

| Aspect | Fondation | Cible | Gap |
|--------|-----------|-------|-----|
| Erreurs | throw D1Error côté hold transitions (pas F11 query) | codes readiness explicites (INVALID_INPUT, UNAVAILABLE, FORBIDDEN_IF_IAM) | codes non formalisés |
| Disponibilité | toujours local-sync | documenter dégradé si provider history/hold unavailable | partiel (history provider injectable) |
| Fraîcheur | `evaluatedAt` ISO Z | TTL/freshness note (sans SLA prod) | pas de TTL |
| Observabilité | logs D1 hold séparés | event `readiness_queried` borné | **MISSING** |

---

## 4. IAM / sécurité / RGPD

| Frontière | Statut | Note |
|-----------|--------|------|
| Authentification | **NOT SELECTED** | pas d’identité d’acteur sur la query actuelle |
| Autorisation | hold ≠ IAM | `authorization` = décision hold, **pas** ACL produit |
| IAM production | **NOT SELECTED** | décision Morris future obligatoire avant exposition HTTP |
| Path-policy | distincte IAM | inchangée par F11.2 |
| Données | métadonnées gouvernance / ids projet | pas de PII documentée ; minimisation requise |
| RGPD production | **NOT VALIDATED** | si HTTP/UI futurs → DPIA/cycle distinct |

**Règle N3 :** ne **pas** sélectionner de mécanisme IAM dans ce document.

---

## 5. Gaps / dépendances / blockers

| ID | Type | Description | Bloque | Décision Morris ? |
|----|------|-------------|--------|-------------------|
| G-F11-01 | gap fonc. | pas d’API HTTP / port serveur formalisé | « API finale » | oui (lot futur) |
| G-F11-02 | gap fonc. | pas d’audit de lecture | conformité F11 normative | oui/non selon lot |
| G-F11-03 | gap tech. | health SIMULATED seulement | readiness prod claim | oui (probe) |
| G-F11-04 | dépendance | F13 summary → fondation F13.4 | cohérence historique | N3 (ce pack) |
| G-F11-05 | dépendance | hold MethodMode | décision transition | déjà lot 1 |
| G-F11-06 | blocker | IAM NOT SELECTED | exposition multi-acteur | **oui avant HTTP** |
| G-F11-07 | blocker | B5/HARD OPEN | delivery/cutover | ne pas fermer |
| G-F11-08 | gap | pas de binding session OA (P06) | cutover | hors N3 impl |

---

## 6. Critères de complétion F11.2 (documentaires)

F11.2 peut être déclaré **complete** seulement si **toutes** les conditions suivantes sont vraies sous preuves Git + gate Morris d’implémentation/validation :

1. contrat read-only normatif respecté runtime ;
2. surface d’accès **décidée et validée** (interne-only **ou** HTTP — choix Morris) ;
3. champs cibles §3.1 exposés avec provenance ;
4. audit de lecture minimal présent **ou** explicitement différé par décision Morris ;
5. health non-simulé **ou** statut UNKNOWN/DEGRADED honnête documenté pour le niveau revendiqué ;
6. tests de non-régression RO + frontières import ;
7. IAM : soit surface server-only mono-opérateur documentée, soit IAM sélectionné+validé ;
8. **aucune** claim delivery/cutover.

**Statut actuel :** `NOT COMPLETE`.

---

## 7. Non-objectifs

- UI admin (F11.3) ;
- mutations / write commands ;
- sélection IAM/persistence ;
- fermeture B5/R1/R-M01/HARD ;
- product-complete API OA (A3.2) ;
- delivery / cutover.

---

## 8. Stop conditions

- besoin d’écrire via readiness ;
- besoin d’UI admin pour « compléter » F11.2 ;
- sélection IAM forcée sans gate ;
- claim « F11.2 complete » sans preuves §6 ;
- modification OPS1 / `method/**` pour readiness.

---

## 9. Questions d’arbitrage Morris

1. Surface d’accès cible : **server-internal only** vs **HTTP read** (sans UI) ?
2. Audit de lecture : **requis pour complete** vs **différé** ?
3. Health : accepter **UNKNOWN/SIMULATED** comme complete documentaire, ou exiger probe ?
4. Faut-il un lot technique F11-only avant tout lot HTTP ?

Toutes réponses = futurs GO · `RECOMMENDED — NOT DECIDED` hors N3.

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md`

```markdown
# 13 — F13.4 completion surface & gaps

| Champ | Valeur |
|-------|--------|
| **Document** | `13-f13-4-completion-surface-and-gaps.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Décision parent** | D-T-A7-F13 = **F13.4** (`DECIDED`) |
| **Gate N3** | N3 **DECIDED — ADOPTED BY MORRIS** |
| **Base Git** | `770605bc…` |
| **Implémentation** | **interdite** en N3 · **réalisée localement** en L-F11F13 (voir `17`) |
| **Statut F13.4** | seed+SHA · PREFIX_ONLY · GIT_ONLY · **≠ cutover-complete** |

---

## 1. État actuel (main)

| Élément | Preuve | Limite |
|---------|--------|--------|
| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` | documentary seed |
| Max | `BOUNDED_HISTORY_MAX_ITEMS = 50` | hard cap |
| Providers | documentary · unavailable | pas de Git live shell |
| Page | frozen · `gitCanonical=true` · `gitCanonicalSha` · `mutable=false` | `BOUNDED_L_F11F13` |
| Pagination | `PREFIX_ONLY` · `nextCursor=null` | D4 |
| Retention | `GIT_ONLY` | D5 |
| Audit | `DEFERRED_EXPLICITLY` | D2 |
| Seed | enrichi (incl. merge #287 / `770605bc…`) | ≠ archive complète |
| Availability | PARTIAL / NOT_AVAILABLE / EMPTY | cohérent |
| Tests | `t-a7-bounded-history.test.ts` | SHA / prefix / volume |
| Persist store | **aucun** | Git canonique |

**Anti-claim :** seed+SHA L-F11F13 ≠ vue runtime cutover · ≠ ACL · ≠ store concurrent à Git.

---

## 2. Git canonique (normatif)

- Git / packs documentaires = **vérité historique** ;
- la vue runtime est une **projection bornée** ;
- interdiction de mutations historiques ;
- path-policy ≠ IAM ;
- isolation OPS1 (W1-D04) reste **préalable** à retrait legacy — **non réalisée** ici.

---

## 3. Cible fonctionnelle minimale — vue runtime bornée

| Aspect | Fondation | Cible minimale complète | Gap |
|--------|-----------|-------------------------|-----|
| Rôle | métadonnées packs | support/audit/traçabilité RO | pas de parcours opérateur |
| Périmètre | seed documentary fixe | politique d’inclusion/exclusion documentée (catégories) | politique incomplete |
| Profondeur | max 50 | max borné + justification + overflow behavior | OK partiel |
| Pagination | slice prefix only | cursor/offset **ou** explicite « prefix-only » décidé | **MISSING** si multi-page requis |
| Provenance | git-ref / documentary-pack / synthetic | provenance obligatoire + vérifiabilité | OK partiel |
| Fraîcheur | `evaluatedAt` | relation à tip Git / pack SHA | pas de tie to HEAD |
| Cohérence Git | claim `gitCanonical` | preuve que items ⊆ refs Git/packs | seed manuel |
| Actif vs historique | status enum | frontière sémantique documentée + tests | OK partiel |
| États dégradés | NOT_AVAILABLE | matrice dégradée + messages | OK partiel |
| Audit accès | absent | log borné lectures | **MISSING** |
| Rétention | UNKNOWN | durée conservation (cycle distinct si besoin) | **UNKNOWN** |

---

## 4. Sécurité / observabilité / rétention

| Frontière | Statut |
|-----------|--------|
| IAM / ACL | **NOT SELECTED** — lectures actuelles = in-process |
| AuthN/AuthZ acteur | non modélisées |
| Contenu sensible | métadonnées packs/PR seulement ; pas de blobs method |
| Observabilité | pas d’event dédié |
| Rétention | **UNKNOWN** — à cadrer sous gate distinct si conservation ≠ Git |
| RGPD | **NOT VALIDATED** — minimisation : pas de PII dans seed actuel |

**Ne pas sélectionner** store durable / cache produit / IAM dans N3.

---

## 5. Gaps / dépendances / blockers

| ID | Type | Description | Bloque | Décision ? |
|----|------|-------------|--------|------------|
| G-F13-01 | gap fonc. | seed ≠ archive Git live | vue « runtime » riche | oui (stratégie lecture) |
| G-F13-02 | gap tech. | pas de pagination multi-page | volumes > 50 | oui si besoin |
| G-F13-03 | gap | pas d’audit accès | norme F13 | oui/non |
| G-F13-04 | dépendance | F11 consomme summary | cohérence couple | docs N3 |
| G-F13-05 | dépendance | OPS1 isolation (P10) | retrait legacy | N2/autre |
| G-F13-06 | blocker | persistence NOT SELECTED | si cache/index requis | **oui avant store** |
| G-F13-07 | blocker | IAM NOT SELECTED | si exposition multi-acteur | **oui avant HTTP** |
| G-F13-08 | unknown | durée conservation | conformité | cycle rétention |

---

## 6. Critères de complétion F13.4

Déclarable **complete** seulement si :

1. Git reste canonique (preuve + tests anti-mutation) ;
2. politique d’inclusion des items documentée et testée ;
3. profondeur/pagination décidées et implémentées sous gate ;
4. états dégradés couverts ;
5. cohérence provenance ↔ Git/packs démontrable ;
6. audit accès présent **ou** différé explicitement ;
7. rétention clarifiée **ou** « Git-only retention » décidé ;
8. IAM/persistence : soit in-process mono-opérateur documenté, soit sélectionnés+validés ;
9. **aucune** mutation historique ; **aucune** claim cutover.

**Statut actuel :** `NOT COMPLETE`.

---

## 7. Non-objectifs

- store concurrent à Git ;
- migration DB historique ;
- ACL production sans gate ;
- exposition de contenu `method/**` brut ;
- UI archive ;
- retrait OPS1/legacy.

---

## 8. Stop conditions

- tentative de faire de la vue runtime une source canonique ;
- écriture / « repair » d’historique ;
- sélection persistence/IAM sans GO ;
- lecture arbitraire filesystem hors politique ;
- claim complete sans §6.

---

## 9. Questions d’arbitrage Morris

1. Lecture Git live (bornée) vs seed documentary enrichi vs index dérivé **non persistant** ?
2. Pagination multi-page requise pour complete ?
3. Audit accès requis maintenant ?
4. Rétention = Git only (décider) vs cycle rétention séparé ?
5. Couplage F11 summary : stable page-id / evaluatedAt contract ?

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md`

```markdown
# 14 — F11/F13 dependencies & runtime boundaries

| Champ | Valeur |
|-------|--------|
| **Document** | `14-f11-f13-dependencies-and-runtime-boundaries.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Gate N3** | DECIDED — cadrage only |
| **IAM / Persistence** | **NOT SELECTED** (préservés) |

---

## 1. Cartographie composants (existant)

```
[Git / packs docs] ──canonique──► (humain / CI)
        ▲
        │ provenance refs (seed)
        │
[boundedHistoryRead F13.4] ──summary──► [operationalReadiness F11.2]
        │                                    │
        │                                    ├── readMethodModeHold
        │                                    ├── decideMethodModeTransition
        │                                    └── optional D1Project input
        ▼
   (no durable store)

[selectMethodMode / commands] ──assert hold──► CONFLICT if ACTIVE
[methodModeHold.test-only] ──tests only──► store slot (non-barrel)
```

Ownership :

| Composant | Owner logique | Module |
|-----------|---------------|--------|
| Hold | D1 gouvernance transitions | `lib/d1/methodModeHold*` |
| F11.2 readiness | D1 observation | `lib/d1/operationalReadiness.ts` |
| F13.4 history | platform t-a7 | `lib/platform/t-a7/boundedHistoryRead.ts` |
| Canon paths | platform sfia-context | `canonicalPaths` (lecture) |

---

## 2. Frontières Git / runtime

| Règle | Statut |
|-------|--------|
| Git = vérité historique | **obligatoire** |
| Runtime view = projection | **obligatoire** |
| Pas de write historique | **obligatoire** |
| Seed documentary ≠ full Git walk | **état actuel** |
| Cache / index durable | **interdit sans GO persistence** |
| Concurrent writers | **hors scope** |

---

## 3. Frontières IAM / identité

| Couche | État | Interdit N3 |
|--------|------|-------------|
| AuthN | non présent sur F11/F13 | sélection produit IAM |
| AuthZ | hold = gouvernance transition, pas ACL data | confondre hold et IAM |
| Acteur | non typé sur query | inventer roles |
| Path-policy | distincte | fusionner path-policy↔IAM |
| Fail-closed | hold ACTIVE par défaut | backdoor env pour désactiver hold |

Exposition future HTTP ⇒ **GO IAM** distinct avant claim multi-acteur.

---

## 4. Frontières persistance

| Élément | Autorisé maintenant | Interdit sans GO |
|---------|---------------------|------------------|
| Lecture Git/packs | oui (conceptuel) | — |
| Seed in-memory | oui (lot 1) | — |
| SQLite/DB history store | non | **oui interdit** |
| Migration schéma | non | **oui interdit** |
| Cache process local non durable | candidat futur (doc) | durable/shared store |

---

## 5. API interne / HTTP / UI

| Surface | État | Décision requise |
|---------|------|------------------|
| API interne TS | **existante** (fonctions) | formaliser version contrat |
| Barrel `@/lib/d1` | export F11 + hold produit | ne pas exporter test-only |
| HTTP route | absente | GO surface access |
| UI admin | absente (F11.2) | F11.3 non retenue |
| Server actions write | hors F11/F13 | gate write distinct |

---

## 6. Flux de lecture (cible documentaire)

1. Consommateur autorisé (à décider) appelle readiness **read**.
2. F11 lit hold + (optionnel) projet + F13 summary.
3. F13 lit provider borné ; Git reste référence.
4. Snapshot frozen renvoyé ; audit éventuel (futur).
5. Aucun write ; erreurs fail-closed.

Source de vérité par donnée :

| Donnée | Source |
|--------|--------|
| Historique canonique | Git |
| Projection items | provider F13 (dérivé) |
| Hold | évaluation gouvernance (défaut code) |
| Projet mode/state | D1 store existant (si fourni) — **pas** créé par F11 |

Données temporaires autorisées : copies frozen, timestamps d’évaluation.
Interdites : files d’attente durables, outbox history, dual-write.

---

## 7. Observabilité / audit / erreurs

| Besoin | Actuel | Cible cadrée |
|--------|--------|--------------|
| Logs hold block/allow | oui (codes) | conserver borné |
| Logs readiness query | non | event optionnel futur |
| Logs history read | non | event optionnel futur |
| Erreurs | RangeError limit ; D1 CONFLICT hold | catalogue codes readiness/history |
| Métriques | non | compteurs lectures (futur) sans PII |

---

## 8. Dépendances

### Obligatoires pour complétion documentaire N3 (ce pack)

- décisions F11.2 / F13.4 déjà adoptées ;
- lot 1 sur main ;
- hold ACTIVE governance ;
- Git canonique.

### Différables

- IAM product ;
- persistence ;
- HTTP ;
- live Git walk ;
- OPS1 isolation runtime evidence (N2) ;
- P08/P09 replacement (N1) ;
- rollback drills (N4).

### Anti-couplages

- F11 ↛ OPS1 imports ;
- F13 ↛ D1 writes ;
- F13 ↛ `method/**` content dump ;
- readiness ↛ auto-clear blockers ;
- test-only ↛ barrels runtime.

---

## 9. Risques de dette

| Risque | Mitigation documentaire |
|--------|-------------------------|
| Traiter lot 1 comme API finale | critères complete §12/§13 |
| Ajouter HTTP sans IAM | stop condition |
| Index durable « pour perf » | persistence NOT SELECTED |
| Seed manuel diverge de Git | exiger preuve provenance |
| F11/F13 circular writes | F11→F13 read only (déjà) |

---

## 10. Matrice capacité (synthèse)

| Capacité | Existant | Gap | Dépendance | Blocker | Preuve | Statut | Décision |
|----------|----------|-----|------------|---------|--------|--------|----------|
| F11 query RO | oui | HTTP/audit/health | hold, F13 | IAM si HTTP | tests + module | PARTIAL | surface access |
| F13 page RO | oui | politique/pagination/audit | Git | persistence si store | tests + module | PARTIAL | read strategy |
| Hold | oui | — | gouvernance | B5/HARD open | tests | PARTIAL control | ne pas fermer |
| IAM | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |
| Persistence | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md`

```markdown
# 15 — F11/F13 completion options & bounded lots

| Champ | Valeur |
|-------|--------|
| **Document** | `15-f11-f13-completion-options-and-bounded-lots.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **N3** | cadrage terminé localement · **pas d’implémentation** |
| **Recommandations** | `RECOMMENDED — NOT DECIDED` |

---

## 1. Options distinctes (futurs lots)

### L-F11A — Formaliser contrat interne F11 (sans HTTP)

| Champ | Contenu |
|-------|---------|
| Objectif | Versionner le contrat snapshot, codes d’erreur, audit différé/explicite, health UNKNOWN honnête |
| Valeur | réduit ambiguïté « API » sans surface réseau |
| Risques | sous-estimer besoin HTTP plus tard |
| Dette | doc + tests contrat |
| Rollback | revert Git |
| Tests | schema/contract tests |
| Gate | `GO IMPLEMENT T-A7 F11.2 INTERNAL CONTRACT HARDENING — NO HTTP IAM UI DELIVERY OR CUTOVER` |

### L-F11B — Surface HTTP read-only F11 (sans UI)

| Champ | Contenu |
|-------|---------|
| Objectif | Exposer readiness via HTTP GET borné |
| Dépendances | **IAM sélection** ou décision mono-opérateur documentée |
| Risques | exposition prématurée |
| Gate | `GO IMPLEMENT T-A7 F11.2 HTTP READ SURFACE — IAM DECISION REQUIRED FIRST — NO UI WRITE DELIVERY OR CUTOVER` |

### L-F13A — Politique + pagination F13 (in-process)

| Champ | Contenu |
|-------|---------|
| Objectif | Politique d’inclusion, pagination/prefix décidé, tie-to-pack SHA |
| Dépendances | pas de store |
| Gate | `GO IMPLEMENT T-A7 F13.4 POLICY AND PAGINATION — GIT CANONICAL — NO PERSISTENCE IAM DELIVERY OR CUTOVER` |

### L-F13B — Lecteur Git borné (refs only)

| Champ | Contenu |
|-------|---------|
| Objectif | Remplacer/enrichir seed par lecture Git bornée (metadata) |
| Risques | perf, chemins, secrets |
| Gate | `GO IMPLEMENT T-A7 F13.4 BOUNDED GIT METADATA READER — NO CONTENT DUMP PERSISTENCE DELIVERY OR CUTOVER` |

### L-F11F13 — Lot couplé minimal (interne only)

| Champ | Contenu |
|-------|---------|
| Objectif | L-F11A + L-F13A ensemble si périmètre reste interne |
| Condition | **pas** HTTP, **pas** IAM, **pas** persistence |
| Gate | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — NO HTTP IAM PERSISTENCE DELIVERY OR CUTOVER` |

### L-DEFER — Différer

Aucun lot technique F11/F13 ; attendre N1/N2/N4 ou autre priorité.

---

## 2. Lot minimal recommandé (non décidé)

**L-F11F13 (interne)** ou séquentiel **L-F13A → L-F11A**.

Justification challenge :

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | oui — transforme gaps N3 en lots exécutables |
| Blocker réduit ? | ambiguïté complete ; pas B5/HARD |
| Dette ? | code borné + tests |
| Plus simple ? | éviter L-F11B tant qu’IAM NOT SELECTED |
| Repo-first ? | s’appuie sur modules main |
| Gate nécessaire ? | **oui** — N3 ≠ autorisation d’implémenter |

**Statut :** `RECOMMENDED — NOT DECIDED`

**Non recommandé maintenant :** L-F11B (HTTP) avant arbitrage IAM.

---

## 3. Lots complémentaires (hors N3 exécution)

- N2 evidence OPS1 (indépendant) ;
- N1 P08/P09 framing/impl sous gates séparés ;
- N4 rollback framing ;
- cycle rétention F13 si conservation ≠ Git.

---

## 4. Impacts delivery/cutover

Aucun lot ci-dessus n’autorise delivery preparation, delivery ou cutover.
Complete F11/F13 ≠ Option A complete ≠ T-A6 complete.

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md`

```markdown
# 16 — Morris decision pack — F11.2 / F13.4 completion

| Champ | Valeur |
|-------|--------|
| **Document** | `16-morris-f11-f13-completion-decision-pack.md` |
| **Date cadrage N3** | 2026-07-28 22:45:18 CEST (+0200) |
| **Date décisions D1–D8** | 2026-07-28 22:58:09 CEST (+0200) |
| **N3** | `DECIDED — ADOPTED BY MORRIS` (cadrage) |
| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` |
| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` |
| **Push / PR projet** | **non autorisés** par ce gate |

> Note d’intégrité : dans le handoff N3 (`62904dbd…` / blob `d11efa52…`), D1–D8 figuraient comme **recommandations** (`RECOMMENDED — NOT DECIDED`). Elles sont enregistrées ici comme **décisions Morris adoptées** avant l’implémentation L-F11F13.

---

## 1. Décisions D1–D8 (adoptées)

| ID | Décision | Statut |
|----|----------|--------|
| **D1** | F11 complete = **internal-only** (pas HTTP, pas UI) | `DECIDED — ADOPTED BY MORRIS` |
| **D2** | Audit lecture F11/F13 = **différé explicitement** | `DECIDED — ADOPTED BY MORRIS` |
| **D3** | F13 data = **seed enrichi + liaison explicite au SHA Git** | `DECIDED — ADOPTED BY MORRIS` |
| **D4** | Pagination F13 = **prefix-only formalisée** | `DECIDED — ADOPTED BY MORRIS` |
| **D5** | Rétention F13 = **Git-only** | `DECIDED — ADOPTED BY MORRIS` |
| **D6** | Lot technique = **L-F11F13 interne** | `DECIDED — ADOPTED BY MORRIS` |
| **D7** | IAM = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |
| **D8** | Persistence = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |

### Gate consommé

`GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — INTERNAL-ONLY F11 CONTRACT — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION — AUDIT DEFERRED EXPLICITLY — GIT-ONLY RETENTION — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO HTTP UI DELIVERY OR CUTOVER`

**Autorité :** implémentation **locale** uniquement · pas de push/PR/merge/delivery/cutover.

---

## 2. Impacts / exclusions

| Inclus | Exclu |
|--------|-------|
| Contrat F11 interne | HTTP / UI / IAM product |
| Seed F13 + SHA | Store / migration / cache durable |
| Prefix-only ≤50 | Multi-page complexe / scan non borné |
| Audit différé documenté | Journal d’audit persistant |
| Rétention Git-only | Rétention applicative |

B5 / R1 / R-M01 / HARD restent **OPEN** / **OPEN HARD**.

---

## 3. Recommandation historique N3 (archive)

Avant adoption Morris, le pack N3 recommandait D1=internal-only, D6=L-F11F13, D7/D8=NOT SELECTED, etc. (`RECOMMENDED — NOT DECIDED`).

Cette section ne constitue **pas** l’état courant des décisions.

---

## 4. Gate candidat suivant (non consommé)

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED`

---

## 5. Résultats L-F11F13

Voir `17-f11-f13-internal-completion-lot-results.md` pour l’implémentation locale, tests et anti-claims.

---

## 6. Verdict document

`D1–D8 DECIDED — L-F11F13 IMPLEMENTED LOCALLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`

```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md`

```markdown
# 17 — F11 / F13 internal completion lot results (L-F11F13)

| Champ | Valeur |
|-------|--------|
| **Document** | `17-f11-f13-internal-completion-lot-results.md` |
| **Date/heure/fuseau** | 2026-07-28 23:22:34 CEST (+0200) |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| **Branche delivery** | `delivery/sfia-studio-t-a7-f11-f13-internal-completion` |
| **Branche documentaire parent** | `docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing` |
| **Base `origin/main`** | `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| **Commit documentaire** | `dcdc90a0779859ec5d34a91021bab65122447ee5` |
| **Gate consommé** | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — … — NO HTTP UI DELIVERY OR CUTOVER` |
| **Push / PR projet** | **aucun** |

---

## 1. Gate et décisions D1–D8

| ID | Décision | Application locale |
|----|----------|--------------------|
| **D1** | F11 = internal-only | `accessSurface: "INTERNAL_ONLY"` · pas HTTP/UI |
| **D2** | Audit lecture différé | `audit.status: "DEFERRED_EXPLICITLY"` (F11 + F13) |
| **D3** | Seed enrichi + SHA Git | seed 7 entrées · `gitCanonicalSha` obligatoire |
| **D4** | Pagination prefix-only | `paginationMode: "PREFIX_ONLY"` · `nextCursor: null` |
| **D5** | Rétention Git-only | `retention: "GIT_ONLY"` · pas de store |
| **D6** | Lot L-F11F13 | ce document / branche delivery |
| **D7** | IAM NOT SELECTED | champ snapshot + anti-claims |
| **D8** | Persistence NOT SELECTED | champ snapshot + anti-claims |

---

## 2. Implémentation F11.2

| Élément | Résultat |
|---------|----------|
| Module | `app/lib/d1/operationalReadiness.ts` |
| Schéma | `t-a7-f11.2-l-f11f13` |
| Surface | `INTERNAL_ONLY` |
| États | `READY` \| `NOT_READY` \| `UNKNOWN` |
| Règles | hold actif → `NOT_READY` ; health `SIMULATED`/`UNKNOWN` → jamais `READY` ; absence history ≠ READY |
| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` |
| Provenance | hold, blockers, history summary (SHA + PREFIX_ONLY), legacy deps |
| Audit | `DEFERRED_EXPLICITLY` |
| IAM / Persistence | `NOT_SELECTED` / `NOT_SELECTED` |
| HTTP / UI | **absents** |

---

## 3. Implémentation F13.4

| Élément | Résultat |
|---------|----------|
| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` |
| Seed | enrichi (PR #285/#286, lot1 feat/harden, merge #287 `770605bc…`, pack path) |
| SHA | `gitCanonicalSha` validé (`^[0-9a-f]{40}$`) · défaut pin `770605bc…` · injection caller |
| Shell Git runtime | **aucun** |
| Pagination | `PREFIX_ONLY` · `prefixLength`/`limit` · max 50 · ordre stable · pas de multi-page |
| Rétention | `GIT_ONLY` |
| Audit | `DEFERRED_EXPLICITLY` |
| Store / cache / DB | **aucun** |
| Completeness | `BOUNDED_L_F11F13` |

---

## 4. Pagination prefix-only

- `limit` et `prefixLength` sont des alias du même préfixe déterministe.
- Clamp à `BOUNDED_HISTORY_MAX_ITEMS` (50).
- `nextCursor` toujours `null` (D4 — pas de multi-page).
- `hasMore` = `truncated` après slice préfixe.
- Tests bornes : 0 (reject), 1, max, max+1.

---

## 5. SHA Git

- Source : injection bornée `DocumentaryBoundedHistoryProviderOptions.gitCanonicalSha` ou pin `DEFAULT_BOUNDED_HISTORY_GIT_SHA` (= tip main lot 1).
- Validation fail-closed via `assertGitCanonicalSha`.
- Responsabilité caller documentée dans la note de page : pas de `git` shell produit.
- F11 résume `observed.history.gitCanonicalSha`.

---

## 6. Audit différé / rétention Git-only

- Aucun journal d’audit persistant créé.
- Aucune rétention hors Git / packs documentaires.
- RGPD production : **NOT VALIDATED** (inchangé).

---

## 7. Fichiers produit / tests / docs

### Modifiés

- `projects/sfia-studio/app/lib/d1/operationalReadiness.ts`
- `projects/sfia-studio/app/lib/d1/index.ts`
- `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`
- `projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts`
- `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`
- `…/t-a7-technical-readiness-framing/README.md`
- `…/12-…` · `13-…` (statut post-lot)
- `…/16-…` (référence résultats)

### Créés

- `…/17-f11-f13-internal-completion-lot-results.md` (ce document)

---

## 8. Tests

Commande :

```bash
./node_modules/.bin/vitest run \
  __tests__/d1/t-a7-operational-readiness.test.ts \
  __tests__/platform/t-a7-bounded-history.test.ts \
  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
  __tests__/d1/t-a7-method-mode-hold.test.ts \
  __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts \
  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
  __tests__/platform/t-a7-local-volume.probe.test.ts
```

Résultat : **9 files / 44 tests passed** (2026-07-28 23:22:29 CEST).

Couverture L-F11F13 : contrat F11, UNKNOWN/NOT_READY, INTERNAL_ONLY, SHA invalide, prefix-only, volume, seed enrichi, boundaries hold, absence HTTP route.

---

## 9. Non-régressions / absences vérifiées

- aucune route HTTP readiness/cutover ;
- aucune UI ;
- aucune IAM / session ;
- aucune persistance / migration ;
- aucune write command F11/F13 ;
- MethodMode hold **non modifié** fonctionnellement ;
- OPS1 **non modifié** fonctionnellement ;
- aucune dépendance npm ajoutée ;
- aucun push / PR / merge projet.

---

## 10. Limites

- Health reste `SIMULATED` → readiness ne peut pas être `READY` en conditions normales actuelles.
- SHA pin / injection ≠ lecture live de `git rev-parse` en runtime produit.
- Seed documentaire ≠ archive Git complète.
- Reasons hold `F11_2_INCOMPLETE` / `F13_4_INCOMPLETE` **conservées** (pas de fermeture blockers via hold).
- Audit / RUN prod / RGPD prod restent ouverts / non validés.

---

## 11. Blockers restant ouverts

| Item | Statut |
|------|--------|
| B5 | `OPEN` |
| R1 | `OPEN` |
| R-M01 | `OPEN` |
| HARD | `OPEN HARD` |
| T-A6 COMPLETE | **NOT DECLARED** |
| Option A | **NOT COMPLETE** |
| Delivery / cutover | **NOT AUTHORIZED** |
| IAM | `NOT SELECTED` |
| Persistence | `NOT SELECTED` |
| P08 / P09 | `MISSING` |

---

## 12. Anti-claims

- L-F11F13 local ≠ F11/F13 « cutover-complete » ≠ delivery ready.
- Contrat interne ≠ API HTTP publique.
- Seed + SHA pin ≠ store historique concurrent à Git.
- Tests verts ≠ RUN READY / RGPD VALIDATED.
- Commit local ≠ autorisation push/PR.
- Handoff L3 ≠ push branche projet.

---

## 13. Gate candidat suivant (non consommé)

`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` · **READY FOR PR READINESS**

---

## 14. Verdict

`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY CONTRACT HARDENED — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION FORMALIZED — AUDIT DEFERRED EXPLICITLY — RETENTION GIT-ONLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — TESTS PASSED — BLOCKERS B5 R1 R-M01 AND HARD REMAIN OPEN — NO HTTP UI PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`

```

---

## Diff complet origin/main...HEAD

```diff
diff --git a/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts b/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
index 91683b4..9baaa66 100644
--- a/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
+++ b/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
@@ -9,10 +9,13 @@ import {
   setMethodModeHoldForTests,
 } from "@/lib/d1/methodModeHold.test-only";
 import {
+  createDocumentaryBoundedHistoryProvider,
   createUnavailableBoundedHistoryProvider,
 } from "@/lib/platform/t-a7/boundedHistoryRead";
+import fs from "node:fs";
+import path from "node:path";

-describe("T-A7 lot1 F11.2 operational readiness", () => {
+describe("T-A7 L-F11F13 F11.2 operational readiness (internal-only)", () => {
   beforeEach(() => {
     resetMethodModeHoldForTests();
   });
@@ -21,12 +24,16 @@ describe("T-A7 lot1 F11.2 operational readiness", () => {
     resetMethodModeHoldForTests();
   });

-  it("returns a frozen read-only snapshot with hold and blockers", () => {
+  it("returns a frozen INTERNAL_ONLY read-only snapshot with hold and blockers", () => {
     const snap = queryOperationalReadiness();
-    expect(snap.schemaVersion).toBe("t-a7-f11.2-lot1");
+    expect(snap.schemaVersion).toBe("t-a7-f11.2-l-f11f13");
+    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
     expect(snap.mutable).toBe(false);
     expect(snap.adminUi).toBe(false);
     expect(snap.writeCommands).toBe(false);
+    expect(snap.iam).toBe("NOT_SELECTED");
+    expect(snap.persistence).toBe("NOT_SELECTED");
+    expect(snap.audit.status).toBe("DEFERRED_EXPLICITLY");
     expect(snap.observed.hold.active).toBe(true);
     expect(snap.observed.openBlockers.length).toBeGreaterThan(0);
     expect(snap.decision).toBe("BLOCK");
@@ -34,6 +41,11 @@ describe("T-A7 lot1 F11.2 operational readiness", () => {
     expect(snap.observed.migration.status).toBe("NOT_STARTED");
     expect(snap.observed.health.status).toBe("SIMULATED");
     expect(snap.observed.history.gitCanonical).toBe(true);
+    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
+    expect(snap.observed.history.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
+    expect(snap.readinessStatus).toBe("NOT_READY");
+    expect(snap.readinessReasons).toContain("HOLD_ACTIVE");
+    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
     assertOperationalReadinessReadOnly(snap);
     expect(() => {
       // @ts-expect-error intentional mutation attempt
@@ -41,26 +53,43 @@ describe("T-A7 lot1 F11.2 operational readiness", () => {
     }).toThrow();
   });

+  it("never treats incomplete/simulated health as READY", () => {
+    setMethodModeHoldForTests({ active: false, reasons: [] });
+    const snap = queryOperationalReadiness();
+    expect(snap.decision).toBe("ALLOW");
+    expect(snap.readinessStatus).toBe("UNKNOWN");
+    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
+    expect(snap.readinessStatus).not.toBe("READY");
+  });
+
   it("serializes stably for core contract fields", () => {
     const snap = queryOperationalReadiness();
     const json = JSON.stringify({
       schemaVersion: snap.schemaVersion,
+      accessSurface: snap.accessSurface,
+      readinessStatus: snap.readinessStatus,
       mutable: snap.mutable,
       writeCommands: snap.writeCommands,
       adminUi: snap.adminUi,
+      iam: snap.iam,
+      persistence: snap.persistence,
+      audit: snap.audit.status,
       decision: snap.decision,
       blockers: snap.observed.openBlockers,
     });
-    expect(json).toContain("t-a7-f11.2-lot1");
+    expect(json).toContain("t-a7-f11.2-l-f11f13");
+    expect(json).toContain("INTERNAL_ONLY");
     expect(json).toContain("B5_OPEN");
+    expect(json).toContain("DEFERRED_EXPLICITLY");
   });

-  it("exposes UNKNOWN/partial history when provider unavailable", () => {
+  it("exposes NOT_AVAILABLE history without inventing READY", () => {
     const snap = queryOperationalReadiness({
       historyProvider: createUnavailableBoundedHistoryProvider(),
     });
     expect(snap.observed.history.availability).toBe("NOT_AVAILABLE");
     expect(snap.observed.history.returned).toBe(0);
+    expect(snap.readinessStatus).not.toBe("READY");
   });

   it("reflects inactive hold without recommending keep", () => {
@@ -69,4 +98,24 @@ describe("T-A7 lot1 F11.2 operational readiness", () => {
     expect(snap.decision).toBe("ALLOW");
     expect(snap.recommendation).toBe("NO_RECOMMENDATION");
   });
+
+  it("integrates PREFIX_ONLY history summary", () => {
+    const snap = queryOperationalReadiness({
+      historyProvider: createDocumentaryBoundedHistoryProvider(),
+      historyLimit: 2,
+    });
+    expect(snap.observed.history.returned).toBe(2);
+    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
+    expect(snap.completeness).toBe("BOUNDED_L_F11F13");
+  });
+
+  it("has no HTTP readiness route under app/", () => {
+    const appRouter = path.resolve(__dirname, "../../app");
+    if (!fs.existsSync(appRouter)) return;
+    const hasReadinessRoute = fs
+      .readdirSync(appRouter, { recursive: true })
+      .map(String)
+      .some((p) => /readiness|cutover/i.test(p) && /route\.ts$/.test(p));
+    expect(hasReadinessRoute).toBe(false);
+  });
 });
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
index 3ec0b60..a28895f 100644
--- a/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
@@ -2,7 +2,9 @@
 import { describe, expect, it } from "vitest";
 import {
   BOUNDED_HISTORY_MAX_ITEMS,
+  DEFAULT_BOUNDED_HISTORY_GIT_SHA,
   assertBoundedHistoryImmutable,
+  assertGitCanonicalSha,
   createDocumentaryBoundedHistoryProvider,
   createUnavailableBoundedHistoryProvider,
   BoundedHistoryMutationError,
@@ -10,31 +12,92 @@ import {
 import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
 import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold.test-only";

-describe("T-A7 lot1 F13.4 bounded history foundation", () => {
-  it("reads a bounded immutable documentary page with Git canonical", () => {
+const ALT_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
+
+describe("T-A7 L-F11F13 F13.4 bounded history foundation", () => {
+  it("reads a bounded immutable documentary page with Git canonical SHA", () => {
     const provider = createDocumentaryBoundedHistoryProvider();
     const page = provider.read({ limit: 2 });
     expect(page.gitCanonical).toBe(true);
+    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
     expect(page.mutable).toBe(false);
     expect(page.availability).toBe("PARTIAL");
     expect(page.returned).toBe(2);
     expect(page.truncated).toBe(true);
     expect(page.limit).toBe(2);
+    expect(page.paginationMode).toBe("PREFIX_ONLY");
+    expect(page.pagination.mode).toBe("PREFIX_ONLY");
+    expect(page.pagination.nextCursor).toBeNull();
+    expect(page.pagination.hasMore).toBe(true);
+    expect(page.retention).toBe("GIT_ONLY");
+    expect(page.audit.status).toBe("DEFERRED_EXPLICITLY");
+    expect(page.completeness).toBe("BOUNDED_L_F11F13");
     assertBoundedHistoryImmutable(page);
   });

-  it("enforces max limit", () => {
+  it("enforces PREFIX_ONLY max prefix length", () => {
     const provider = createDocumentaryBoundedHistoryProvider();
     const page = provider.read({ limit: 10_000 });
     expect(page.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
+    expect(page.pagination.prefixLength).toBe(BOUNDED_HISTORY_MAX_ITEMS);
     expect(page.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
   });

+  it("accepts prefixLength alias and keeps stable order", () => {
+    const provider = createDocumentaryBoundedHistoryProvider();
+    const a = provider.read({ prefixLength: 3 });
+    const b = provider.read({ limit: 3 });
+    expect(a.items.map((i) => i.id)).toEqual(b.items.map((i) => i.id));
+    expect(a.items[0]?.id).toBe("hist-t-a7-f03-f11-f13");
+    expect(a.pagination.nextCursor).toBeNull();
+  });
+
+  it("covers volume bounds 0/1/max/max+1 semantics", () => {
+    const provider = createDocumentaryBoundedHistoryProvider();
+    expect(() => provider.read({ limit: 0 })).toThrow(/positive/);
+    const one = provider.read({ limit: 1 });
+    expect(one.returned).toBe(1);
+    const max = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS });
+    expect(max.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
+    expect(max.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
+    const over = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS + 1 });
+    expect(over.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
+    expect(over.returned).toBe(max.returned);
+  });
+
+  it("ties page to injected gitCanonicalSha and rejects invalid SHA", () => {
+    const provider = createDocumentaryBoundedHistoryProvider({
+      gitCanonicalSha: ALT_SHA,
+    });
+    const page = provider.read({ limit: 1 });
+    expect(page.gitCanonicalSha).toBe(ALT_SHA);
+    expect(() =>
+      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "not-a-sha" }),
+    ).toThrow(/40-character/);
+    expect(() =>
+      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "abcd" }),
+    ).toThrow(/40-character/);
+    expect(() => assertGitCanonicalSha("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")).toThrow();
+  });
+
+  it("enriches seed with lot-1 main tip reference", () => {
+    const page = createDocumentaryBoundedHistoryProvider().read({
+      limit: BOUNDED_HISTORY_MAX_ITEMS,
+    });
+    const tip = page.items.find((i) => i.id === "hist-t-a7-lot1-merged-main");
+    expect(tip).toBeDefined();
+    expect(tip?.gitProvenance.ref).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
+    expect(tip?.metadata.pr).toBe("287");
+  });
+
   it("supports unavailable provider without claiming full archive", () => {
     const page = createUnavailableBoundedHistoryProvider().read();
     expect(page.availability).toBe("NOT_AVAILABLE");
     expect(page.items).toEqual([]);
     expect(page.gitCanonical).toBe(true);
+    expect(page.retention).toBe("GIT_ONLY");
+    expect(page.paginationMode).toBe("PREFIX_ONLY");
+    expect(page.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
   });

   it("refuses mutation semantics via contract helper", () => {
@@ -47,11 +110,23 @@ describe("T-A7 lot1 F13.4 bounded history foundation", () => {
   it("integrates with F11.2 readiness without circular product writes", () => {
     resetMethodModeHoldForTests();
     const snap = queryOperationalReadiness({
-      historyProvider: createDocumentaryBoundedHistoryProvider(),
+      historyProvider: createDocumentaryBoundedHistoryProvider({
+        gitCanonicalSha: ALT_SHA,
+      }),
       historyLimit: 1,
     });
     expect(snap.observed.history.returned).toBe(1);
     expect(snap.observed.history.availability).toBe("PARTIAL");
+    expect(snap.observed.history.gitCanonicalSha).toBe(ALT_SHA);
+    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
     expect(snap.writeCommands).toBe(false);
+    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
+  });
+
+  it("preserves back-compat seed-array factory signature", () => {
+    const page = createDocumentaryBoundedHistoryProvider([]).read({ limit: 5 });
+    expect(page.availability).toBe("EMPTY");
+    expect(page.returned).toBe(0);
+    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
   });
 });
diff --git a/projects/sfia-studio/app/lib/d1/index.ts b/projects/sfia-studio/app/lib/d1/index.ts
index 73e45f6..5539f49 100644
--- a/projects/sfia-studio/app/lib/d1/index.ts
+++ b/projects/sfia-studio/app/lib/d1/index.ts
@@ -25,5 +25,7 @@ export {
 export type {
   OperationalReadinessSnapshot,
   OperationalReadinessQueryInput,
+  OperationalReadinessStatus,
+  OperationalReadinessAccessSurface,
 } from "./operationalReadiness";
 export { resetD1DbForTests } from "./db";
diff --git a/projects/sfia-studio/app/lib/d1/operationalReadiness.ts b/projects/sfia-studio/app/lib/d1/operationalReadiness.ts
index 1ae8dea..50a7656 100644
--- a/projects/sfia-studio/app/lib/d1/operationalReadiness.ts
+++ b/projects/sfia-studio/app/lib/d1/operationalReadiness.ts
@@ -1,6 +1,7 @@
 /**
- * T-A7 Lot 1 — F11.2 minimal operational readiness (read-only, no UI, no HTTP required).
+ * T-A7 L-F11F13 — F11.2 operational readiness (internal-only, read-only).
  * Assembles observed state; never mutates MethodMode or history.
+ * No HTTP, UI, IAM, or persistence.
  */

 import {
@@ -24,6 +25,15 @@ import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonical

 export type ReadinessUnknown = "UNKNOWN";

+/** D1 — access surface is server/internal only (no HTTP). */
+export type OperationalReadinessAccessSurface = "INTERNAL_ONLY";
+
+/**
+ * Aggregate readiness for internal consumers.
+ * Absence of signal must not become READY.
+ */
+export type OperationalReadinessStatus = "READY" | "NOT_READY" | "UNKNOWN";
+
 export interface OperationalReadinessLegacyDeps {
   readonly methodModesAuthorized: readonly MethodMode[];
   readonly canonicalCorePaths: readonly string[];
@@ -45,14 +55,27 @@ export interface OperationalReadinessHistorySummary {
   readonly availability: BoundedHistoryAvailability | ReadinessUnknown;
   readonly returned: number;
   readonly gitCanonical: true;
-  readonly completeness: "BOUNDED_LOT_1";
+  readonly gitCanonicalSha: string | null;
+  readonly paginationMode: "PREFIX_ONLY" | ReadinessUnknown;
+  readonly completeness: "BOUNDED_L_F11F13";
+}
+
+export interface OperationalReadinessAudit {
+  readonly status: "DEFERRED_EXPLICITLY";
+  readonly detail: string;
 }

 export interface OperationalReadinessSnapshot {
-  readonly schemaVersion: "t-a7-f11.2-lot1";
+  readonly schemaVersion: "t-a7-f11.2-l-f11f13";
+  readonly accessSurface: OperationalReadinessAccessSurface;
+  readonly readinessStatus: OperationalReadinessStatus;
+  readonly readinessReasons: readonly string[];
   readonly evaluatedAt: string;
   readonly timezoneNote: "timestamps are ISO-8601 UTC (Z)";
-  readonly completeness: "BOUNDED_LOT_1";
+  readonly completeness: "BOUNDED_L_F11F13";
+  readonly iam: "NOT_SELECTED";
+  readonly persistence: "NOT_SELECTED";
+  readonly audit: OperationalReadinessAudit;
   readonly observed: {
     readonly projectId: string | null;
     readonly methodMode: MethodMode | null;
@@ -83,10 +106,48 @@ function summarizeHistory(page: BoundedHistoryPage): OperationalReadinessHistory
     availability: page.availability,
     returned: page.returned,
     gitCanonical: true,
-    completeness: "BOUNDED_LOT_1",
+    gitCanonicalSha: page.gitCanonicalSha,
+    paginationMode: page.paginationMode,
+    completeness: "BOUNDED_L_F11F13",
   };
 }

+function deriveReadinessStatus(args: {
+  holdActive: boolean;
+  healthStatus: OperationalReadinessHealth["status"];
+  historyAvailability: BoundedHistoryAvailability | ReadinessUnknown;
+}): { status: OperationalReadinessStatus; reasons: string[] } {
+  const reasons: string[] = [];
+
+  if (args.holdActive) {
+    reasons.push("HOLD_ACTIVE");
+  }
+  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
+    reasons.push("HEALTH_NOT_OBSERVED");
+  }
+  if (args.historyAvailability === "NOT_AVAILABLE") {
+    reasons.push("HISTORY_NOT_AVAILABLE");
+  } else if (args.historyAvailability === "UNKNOWN") {
+    reasons.push("HISTORY_UNKNOWN");
+  }
+
+  // Hold blocks transitions → NOT_READY (never READY while hold active).
+  if (args.holdActive) {
+    return { status: "NOT_READY", reasons };
+  }
+
+  // Without an observed health probe, never claim READY.
+  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
+    return { status: "UNKNOWN", reasons };
+  }
+
+  if (args.historyAvailability === "NOT_AVAILABLE") {
+    return { status: "UNKNOWN", reasons };
+  }
+
+  return { status: "READY", reasons: reasons.length ? reasons : ["OBSERVED_OK"] };
+}
+
 export function queryOperationalReadiness(
   input: OperationalReadinessQueryInput = {},
 ): OperationalReadinessSnapshot {
@@ -101,11 +162,33 @@ export function queryOperationalReadiness(
     p.startsWith("method/"),
   );

+  const health: OperationalReadinessHealth = {
+    status: "SIMULATED",
+    detail:
+      "No production readiness probe; simulated/local observation only — not evidence of healthy runtime.",
+  };
+
+  const derived = deriveReadinessStatus({
+    holdActive: hold.active,
+    healthStatus: health.status,
+    historyAvailability: historyPage.availability,
+  });
+
   const snapshot: OperationalReadinessSnapshot = {
-    schemaVersion: "t-a7-f11.2-lot1",
+    schemaVersion: "t-a7-f11.2-l-f11f13",
+    accessSurface: "INTERNAL_ONLY",
+    readinessStatus: derived.status,
+    readinessReasons: derived.reasons,
     evaluatedAt: new Date().toISOString(),
     timezoneNote: "timestamps are ISO-8601 UTC (Z)",
-    completeness: "BOUNDED_LOT_1",
+    completeness: "BOUNDED_L_F11F13",
+    iam: "NOT_SELECTED",
+    persistence: "NOT_SELECTED",
+    audit: {
+      status: "DEFERRED_EXPLICITLY",
+      detail:
+        "D2 — read audit journal deferred; no persistent audit store in this lot.",
+    },
     observed: {
       projectId: project?.projectId ?? null,
       methodMode: project?.methodMode ?? null,
@@ -119,12 +202,9 @@ export function queryOperationalReadiness(
       },
       migration: {
         status: "NOT_STARTED",
-        detail: "No migration authorized in T-A7 lot 1.",
-      },
-      health: {
-        status: "SIMULATED",
-        detail: "No production readiness probe; simulated/local observation only.",
+        detail: "No migration authorized in T-A7 L-F11F13.",
       },
+      health,
       history: summarizeHistory(historyPage),
       openBlockers: hold.reasons.map((r) => r.code),
     },
@@ -138,6 +218,8 @@ export function queryOperationalReadiness(

   return Object.freeze({
     ...snapshot,
+    readinessReasons: Object.freeze([...snapshot.readinessReasons]),
+    audit: Object.freeze({ ...snapshot.audit }),
     observed: Object.freeze({
       ...snapshot.observed,
       hold: Object.freeze({
@@ -168,8 +250,11 @@ export function assertOperationalReadinessReadOnly(
   if (
     snapshot.mutable !== false ||
     snapshot.adminUi !== false ||
-    snapshot.writeCommands !== false
+    snapshot.writeCommands !== false ||
+    snapshot.accessSurface !== "INTERNAL_ONLY"
   ) {
-    throw new Error("Operational readiness snapshot must remain read-only.");
+    throw new Error(
+      "Operational readiness snapshot must remain read-only and INTERNAL_ONLY.",
+    );
   }
 }
diff --git a/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts b/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
index 2be059a..24ad909 100644
--- a/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
+++ b/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
@@ -1,10 +1,16 @@
 /**
- * T-A7 Lot 1 — F13.4 bounded read-only history foundation.
- * Git remains canonical. No migration, no durable store, no UI, no ACL/IAM.
+ * T-A7 L-F11F13 — F13.4 bounded read-only history foundation.
+ * Git remains canonical. Seed enriched + explicit gitCanonicalSha.
+ * Pagination: PREFIX_ONLY. Retention: GIT_ONLY. Audit: deferred.
+ * No migration, durable store, UI, HTTP, ACL/IAM.
  */

 export const BOUNDED_HISTORY_MAX_ITEMS = 50 as const;

+/** Pinned tip for documentary seed (main after PR #287). Caller may override. */
+export const DEFAULT_BOUNDED_HISTORY_GIT_SHA =
+  "770605bcfa4cc3e403ee2c4615c1a115ccd38458" as const;
+
 export type BoundedHistoryAvailability =
   | "PARTIAL"
   | "NOT_AVAILABLE"
@@ -12,6 +18,10 @@ export type BoundedHistoryAvailability =

 export type BoundedHistoryEntryStatus = "HISTORICAL" | "ACTIVE_REFERENCE";

+export type BoundedHistoryPaginationMode = "PREFIX_ONLY";
+
+export type BoundedHistoryRetention = "GIT_ONLY";
+
 export interface BoundedHistoryEntry {
   readonly id: string;
   readonly category: string;
@@ -24,6 +34,20 @@ export interface BoundedHistoryEntry {
   readonly metadata: Readonly<Record<string, string>>;
 }

+export interface BoundedHistoryPagination {
+  readonly mode: BoundedHistoryPaginationMode;
+  /** Prefix length requested (clamped). */
+  readonly prefixLength: number;
+  /** Always null — D4 forbids multi-page cursors in this lot. */
+  readonly nextCursor: null;
+  readonly hasMore: boolean;
+}
+
+export interface BoundedHistoryAudit {
+  readonly status: "DEFERRED_EXPLICITLY";
+  readonly detail: string;
+}
+
 export interface BoundedHistoryPage {
   readonly availability: BoundedHistoryAvailability;
   readonly items: readonly BoundedHistoryEntry[];
@@ -31,14 +55,31 @@ export interface BoundedHistoryPage {
   readonly returned: number;
   readonly truncated: boolean;
   readonly gitCanonical: true;
+  /** Full-length Git object id tying this page to a canonical tip. */
+  readonly gitCanonicalSha: string;
+  readonly pagination: BoundedHistoryPagination;
+  readonly paginationMode: BoundedHistoryPaginationMode;
+  readonly retention: BoundedHistoryRetention;
+  readonly audit: BoundedHistoryAudit;
   readonly mutable: false;
   readonly evaluatedAt: string;
-  readonly completeness: "BOUNDED_LOT_1";
+  readonly completeness: "BOUNDED_L_F11F13";
   readonly note: string;
 }

 export interface BoundedHistoryReadRequest {
+  /** Prefix length (PREFIX_ONLY). Alias of historical `limit`. */
   readonly limit?: number;
+  readonly prefixLength?: number;
+}
+
+export interface DocumentaryBoundedHistoryProviderOptions {
+  readonly seed?: readonly BoundedHistoryEntry[];
+  /**
+   * Canonical Git SHA for this page. Injected by caller / default pinned tip.
+   * No arbitrary git shell in product runtime.
+   */
+  readonly gitCanonicalSha?: string;
 }

 export class BoundedHistoryMutationError extends Error {
@@ -53,6 +94,18 @@ export interface BoundedHistoryProvider {
   readonly read: (request?: BoundedHistoryReadRequest) => BoundedHistoryPage;
 }

+const GIT_SHA_FULL_RE = /^[0-9a-f]{40}$/i;
+
+/** Validate a full Git object id (40 hex). Fail closed on invalid input. */
+export function assertGitCanonicalSha(sha: string): string {
+  if (typeof sha !== "string" || !GIT_SHA_FULL_RE.test(sha.trim())) {
+    throw new RangeError(
+      "gitCanonicalSha must be a 40-character hexadecimal Git object id",
+    );
+  }
+  return sha.trim().toLowerCase();
+}
+
 function freezeEntry(entry: BoundedHistoryEntry): BoundedHistoryEntry {
   return Object.freeze({
     ...entry,
@@ -65,10 +118,22 @@ function freezePage(page: BoundedHistoryPage): BoundedHistoryPage {
   return Object.freeze({
     ...page,
     items: Object.freeze(page.items.map(freezeEntry)),
+    pagination: Object.freeze({ ...page.pagination }),
+    audit: Object.freeze({ ...page.audit }),
   });
 }

-/** Documentary/Git references known from T-A7 packs — not a full archive. */
+function resolvePrefixLength(request: BoundedHistoryReadRequest): number {
+  const raw =
+    request.prefixLength !== undefined ? request.prefixLength : request.limit;
+  const value = raw ?? BOUNDED_HISTORY_MAX_ITEMS;
+  if (!Number.isFinite(value) || value <= 0) {
+    throw new RangeError("prefixLength/limit must be a positive number");
+  }
+  return Math.min(Math.floor(value), BOUNDED_HISTORY_MAX_ITEMS);
+}
+
+/** Documentary/Git references — enriched seed, ordered stably (prefix-only). */
 const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
   freezeEntry({
     id: "hist-t-a7-f03-f11-f13",
@@ -99,67 +164,163 @@ const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
     },
   }),
   freezeEntry({
-    id: "hist-t-a7-technical-readiness",
+    id: "hist-t-a7-technical-readiness-frame",
     category: "readiness-pack",
-    status: "ACTIVE_REFERENCE",
+    status: "HISTORICAL",
     occurredAt: "2026-07-28T18:40:10.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563",
+    },
+    metadata: {
+      pack: "t-a7-technical-readiness-framing",
+      commit: "docs-frame",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-lot1-feat",
+    category: "readiness-foundation",
+    status: "HISTORICAL",
+    occurredAt: "2026-07-28T19:20:08.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "47e26fdc851b82588aa5225aca84307543147160",
+    },
+    metadata: {
+      commit: "feat-bounded-foundations",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-lot1-harden",
+    category: "readiness-foundation",
+    status: "HISTORICAL",
+    occurredAt: "2026-07-28T19:37:59.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "b6a19335f5116940175f5986492e3693722563bc",
+    },
+    metadata: {
+      commit: "fix-harden-override",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-lot1-merged-main",
+    category: "integration",
+    status: "ACTIVE_REFERENCE",
+    occurredAt: "2026-07-28T19:52:20.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "770605bcfa4cc3e403ee2c4615c1a115ccd38458",
+    },
+    metadata: {
+      pr: "287",
+      note: "lot-1-integrated-on-main",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-technical-readiness-pack-path",
+    category: "documentary-pack",
+    status: "ACTIVE_REFERENCE",
+    occurredAt: "2026-07-28T22:45:18.000Z",
     gitProvenance: {
       kind: "documentary-pack",
       ref: "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/",
     },
     metadata: {
-      lot: "bounded-technical-preparation-o2",
+      lot: "n3-completion-framing",
     },
   }),
 ]);

+function buildPage(args: {
+  availability: BoundedHistoryAvailability;
+  items: readonly BoundedHistoryEntry[];
+  prefixLength: number;
+  truncated: boolean;
+  gitCanonicalSha: string;
+  note: string;
+}): BoundedHistoryPage {
+  return freezePage({
+    availability: args.availability,
+    items: args.items,
+    limit: args.prefixLength,
+    returned: args.items.length,
+    truncated: args.truncated,
+    gitCanonical: true,
+    gitCanonicalSha: args.gitCanonicalSha,
+    pagination: {
+      mode: "PREFIX_ONLY",
+      prefixLength: args.prefixLength,
+      nextCursor: null,
+      hasMore: args.truncated,
+    },
+    paginationMode: "PREFIX_ONLY",
+    retention: "GIT_ONLY",
+    audit: {
+      status: "DEFERRED_EXPLICITLY",
+      detail: "D2 — read audit deferred; no persistent access journal.",
+    },
+    mutable: false,
+    evaluatedAt: new Date().toISOString(),
+    completeness: "BOUNDED_L_F11F13",
+    note: args.note,
+  });
+}
+
 export function createDocumentaryBoundedHistoryProvider(
-  seed: readonly BoundedHistoryEntry[] = DOCUMENTARY_SEED,
+  options: DocumentaryBoundedHistoryProviderOptions | readonly BoundedHistoryEntry[] = {},
 ): BoundedHistoryProvider {
-  const frozenSeed = Object.freeze(seed.map(freezeEntry));
+  // Back-compat: previous signature accepted seed array as first arg.
+  const opts: DocumentaryBoundedHistoryProviderOptions = Array.isArray(options)
+    ? { seed: options }
+    : options;
+
+  const frozenSeed = Object.freeze(
+    (opts.seed ?? DOCUMENTARY_SEED).map(freezeEntry),
+  );
+  const gitCanonicalSha = assertGitCanonicalSha(
+    opts.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
+  );
+
   return {
     read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
-      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
-      if (!Number.isFinite(rawLimit) || rawLimit <= 0) {
-        throw new RangeError("limit must be a positive number");
-      }
-      const limit = Math.min(Math.floor(rawLimit), BOUNDED_HISTORY_MAX_ITEMS);
-      const slice = frozenSeed.slice(0, limit);
-      return freezePage({
+      const prefixLength = resolvePrefixLength(request);
+      const slice = frozenSeed.slice(0, prefixLength);
+      return buildPage({
         availability: frozenSeed.length === 0 ? "EMPTY" : "PARTIAL",
         items: slice,
-        limit,
-        returned: slice.length,
+        prefixLength,
         truncated: frozenSeed.length > slice.length,
-        gitCanonical: true,
-        mutable: false,
-        evaluatedAt: new Date().toISOString(),
-        completeness: "BOUNDED_LOT_1",
-        note: "Git remains canonical. This page is a bounded documentary/metadata view only.",
+        gitCanonicalSha,
+        note:
+          "Git remains canonical (D5 GIT_ONLY). PREFIX_ONLY pagination (D4). " +
+          "Page tied to injected/pinned gitCanonicalSha — not a live git shell.",
       });
     },
   };
 }

-export function createUnavailableBoundedHistoryProvider(): BoundedHistoryProvider {
+export function createUnavailableBoundedHistoryProvider(
+  options: Pick<DocumentaryBoundedHistoryProviderOptions, "gitCanonicalSha"> = {},
+): BoundedHistoryProvider {
+  const gitCanonicalSha = assertGitCanonicalSha(
+    options.gitCanonicalSha ?? DEFAULT_BOUNDED_HISTORY_GIT_SHA,
+  );
   return {
     read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
-      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
-      const limit = Math.min(
-        Math.max(1, Math.floor(Number.isFinite(rawLimit) ? rawLimit : 1)),
-        BOUNDED_HISTORY_MAX_ITEMS,
-      );
-      return freezePage({
+      let prefixLength = 1;
+      try {
+        prefixLength = resolvePrefixLength(request);
+      } catch {
+        prefixLength = 1;
+      }
+      return buildPage({
         availability: "NOT_AVAILABLE",
         items: [],
-        limit,
-        returned: 0,
+        prefixLength,
         truncated: false,
-        gitCanonical: true,
-        mutable: false,
-        evaluatedAt: new Date().toISOString(),
-        completeness: "BOUNDED_LOT_1",
-        note: "Bounded history provider unavailable; Git remains canonical.",
+        gitCanonicalSha,
+        note: "Bounded history provider unavailable; Git remains canonical (GIT_ONLY).",
       });
     },
   };
@@ -167,11 +328,17 @@ export function createUnavailableBoundedHistoryProvider(): BoundedHistoryProvide

 /** Refuse mutation attempts against a frozen page (contract guard). */
 export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
-  if (page.mutable !== false || page.gitCanonical !== true) {
+  if (
+    page.mutable !== false ||
+    page.gitCanonical !== true ||
+    page.retention !== "GIT_ONLY" ||
+    page.paginationMode !== "PREFIX_ONLY"
+  ) {
     throw new BoundedHistoryMutationError(
-      "Bounded history page must declare mutable=false and gitCanonical=true.",
+      "Bounded history page must declare mutable=false, gitCanonical=true, GIT_ONLY, PREFIX_ONLY.",
     );
   }
+  assertGitCanonicalSha(page.gitCanonicalSha);
   try {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     (page as any).items = [];
@@ -180,7 +347,6 @@ export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
     );
   } catch (error) {
     if (error instanceof BoundedHistoryMutationError) throw error;
-    // TypeError from frozen object — expected
   }
   try {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/11-t-a7-lot1-post-merge-and-next-blocker-framing.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/11-t-a7-lot1-post-merge-and-next-blocker-framing.md
new file mode 100644
index 0000000..7b4435a
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/11-t-a7-lot1-post-merge-and-next-blocker-framing.md
@@ -0,0 +1,335 @@
+# 11 — T-A7 lot 1 post-merge & next blocker-reduction framing
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `11-t-a7-lot1-post-merge-and-next-blocker-framing.md` |
+| **Date/heure/fuseau** | 2026-07-28 22:16:12 CEST (+0200) |
+| **Gate consommé** | `GO POST-MERGE T-A7 FIRST BOUNDED DEVELOPMENT LOT — CONFIRM MAIN INTEGRATION — CORRECT STALE LOCAL-ONLY README STATUS IF NEEDED — FRAME NEXT BLOCKER-REDUCTION CYCLE — NO DELIVERY OR CUTOVER` |
+| **Base** | `origin/main` @ `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
+| **Branche locale** | `docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing` |
+| **Push / PR projet** | **aucun** (cycle documentaire local) |
+| **Code / tests** | **aucune modification** |
+
+---
+
+## 1. Sources Git
+
+| Source | Référence |
+|--------|-----------|
+| PR | [#287](https://github.com/mcleland147/sfia-workspace/pull/287) |
+| Merge | `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
+| Parents | `2a3c59c…` + `b6a19335…` |
+| Tree | `712720a1a2371f98c137a6c8b29299ac556299c7` |
+| Checks PR | run `30393629328` SUCCESS |
+| Checks post-merge | run `30393814783` SUCCESS |
+| Branche source | `origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` @ `b6a19335…` |
+| Handoff intégration | blob `2d0959c456f728a1ef0ad7be43ef3197108eba47` |
+| Pack | `t-a7-technical-readiness-framing/` (01–10 + README) |
+
+Quatre commits intégrés :
+
+1. `a33f4a32…` docs framing
+2. `01410377…` test evidence O2
+3. `47e26fdc…` feat foundations
+4. `b6a19335…` fix harden override
+
+---
+
+## 2. Confirmation post-merge
+
+| Contrôle | Attendu | Observé | Preuve | Verdict |
+|----------|---------|---------|--------|---------|
+| PR #287 mergée | MERGED | MERGED 2026-07-28T19:52:20Z | `gh pr view 287` | PASS |
+| Merge commit | `770605bc…` | exact | `origin/main` | PASS |
+| Parents | main pré + HEAD lot | `2a3c59c…` + `b6a19335…` | `git cat-file -p` | PASS |
+| Tree | tree lot | `712720a1…` | merge object | PASS |
+| 4 commits | présents | 4 | log PR | PASS |
+| Branche source | préservée | `b6a19335…` remote | `ls-remote` | PASS |
+| Checks PR | verts | Detect/Build/Gate SUCCESS | run `30393629328` | PASS |
+| Checks post-merge | verts | Detect/Build/Gate SUCCESS | run `30393814783` | PASS |
+| Blobs hold/F11/F13 | présents | hold `30220327…` · test-only `ad9d1a5c…` · F11 `1ae8deac…` · F13 `2be059af…` | `git rev-parse main:path` | PASS |
+| Barrel D1 | sans override | BARREL_CLEAN | `index.ts` | PASS |
+| Override | test-only | `methodModeHold.test-only.ts` | blob `ad9d1a5c…` | PASS |
+| Hold | ACTIVE défaut | module + raisons B5/R1/… | code main | PASS |
+| F11.2 | RO fondation | `operationalReadiness.ts` | main | PASS |
+| F13.4 | RO bornée | `boundedHistoryRead.ts` | main | PASS |
+| Déploiement/cutover | non déclenché | CI Studio seulement | runs GitHub | PASS |
+
+**Verdict :** `T-A7 LOT 1 MAIN INTEGRATION CONFIRMED — POST-MERGE VERIFIED`
+
+---
+
+## 3. Surfaces intégrées (état)
+
+| Surface | État | Limite |
+|---------|------|--------|
+| MethodMode hold | intégré · défaut ACTIVE · CONFLICT | pas de hold DB persistant · pas IAM |
+| Test override | test-only · hors barrel · boundary tests | store module-level résiduel Info |
+| F11.2 | query interne RO · frozen snapshot | pas d’API HTTP · pas d’UI admin |
+| F13.4 | provider documentary/Git · max 50 · immutable | pas de vue runtime finale · pas ACL |
+
+---
+
+## 4. P03–P11 (sans promotion artificielle)
+
+| ID | État actuel | Preuves sur main | Écart restant | Bloquant pour |
+|----|-------------|------------------|---------------|---------------|
+| P03 | PARTIAL | `canonicalPaths` · probes | adoption produit globale | cutover / remplacement OA |
+| P04 | PARTIAL | `sourceLoader` · asymmetry probe | loader cutover unique | cutover |
+| P05 | PARTIAL | CKC · OA sans import method | guidance-only | cutover |
+| P06 | PARTIAL | hold lot 1 | session OA correlation | cutover · delivery prep |
+| P07 | PARTIAL | hold bloque transitions | MethodMode toujours présent | cutover |
+| P08 | MISSING | allowlist method active | lectures `method/**` absentes OA | cutover · lot N1 |
+| P09 | MISSING | UI OA native absente | badges/surfaces OA | cutover · lot N1 |
+| P10 | PARTIAL | import boundaries · isolation probe | live runtime OPS1↔OA | cutover · lot N2 |
+| P11 | PARTIAL | F13.4 fondation | vue RO finale | cutover · lot N3 |
+
+Aucun P03–P11 en `SATISFIED` pour le **remplacement** Option A.
+
+Distinction :
+
+- **prochain développement borné** : peut cibler une fondation/preuve (N1–N4) sous gate Morris ;
+- **delivery preparation / delivery / cutover** : toujours `NOT AUTHORIZED`.
+
+---
+
+## 5. F03.3
+
+`F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED`
+
+- critères documentaires / décisions : largement satisfaits ;
+- critères d’implémentation cutover : **non** satisfaits ;
+- lot 1 a réduit des blockers d’implémentation (hold · F11/F13 fondations) **sans** fermer B5/R1/R-M01/HARD.
+
+**Ne pas déclarer** F03.3 fully satisfied.
+
+---
+
+## 6. Blockers ouverts
+
+| Blocker | Preuve | Risque | Dépendances | Réductible maintenant ? | Gate requis |
+|---------|--------|--------|-------------|-------------------------|-------------|
+| P08 lectures method | allowlist active · probes | lecture legacy silencieuse | F03 · path-policy | cadrage oui · code sous gate N1 | N1 |
+| P09 badges/UI OA | absence UI OA | confusion UX | F11 · design | cadrage oui · UI sous gate futur | N1 |
+| Live OPS1↔OA isolation | static PARTIAL · live UNKNOWN | double identité | W1-D04 · env `.sfia-exec` | preuve oui · pas de mod OPS1 | N2 |
+| F11.2 API/exposition finale | fondation RO seule | claim cutover prématuré | IAM? UI? | cadrage écart oui | N3 |
+| F13.4 vue runtime finale | fondation métadonnées | mutation historique | persistence? ACL? | cadrage écart oui | N3 |
+| Rollback R1–R3 | doc `04` NOT TESTED | rollback non prouvé | delivery futur | cadrage oui · pas d’exécution | N4 |
+| B5 | OPEN · STOP BEFORE DELIVERY | delivery prématuré | HARD | **non fermer** | N4 / gate delivery |
+| R1 atomicité | OPEN | incohérence état | delivery | **non fermer** | N4 |
+| R-M01 ClaimEvaluator | OPEN | claims non prêts | T-A6 | **non fermer** | N4 |
+| HARD | OPEN HARD | exécution réelle | B5 | **non fermer** | delivery/cutover |
+| Persistence | NOT SELECTED | store caché | F13 | **ne pas sélectionner** | gate futur |
+| IAM | NOT SELECTED | exposition ACL | F11 | **ne pas sélectionner** | gate futur |
+| RGPD production | NOT VALIDATED | conformité | IAM/data | hors lot | gate futur |
+
+---
+
+## 7. Dette / limites du lot 1
+
+- hold non persistant DB ;
+- F11/F13 incomplets vs surfaces finales ;
+- P08/P09 toujours MISSING ;
+- live OPS1 non instrumenté ;
+- R1–R3 non testés ;
+- README local pré-intégration était stale (corrigé dans ce cycle).
+
+---
+
+## 8. Options prochain cycle
+
+### N1 — P08/P09 replacement foundations
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Cadrer capacités manquantes pour lectures `method/**` absentes OA (P08) et surfaces/badges OA (P09) **sans implémenter** |
+| Valeur immédiate | Empêche un lot code trop large ; clarifie fichiers protégés |
+| Blockers réduits | compréhension P08/P09 (pas fermeture) |
+| Non réduits | B5 · HARD · F11/F13 finales · live OPS1 |
+| Code potentiel futur | loader/CI no-fallback · design UI OA (gates distincts) |
+| Dépendances | F03 · path-policy · design UX |
+| Risques | glissement vers retrait legacy / cutover |
+| Dette | pack doc supplémentaire |
+| Réversibilité | haute (doc) |
+| Gate Morris | `GO FRAME T-A7 N1 P08 P09 REPLACEMENT FOUNDATIONS — NO METHOD RETIREMENT UI DELIVERY OR CUTOVER` |
+| Impact delivery/cutover | aucun autorisé |
+| Profil | Critical |
+
+### N2 — OPS1 runtime isolation evidence
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Compléter preuves dynamiques live OPS1↔OA et hits allowlist **sans modifier OPS1** |
+| Valeur immédiate | réduit UNKNOWN live / volumes |
+| Blockers réduits | profondeur P10 evidence |
+| Non réduits | P08/P09 · F11/F13 finales · B5 |
+| Code potentiel futur | probes/instrumentation read-only |
+| Dépendances | environnement `.sfia-exec` / session live |
+| Risques | fausse confiance « isolation cutover » |
+| Dette | campagne evidence |
+| Réversibilité | haute |
+| Gate Morris | `GO COLLECT T-A7 N2 OPS1 RUNTIME ISOLATION EVIDENCE — NO OPS1 FUNCTIONAL CHANGE DELIVERY OR CUTOVER` |
+| Impact delivery/cutover | aucun |
+| Profil | Critical |
+
+### N3 — F11.2/F13.4 completion framing
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Définir l’écart fondations intégrées ↔ surfaces finales **sans** choisir persistence, IAM ou UI |
+| Valeur immédiate | cadre le prochain lot technique sur surfaces déjà livrées |
+| Blockers réduits | ambiguïté F11/F13 « done » |
+| Non réduits | P08/P09 · live OPS1 · B5/HARD |
+| Code potentiel futur | API interne élargie / vue RO (gates futurs) |
+| Dépendances | lot 1 sur main · décisions F11.2/F13.4 |
+| Risques | sélection implicite IAM/persistence |
+| Dette | doc d’écart |
+| Réversibilité | haute |
+| Gate Morris | `GO FRAME T-A7 N3 F11.2 F13.4 COMPLETION GAP — NO PERSISTENCE IAM UI DELIVERY OR CUTOVER` |
+| Impact delivery/cutover | aucun |
+| Profil | Critical |
+
+### N4 — Rollback and blocker-control readiness
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Cadrer R1–R3, B5, R1, R-M01, HARD **sans les fermer** |
+| Valeur immédiate | readiness gouvernance avant tout lot delivery-adjacent |
+| Blockers réduits | flou sur rollback / stop conditions |
+| Non réduits | P08/P09 · F11/F13 finales |
+| Code potentiel futur | drills rollback (gate distinct) |
+| Dépendances | doc `04` · `06` |
+| Risques | pseudo-fermeture de blockers |
+| Dette | pack gouvernance |
+| Réversibilité | haute |
+| Gate Morris | `GO FRAME T-A7 N4 ROLLBACK AND BLOCKER CONTROLS — KEEP B5 R1 R-M01 HARD OPEN — NO DELIVERY OR CUTOVER` |
+| Impact delivery/cutover | aucun |
+| Profil | Critical |
+
+### N5 — Custom / différer
+
+Différer tout nouveau lot T-A7 ; capitaliser ailleurs ; attendre décision produit.
+
+Gate : `GO DEFER T-A7 NEXT BLOCKER-REDUCTION LOT — NO DEVELOPMENT DELIVERY OR CUTOVER`
+
+---
+
+## 9. Comparaison
+
+| Critère | N1 | N2 | N3 | N4 | N5 |
+|---------|----|----|----|----|-----|
+| Utile maintenant | moyen | fort (UNKNOWN) | **fort** (suite lot 1) | moyen | contexte-dépendant |
+| Proximité produit | élevée (risque) | preuve | cadrage produit | gouvernance | nulle |
+| Risque cutover drift | élevé | moyen | contrôlé | bas | nul |
+| Besoin code | futur | probes possibles | non | non | non |
+| Continuité lot 1 | partielle | faible | **directe** | latérale | — |
+
+**Combinaison** N3+N2 possible seulement si périmètre reste purement cadrage/evidence — sinon séparer.
+
+---
+
+## 10. Recommandation
+
+**Statut :** `RECOMMENDED — NOT DECIDED`
+
+**Option recommandée :** **N3** — F11.2/F13.4 completion framing
+
+### Challenge
+
+| Question | Réponse |
+|----------|---------|
+| Utile maintenant ? | oui — évite de traiter les fondations comme finales |
+| Blocker réduit ? | ambiguïté « F11/F13 done » ; prépare lot technique borné |
+| Dette ? | documentaire seulement |
+| Plus simple ? | oui vs N1 (retrait/UI) ou code immédiat |
+| Repo-first ? | s’appuie sur blobs main lot 1 |
+| Exécution vs arbitrage ? | arbitrage Morris puis cadrage Cursor |
+| Gate nécessaire ? | oui |
+| Produit vs preuve ? | rapproche du **cadrage produit** des surfaces déjà intégrées |
+
+**Alternatives fortes :** N2 (si priorité = UNKNOWN live) · N4 (si priorité = stop/rollback avant tout code).
+
+**Non recommandé maintenant :** N1 comme premier lot post-intégration (trop proche cutover/retrait/UI sans écart F11/F13 clarifié).
+
+---
+
+## 11. Bulletin Morris
+
+### Question
+
+Quel prochain cycle T-A7 doit être ouvert après l’intégration du lot 1 ?
+
+### Options
+
+- **N1** — P08/P09 replacement foundations (cadrage)
+- **N2** — OPS1 runtime isolation evidence
+- **N3** — F11.2/F13.4 completion framing *(recommandé, non décidé)*
+- **N4** — Rollback and blocker-control readiness
+- **N5** — Custom / différer
+
+### État repo
+
+- `main` @ `770605bc…` · lot 1 intégré · hold/F11/F13 fondations présentes
+- T-A7 `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY`
+- B5/R1/R-M01/HARD OPEN · delivery/cutover NOT AUTHORIZED
+
+### Bénéfices / blockers / risques / dette
+
+Voir §8–§10. Aucune option ne ferme B5/HARD ni n’autorise delivery.
+
+### Fichiers candidats (futurs, non touchés ici)
+
+- pack `t-a7-technical-readiness-framing/` extensions
+- éventuellement probes read-only (N2) sous gate
+
+### Fichiers protégés
+
+- `method/**` · OPS1 fonctionnel · migrations · IAM · UI runtime · CI
+
+### Tests candidats
+
+- aucune exécution dans ce cycle ; futurs : boundaries · probes live (N2) · non-régression hold
+
+### Stop conditions
+
+- toute demande de fermer B5/HARD ;
+- sélection persistence/IAM dans un lot « cadrage » ;
+- push/PR non autorisés ;
+- retrait `method/**` ;
+- claim delivery/cutover.
+
+### Profil
+
+Critical
+
+### Gate générique
+
+`GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N1 N2 N3 N4 OR CUSTOM — NO DELIVERY OR CUTOVER`
+
+**Statut bulletin :** `MORRIS DECISION REQUIRED`
+
+---
+
+## 12. Anti-claims
+
+- post-merge confirmé ≠ delivery ready ;
+- lot 1 intégré ≠ T-A7 entièrement ouvert ;
+- README corrigé ≠ nouvelle baseline produit ;
+- cadrage suivant ≠ lot autorisé ;
+- recommandation ≠ décision ;
+- fondations F11/F13 ≠ surfaces finales ;
+- blockers documentés ≠ blockers fermés.
+
+---
+
+## 13. Gate candidat
+
+`GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N1 N2 N3 N4 OR CUSTOM — NO DELIVERY OR CUTOVER`
+
+**Statut :** `NOT CONSUMED`
+
+---
+
+## 14. Verdict
+
+`T-A7 LOT 1 POST-MERGE CONFIRMED — PR #287 AND POST-MERGE CHECKS VERIFIED — SOURCE BRANCH PRESERVED — README ALIGNED TO MAIN WITH HISTORICAL LOCAL-ONLY SECTION — P03 TO P11 AND F03.3 REASSESSED WITHOUT PROMOTION — BLOCKERS STRUCTURED — N1 TO N5 FRAMED — MORRIS DECISION REQUIRED — NO CODE PUSH PR MERGE DELIVERY OR CUTOVER`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
new file mode 100644
index 0000000..38bf0d3
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/12-f11-2-completion-surface-and-gaps.md
@@ -0,0 +1,171 @@
+# 12 — F11.2 completion surface & gaps
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `12-f11-2-completion-surface-and-gaps.md` |
+| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Décision parent** | D-T-A7-F11 = **F11.2** (`DECIDED`) |
+| **Gate N3** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 …` · **N3 DECIDED** |
+| **Base Git** | `origin/main` @ `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
+| **Implémentation** | **interdite** dans le cycle N3 · **réalisée localement** en L-F11F13 (voir `17`) |
+| **Statut F11.2** | contrat INTERNAL_ONLY L-F11F13 · **≠ cutover-complete** |
+
+---
+
+## 1. État actuel (main)
+
+| Élément | Preuve | Limite |
+|---------|--------|--------|
+| Module | `app/lib/d1/operationalReadiness.ts` | interne TypeScript |
+| Entrée | `queryOperationalReadiness(input?)` | pas de route HTTP |
+| Snapshot | `schemaVersion: t-a7-f11.2-l-f11f13` · frozen | `completeness: BOUNDED_L_F11F13` · `accessSurface: INTERNAL_ONLY` |
+| Readiness | `READY` \| `NOT_READY` \| `UNKNOWN` | absence signal ≠ READY |
+| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` | contrats RO |
+| Hold | lu via `readMethodModeHold` / `decideMethodModeTransition` | défaut ACTIVE |
+| History | résumé F13 (`availability`, `returned`, `gitCanonical`, `gitCanonicalSha`, `PREFIX_ONLY`) | pas d’items complets |
+| Health | `SIMULATED` | pas de probe prod |
+| Audit | `DEFERRED_EXPLICITLY` | D2 |
+| IAM / Persistence | `NOT_SELECTED` | D7 / D8 |
+| Migration | `NOT_STARTED` | pas de schéma |
+| Tests | `t-a7-operational-readiness.test.ts` | L-F11F13 |
+| Barrel | exporté depuis `lib/d1/index.ts` (API produit lecture) | ≠ HTTP public |
+
+**Anti-claim :** contrat interne L-F11F13 ≠ API HTTP · ≠ cutover ready · ≠ IAM.
+
+---
+
+## 2. Finalité cible F11.2
+
+Exigence décidée (pack F03/F11/F13) : **API minimale de lecture / readiness sans UI admin dédiée**, avant tout cutover futur.
+
+Finalité :
+
+- exposer un **état opérationnel observé** (MethodMode, hold, blockers, deps legacy, migration, health, historique borné) ;
+- séparer **observed / decision / recommendation / authorization** ;
+- rester **strictement read-only** ;
+- permettre audit / support / gouvernance **sans** mutation ni console admin.
+
+Consommateurs candidats (non autorisés ici) :
+
+| Consommateur | Besoin | Statut |
+|--------------|--------|--------|
+| Services serveur internes OA/D1 | snapshot local | partiel (appel direct) |
+| Opérateur / Morris (via surface future) | lecture gouvernée | **non exposé** |
+| CI / probes | non-régression RO | tests unitaires existants |
+| UI admin | — | **hors F11.2** (F11.3 non retenue) |
+| Clients HTTP externes | — | **non sélectionné** |
+
+---
+
+## 3. Contrat fonctionnel cible (minimal)
+
+### 3.1 Données exposées (cible)
+
+| Domaine | Fondation actuelle | Cible minimale complète | Gap |
+|---------|--------------------|-------------------------|-----|
+| Identity projet | `projectId` optionnel injecté | résolution projet bornée documentée | qui fournit le projet ? |
+| MethodMode | mode + state si projet fourni | lecture mode/state stable + version/optimistic si pertinent | pas de binding session OA |
+| Hold | actif + reasons codes | hold + provenance + evaluatedAt + codes stables | OK partiel |
+| Blockers | codes hold | mapping explicite B5/R1/R-M01/HARD ≠ fermeture | OK partiel |
+| Legacy deps | METHOD_MODES + canonical paths | inventaire versionné / digest éventuel | digest non exposé |
+| Migration | NOT_STARTED | enum élargi + détail non-bavard | pas de pipeline |
+| Health | SIMULATED | états observés documentés (local/unknown/degraded) | pas de probe |
+| History summary | availability/returned | lien stable vers page F13 + fraîcheur | pas de cursor/page id |
+| Decision layer | BLOCK/ALLOW + authz strings | inchangé fonctionnellement | OK |
+| Audit lecture | absente | événement borné (qui/quand/quoi résumé) | **MISSING** |
+
+### 3.2 Contrat read-only (normatif)
+
+- `mutable=false` · `adminUi=false` · `writeCommands=false` obligatoires ;
+- aucune commande write via cette surface ;
+- aucune mutation MethodMode / history / DB via F11.2 ;
+- résultat immuable (freeze / copie) ;
+- erreurs non bavardes (pas de secrets, pas de chemins utilisateur absolus).
+
+### 3.3 Erreurs / disponibilité / fraîcheur
+
+| Aspect | Fondation | Cible | Gap |
+|--------|-----------|-------|-----|
+| Erreurs | throw D1Error côté hold transitions (pas F11 query) | codes readiness explicites (INVALID_INPUT, UNAVAILABLE, FORBIDDEN_IF_IAM) | codes non formalisés |
+| Disponibilité | toujours local-sync | documenter dégradé si provider history/hold unavailable | partiel (history provider injectable) |
+| Fraîcheur | `evaluatedAt` ISO Z | TTL/freshness note (sans SLA prod) | pas de TTL |
+| Observabilité | logs D1 hold séparés | event `readiness_queried` borné | **MISSING** |
+
+---
+
+## 4. IAM / sécurité / RGPD
+
+| Frontière | Statut | Note |
+|-----------|--------|------|
+| Authentification | **NOT SELECTED** | pas d’identité d’acteur sur la query actuelle |
+| Autorisation | hold ≠ IAM | `authorization` = décision hold, **pas** ACL produit |
+| IAM production | **NOT SELECTED** | décision Morris future obligatoire avant exposition HTTP |
+| Path-policy | distincte IAM | inchangée par F11.2 |
+| Données | métadonnées gouvernance / ids projet | pas de PII documentée ; minimisation requise |
+| RGPD production | **NOT VALIDATED** | si HTTP/UI futurs → DPIA/cycle distinct |
+
+**Règle N3 :** ne **pas** sélectionner de mécanisme IAM dans ce document.
+
+---
+
+## 5. Gaps / dépendances / blockers
+
+| ID | Type | Description | Bloque | Décision Morris ? |
+|----|------|-------------|--------|-------------------|
+| G-F11-01 | gap fonc. | pas d’API HTTP / port serveur formalisé | « API finale » | oui (lot futur) |
+| G-F11-02 | gap fonc. | pas d’audit de lecture | conformité F11 normative | oui/non selon lot |
+| G-F11-03 | gap tech. | health SIMULATED seulement | readiness prod claim | oui (probe) |
+| G-F11-04 | dépendance | F13 summary → fondation F13.4 | cohérence historique | N3 (ce pack) |
+| G-F11-05 | dépendance | hold MethodMode | décision transition | déjà lot 1 |
+| G-F11-06 | blocker | IAM NOT SELECTED | exposition multi-acteur | **oui avant HTTP** |
+| G-F11-07 | blocker | B5/HARD OPEN | delivery/cutover | ne pas fermer |
+| G-F11-08 | gap | pas de binding session OA (P06) | cutover | hors N3 impl |
+
+---
+
+## 6. Critères de complétion F11.2 (documentaires)
+
+F11.2 peut être déclaré **complete** seulement si **toutes** les conditions suivantes sont vraies sous preuves Git + gate Morris d’implémentation/validation :
+
+1. contrat read-only normatif respecté runtime ;
+2. surface d’accès **décidée et validée** (interne-only **ou** HTTP — choix Morris) ;
+3. champs cibles §3.1 exposés avec provenance ;
+4. audit de lecture minimal présent **ou** explicitement différé par décision Morris ;
+5. health non-simulé **ou** statut UNKNOWN/DEGRADED honnête documenté pour le niveau revendiqué ;
+6. tests de non-régression RO + frontières import ;
+7. IAM : soit surface server-only mono-opérateur documentée, soit IAM sélectionné+validé ;
+8. **aucune** claim delivery/cutover.
+
+**Statut actuel :** `NOT COMPLETE`.
+
+---
+
+## 7. Non-objectifs
+
+- UI admin (F11.3) ;
+- mutations / write commands ;
+- sélection IAM/persistence ;
+- fermeture B5/R1/R-M01/HARD ;
+- product-complete API OA (A3.2) ;
+- delivery / cutover.
+
+---
+
+## 8. Stop conditions
+
+- besoin d’écrire via readiness ;
+- besoin d’UI admin pour « compléter » F11.2 ;
+- sélection IAM forcée sans gate ;
+- claim « F11.2 complete » sans preuves §6 ;
+- modification OPS1 / `method/**` pour readiness.
+
+---
+
+## 9. Questions d’arbitrage Morris
+
+1. Surface d’accès cible : **server-internal only** vs **HTTP read** (sans UI) ?
+2. Audit de lecture : **requis pour complete** vs **différé** ?
+3. Health : accepter **UNKNOWN/SIMULATED** comme complete documentaire, ou exiger probe ?
+4. Faut-il un lot technique F11-only avant tout lot HTTP ?
+
+Toutes réponses = futurs GO · `RECOMMENDED — NOT DECIDED` hors N3.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
new file mode 100644
index 0000000..73f9ed9
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/13-f13-4-completion-surface-and-gaps.md
@@ -0,0 +1,138 @@
+# 13 — F13.4 completion surface & gaps
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `13-f13-4-completion-surface-and-gaps.md` |
+| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Décision parent** | D-T-A7-F13 = **F13.4** (`DECIDED`) |
+| **Gate N3** | N3 **DECIDED — ADOPTED BY MORRIS** |
+| **Base Git** | `770605bc…` |
+| **Implémentation** | **interdite** en N3 · **réalisée localement** en L-F11F13 (voir `17`) |
+| **Statut F13.4** | seed+SHA · PREFIX_ONLY · GIT_ONLY · **≠ cutover-complete** |
+
+---
+
+## 1. État actuel (main)
+
+| Élément | Preuve | Limite |
+|---------|--------|--------|
+| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` | documentary seed |
+| Max | `BOUNDED_HISTORY_MAX_ITEMS = 50` | hard cap |
+| Providers | documentary · unavailable | pas de Git live shell |
+| Page | frozen · `gitCanonical=true` · `gitCanonicalSha` · `mutable=false` | `BOUNDED_L_F11F13` |
+| Pagination | `PREFIX_ONLY` · `nextCursor=null` | D4 |
+| Retention | `GIT_ONLY` | D5 |
+| Audit | `DEFERRED_EXPLICITLY` | D2 |
+| Seed | enrichi (incl. merge #287 / `770605bc…`) | ≠ archive complète |
+| Availability | PARTIAL / NOT_AVAILABLE / EMPTY | cohérent |
+| Tests | `t-a7-bounded-history.test.ts` | SHA / prefix / volume |
+| Persist store | **aucun** | Git canonique |
+
+**Anti-claim :** seed+SHA L-F11F13 ≠ vue runtime cutover · ≠ ACL · ≠ store concurrent à Git.
+
+---
+
+## 2. Git canonique (normatif)
+
+- Git / packs documentaires = **vérité historique** ;
+- la vue runtime est une **projection bornée** ;
+- interdiction de mutations historiques ;
+- path-policy ≠ IAM ;
+- isolation OPS1 (W1-D04) reste **préalable** à retrait legacy — **non réalisée** ici.
+
+---
+
+## 3. Cible fonctionnelle minimale — vue runtime bornée
+
+| Aspect | Fondation | Cible minimale complète | Gap |
+|--------|-----------|-------------------------|-----|
+| Rôle | métadonnées packs | support/audit/traçabilité RO | pas de parcours opérateur |
+| Périmètre | seed documentary fixe | politique d’inclusion/exclusion documentée (catégories) | politique incomplete |
+| Profondeur | max 50 | max borné + justification + overflow behavior | OK partiel |
+| Pagination | slice prefix only | cursor/offset **ou** explicite « prefix-only » décidé | **MISSING** si multi-page requis |
+| Provenance | git-ref / documentary-pack / synthetic | provenance obligatoire + vérifiabilité | OK partiel |
+| Fraîcheur | `evaluatedAt` | relation à tip Git / pack SHA | pas de tie to HEAD |
+| Cohérence Git | claim `gitCanonical` | preuve que items ⊆ refs Git/packs | seed manuel |
+| Actif vs historique | status enum | frontière sémantique documentée + tests | OK partiel |
+| États dégradés | NOT_AVAILABLE | matrice dégradée + messages | OK partiel |
+| Audit accès | absent | log borné lectures | **MISSING** |
+| Rétention | UNKNOWN | durée conservation (cycle distinct si besoin) | **UNKNOWN** |
+
+---
+
+## 4. Sécurité / observabilité / rétention
+
+| Frontière | Statut |
+|-----------|--------|
+| IAM / ACL | **NOT SELECTED** — lectures actuelles = in-process |
+| AuthN/AuthZ acteur | non modélisées |
+| Contenu sensible | métadonnées packs/PR seulement ; pas de blobs method |
+| Observabilité | pas d’event dédié |
+| Rétention | **UNKNOWN** — à cadrer sous gate distinct si conservation ≠ Git |
+| RGPD | **NOT VALIDATED** — minimisation : pas de PII dans seed actuel |
+
+**Ne pas sélectionner** store durable / cache produit / IAM dans N3.
+
+---
+
+## 5. Gaps / dépendances / blockers
+
+| ID | Type | Description | Bloque | Décision ? |
+|----|------|-------------|--------|------------|
+| G-F13-01 | gap fonc. | seed ≠ archive Git live | vue « runtime » riche | oui (stratégie lecture) |
+| G-F13-02 | gap tech. | pas de pagination multi-page | volumes > 50 | oui si besoin |
+| G-F13-03 | gap | pas d’audit accès | norme F13 | oui/non |
+| G-F13-04 | dépendance | F11 consomme summary | cohérence couple | docs N3 |
+| G-F13-05 | dépendance | OPS1 isolation (P10) | retrait legacy | N2/autre |
+| G-F13-06 | blocker | persistence NOT SELECTED | si cache/index requis | **oui avant store** |
+| G-F13-07 | blocker | IAM NOT SELECTED | si exposition multi-acteur | **oui avant HTTP** |
+| G-F13-08 | unknown | durée conservation | conformité | cycle rétention |
+
+---
+
+## 6. Critères de complétion F13.4
+
+Déclarable **complete** seulement si :
+
+1. Git reste canonique (preuve + tests anti-mutation) ;
+2. politique d’inclusion des items documentée et testée ;
+3. profondeur/pagination décidées et implémentées sous gate ;
+4. états dégradés couverts ;
+5. cohérence provenance ↔ Git/packs démontrable ;
+6. audit accès présent **ou** différé explicitement ;
+7. rétention clarifiée **ou** « Git-only retention » décidé ;
+8. IAM/persistence : soit in-process mono-opérateur documenté, soit sélectionnés+validés ;
+9. **aucune** mutation historique ; **aucune** claim cutover.
+
+**Statut actuel :** `NOT COMPLETE`.
+
+---
+
+## 7. Non-objectifs
+
+- store concurrent à Git ;
+- migration DB historique ;
+- ACL production sans gate ;
+- exposition de contenu `method/**` brut ;
+- UI archive ;
+- retrait OPS1/legacy.
+
+---
+
+## 8. Stop conditions
+
+- tentative de faire de la vue runtime une source canonique ;
+- écriture / « repair » d’historique ;
+- sélection persistence/IAM sans GO ;
+- lecture arbitraire filesystem hors politique ;
+- claim complete sans §6.
+
+---
+
+## 9. Questions d’arbitrage Morris
+
+1. Lecture Git live (bornée) vs seed documentary enrichi vs index dérivé **non persistant** ?
+2. Pagination multi-page requise pour complete ?
+3. Audit accès requis maintenant ?
+4. Rétention = Git only (décider) vs cycle rétention séparé ?
+5. Couplage F11 summary : stable page-id / evaluatedAt contract ?
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
new file mode 100644
index 0000000..8412422
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/14-f11-f13-dependencies-and-runtime-boundaries.md
@@ -0,0 +1,176 @@
+# 14 — F11/F13 dependencies & runtime boundaries
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `14-f11-f13-dependencies-and-runtime-boundaries.md` |
+| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Gate N3** | DECIDED — cadrage only |
+| **IAM / Persistence** | **NOT SELECTED** (préservés) |
+
+---
+
+## 1. Cartographie composants (existant)
+
+```
+[Git / packs docs] ──canonique──► (humain / CI)
+        ▲
+        │ provenance refs (seed)
+        │
+[boundedHistoryRead F13.4] ──summary──► [operationalReadiness F11.2]
+        │                                    │
+        │                                    ├── readMethodModeHold
+        │                                    ├── decideMethodModeTransition
+        │                                    └── optional D1Project input
+        ▼
+   (no durable store)
+
+[selectMethodMode / commands] ──assert hold──► CONFLICT if ACTIVE
+[methodModeHold.test-only] ──tests only──► store slot (non-barrel)
+```
+
+Ownership :
+
+| Composant | Owner logique | Module |
+|-----------|---------------|--------|
+| Hold | D1 gouvernance transitions | `lib/d1/methodModeHold*` |
+| F11.2 readiness | D1 observation | `lib/d1/operationalReadiness.ts` |
+| F13.4 history | platform t-a7 | `lib/platform/t-a7/boundedHistoryRead.ts` |
+| Canon paths | platform sfia-context | `canonicalPaths` (lecture) |
+
+---
+
+## 2. Frontières Git / runtime
+
+| Règle | Statut |
+|-------|--------|
+| Git = vérité historique | **obligatoire** |
+| Runtime view = projection | **obligatoire** |
+| Pas de write historique | **obligatoire** |
+| Seed documentary ≠ full Git walk | **état actuel** |
+| Cache / index durable | **interdit sans GO persistence** |
+| Concurrent writers | **hors scope** |
+
+---
+
+## 3. Frontières IAM / identité
+
+| Couche | État | Interdit N3 |
+|--------|------|-------------|
+| AuthN | non présent sur F11/F13 | sélection produit IAM |
+| AuthZ | hold = gouvernance transition, pas ACL data | confondre hold et IAM |
+| Acteur | non typé sur query | inventer roles |
+| Path-policy | distincte | fusionner path-policy↔IAM |
+| Fail-closed | hold ACTIVE par défaut | backdoor env pour désactiver hold |
+
+Exposition future HTTP ⇒ **GO IAM** distinct avant claim multi-acteur.
+
+---
+
+## 4. Frontières persistance
+
+| Élément | Autorisé maintenant | Interdit sans GO |
+|---------|---------------------|------------------|
+| Lecture Git/packs | oui (conceptuel) | — |
+| Seed in-memory | oui (lot 1) | — |
+| SQLite/DB history store | non | **oui interdit** |
+| Migration schéma | non | **oui interdit** |
+| Cache process local non durable | candidat futur (doc) | durable/shared store |
+
+---
+
+## 5. API interne / HTTP / UI
+
+| Surface | État | Décision requise |
+|---------|------|------------------|
+| API interne TS | **existante** (fonctions) | formaliser version contrat |
+| Barrel `@/lib/d1` | export F11 + hold produit | ne pas exporter test-only |
+| HTTP route | absente | GO surface access |
+| UI admin | absente (F11.2) | F11.3 non retenue |
+| Server actions write | hors F11/F13 | gate write distinct |
+
+---
+
+## 6. Flux de lecture (cible documentaire)
+
+1. Consommateur autorisé (à décider) appelle readiness **read**.
+2. F11 lit hold + (optionnel) projet + F13 summary.
+3. F13 lit provider borné ; Git reste référence.
+4. Snapshot frozen renvoyé ; audit éventuel (futur).
+5. Aucun write ; erreurs fail-closed.
+
+Source de vérité par donnée :
+
+| Donnée | Source |
+|--------|--------|
+| Historique canonique | Git |
+| Projection items | provider F13 (dérivé) |
+| Hold | évaluation gouvernance (défaut code) |
+| Projet mode/state | D1 store existant (si fourni) — **pas** créé par F11 |
+
+Données temporaires autorisées : copies frozen, timestamps d’évaluation.
+Interdites : files d’attente durables, outbox history, dual-write.
+
+---
+
+## 7. Observabilité / audit / erreurs
+
+| Besoin | Actuel | Cible cadrée |
+|--------|--------|--------------|
+| Logs hold block/allow | oui (codes) | conserver borné |
+| Logs readiness query | non | event optionnel futur |
+| Logs history read | non | event optionnel futur |
+| Erreurs | RangeError limit ; D1 CONFLICT hold | catalogue codes readiness/history |
+| Métriques | non | compteurs lectures (futur) sans PII |
+
+---
+
+## 8. Dépendances
+
+### Obligatoires pour complétion documentaire N3 (ce pack)
+
+- décisions F11.2 / F13.4 déjà adoptées ;
+- lot 1 sur main ;
+- hold ACTIVE governance ;
+- Git canonique.
+
+### Différables
+
+- IAM product ;
+- persistence ;
+- HTTP ;
+- live Git walk ;
+- OPS1 isolation runtime evidence (N2) ;
+- P08/P09 replacement (N1) ;
+- rollback drills (N4).
+
+### Anti-couplages
+
+- F11 ↛ OPS1 imports ;
+- F13 ↛ D1 writes ;
+- F13 ↛ `method/**` content dump ;
+- readiness ↛ auto-clear blockers ;
+- test-only ↛ barrels runtime.
+
+---
+
+## 9. Risques de dette
+
+| Risque | Mitigation documentaire |
+|--------|-------------------------|
+| Traiter lot 1 comme API finale | critères complete §12/§13 |
+| Ajouter HTTP sans IAM | stop condition |
+| Index durable « pour perf » | persistence NOT SELECTED |
+| Seed manuel diverge de Git | exiger preuve provenance |
+| F11/F13 circular writes | F11→F13 read only (déjà) |
+
+---
+
+## 10. Matrice capacité (synthèse)
+
+| Capacité | Existant | Gap | Dépendance | Blocker | Preuve | Statut | Décision |
+|----------|----------|-----|------------|---------|--------|--------|----------|
+| F11 query RO | oui | HTTP/audit/health | hold, F13 | IAM si HTTP | tests + module | PARTIAL | surface access |
+| F13 page RO | oui | politique/pagination/audit | Git | persistence si store | tests + module | PARTIAL | read strategy |
+| Hold | oui | — | gouvernance | B5/HARD open | tests | PARTIAL control | ne pas fermer |
+| IAM | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |
+| Persistence | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
new file mode 100644
index 0000000..a247a38
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/15-f11-f13-completion-options-and-bounded-lots.md
@@ -0,0 +1,98 @@
+# 15 — F11/F13 completion options & bounded lots
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `15-f11-f13-completion-options-and-bounded-lots.md` |
+| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
+| **N3** | cadrage terminé localement · **pas d’implémentation** |
+| **Recommandations** | `RECOMMENDED — NOT DECIDED` |
+
+---
+
+## 1. Options distinctes (futurs lots)
+
+### L-F11A — Formaliser contrat interne F11 (sans HTTP)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Versionner le contrat snapshot, codes d’erreur, audit différé/explicite, health UNKNOWN honnête |
+| Valeur | réduit ambiguïté « API » sans surface réseau |
+| Risques | sous-estimer besoin HTTP plus tard |
+| Dette | doc + tests contrat |
+| Rollback | revert Git |
+| Tests | schema/contract tests |
+| Gate | `GO IMPLEMENT T-A7 F11.2 INTERNAL CONTRACT HARDENING — NO HTTP IAM UI DELIVERY OR CUTOVER` |
+
+### L-F11B — Surface HTTP read-only F11 (sans UI)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Exposer readiness via HTTP GET borné |
+| Dépendances | **IAM sélection** ou décision mono-opérateur documentée |
+| Risques | exposition prématurée |
+| Gate | `GO IMPLEMENT T-A7 F11.2 HTTP READ SURFACE — IAM DECISION REQUIRED FIRST — NO UI WRITE DELIVERY OR CUTOVER` |
+
+### L-F13A — Politique + pagination F13 (in-process)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Politique d’inclusion, pagination/prefix décidé, tie-to-pack SHA |
+| Dépendances | pas de store |
+| Gate | `GO IMPLEMENT T-A7 F13.4 POLICY AND PAGINATION — GIT CANONICAL — NO PERSISTENCE IAM DELIVERY OR CUTOVER` |
+
+### L-F13B — Lecteur Git borné (refs only)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Remplacer/enrichir seed par lecture Git bornée (metadata) |
+| Risques | perf, chemins, secrets |
+| Gate | `GO IMPLEMENT T-A7 F13.4 BOUNDED GIT METADATA READER — NO CONTENT DUMP PERSISTENCE DELIVERY OR CUTOVER` |
+
+### L-F11F13 — Lot couplé minimal (interne only)
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | L-F11A + L-F13A ensemble si périmètre reste interne |
+| Condition | **pas** HTTP, **pas** IAM, **pas** persistence |
+| Gate | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — NO HTTP IAM PERSISTENCE DELIVERY OR CUTOVER` |
+
+### L-DEFER — Différer
+
+Aucun lot technique F11/F13 ; attendre N1/N2/N4 ou autre priorité.
+
+---
+
+## 2. Lot minimal recommandé (non décidé)
+
+**L-F11F13 (interne)** ou séquentiel **L-F13A → L-F11A**.
+
+Justification challenge :
+
+| Question | Réponse |
+|----------|---------|
+| Utile maintenant ? | oui — transforme gaps N3 en lots exécutables |
+| Blocker réduit ? | ambiguïté complete ; pas B5/HARD |
+| Dette ? | code borné + tests |
+| Plus simple ? | éviter L-F11B tant qu’IAM NOT SELECTED |
+| Repo-first ? | s’appuie sur modules main |
+| Gate nécessaire ? | **oui** — N3 ≠ autorisation d’implémenter |
+
+**Statut :** `RECOMMENDED — NOT DECIDED`
+
+**Non recommandé maintenant :** L-F11B (HTTP) avant arbitrage IAM.
+
+---
+
+## 3. Lots complémentaires (hors N3 exécution)
+
+- N2 evidence OPS1 (indépendant) ;
+- N1 P08/P09 framing/impl sous gates séparés ;
+- N4 rollback framing ;
+- cycle rétention F13 si conservation ≠ Git.
+
+---
+
+## 4. Impacts delivery/cutover
+
+Aucun lot ci-dessus n’autorise delivery preparation, delivery ou cutover.
+Complete F11/F13 ≠ Option A complete ≠ T-A6 complete.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
new file mode 100644
index 0000000..3824a64
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/16-morris-f11-f13-completion-decision-pack.md
@@ -0,0 +1,76 @@
+# 16 — Morris decision pack — F11.2 / F13.4 completion
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `16-morris-f11-f13-completion-decision-pack.md` |
+| **Date cadrage N3** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Date décisions D1–D8** | 2026-07-28 22:58:09 CEST (+0200) |
+| **N3** | `DECIDED — ADOPTED BY MORRIS` (cadrage) |
+| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` |
+| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` |
+| **Push / PR projet** | **non autorisés** par ce gate |
+
+> Note d’intégrité : dans le handoff N3 (`62904dbd…` / blob `d11efa52…`), D1–D8 figuraient comme **recommandations** (`RECOMMENDED — NOT DECIDED`). Elles sont enregistrées ici comme **décisions Morris adoptées** avant l’implémentation L-F11F13.
+
+---
+
+## 1. Décisions D1–D8 (adoptées)
+
+| ID | Décision | Statut |
+|----|----------|--------|
+| **D1** | F11 complete = **internal-only** (pas HTTP, pas UI) | `DECIDED — ADOPTED BY MORRIS` |
+| **D2** | Audit lecture F11/F13 = **différé explicitement** | `DECIDED — ADOPTED BY MORRIS` |
+| **D3** | F13 data = **seed enrichi + liaison explicite au SHA Git** | `DECIDED — ADOPTED BY MORRIS` |
+| **D4** | Pagination F13 = **prefix-only formalisée** | `DECIDED — ADOPTED BY MORRIS` |
+| **D5** | Rétention F13 = **Git-only** | `DECIDED — ADOPTED BY MORRIS` |
+| **D6** | Lot technique = **L-F11F13 interne** | `DECIDED — ADOPTED BY MORRIS` |
+| **D7** | IAM = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |
+| **D8** | Persistence = **reste NOT SELECTED** | `DECIDED — ADOPTED BY MORRIS` |
+
+### Gate consommé
+
+`GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — INTERNAL-ONLY F11 CONTRACT — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION — AUDIT DEFERRED EXPLICITLY — GIT-ONLY RETENTION — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO HTTP UI DELIVERY OR CUTOVER`
+
+**Autorité :** implémentation **locale** uniquement · pas de push/PR/merge/delivery/cutover.
+
+---
+
+## 2. Impacts / exclusions
+
+| Inclus | Exclu |
+|--------|-------|
+| Contrat F11 interne | HTTP / UI / IAM product |
+| Seed F13 + SHA | Store / migration / cache durable |
+| Prefix-only ≤50 | Multi-page complexe / scan non borné |
+| Audit différé documenté | Journal d’audit persistant |
+| Rétention Git-only | Rétention applicative |
+
+B5 / R1 / R-M01 / HARD restent **OPEN** / **OPEN HARD**.
+
+---
+
+## 3. Recommandation historique N3 (archive)
+
+Avant adoption Morris, le pack N3 recommandait D1=internal-only, D6=L-F11F13, D7/D8=NOT SELECTED, etc. (`RECOMMENDED — NOT DECIDED`).
+
+Cette section ne constitue **pas** l’état courant des décisions.
+
+---
+
+## 4. Gate candidat suivant (non consommé)
+
+`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`
+
+**Statut :** `NOT CONSUMED`
+
+---
+
+## 5. Résultats L-F11F13
+
+Voir `17-f11-f13-internal-completion-lot-results.md` pour l’implémentation locale, tests et anti-claims.
+
+---
+
+## 6. Verdict document
+
+`D1–D8 DECIDED — L-F11F13 IMPLEMENTED LOCALLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md
new file mode 100644
index 0000000..f85431c
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/17-f11-f13-internal-completion-lot-results.md
@@ -0,0 +1,196 @@
+# 17 — F11 / F13 internal completion lot results (L-F11F13)
+
+| Champ | Valeur |
+|-------|--------|
+| **Document** | `17-f11-f13-internal-completion-lot-results.md` |
+| **Date/heure/fuseau** | 2026-07-28 23:22:34 CEST (+0200) |
+| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
+| **Branche delivery** | `delivery/sfia-studio-t-a7-f11-f13-internal-completion` |
+| **Branche documentaire parent** | `docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing` |
+| **Base `origin/main`** | `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
+| **Commit documentaire** | `dcdc90a0779859ec5d34a91021bab65122447ee5` |
+| **Gate consommé** | `GO IMPLEMENT T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT — … — NO HTTP UI DELIVERY OR CUTOVER` |
+| **Push / PR projet** | **aucun** |
+
+---
+
+## 1. Gate et décisions D1–D8
+
+| ID | Décision | Application locale |
+|----|----------|--------------------|
+| **D1** | F11 = internal-only | `accessSurface: "INTERNAL_ONLY"` · pas HTTP/UI |
+| **D2** | Audit lecture différé | `audit.status: "DEFERRED_EXPLICITLY"` (F11 + F13) |
+| **D3** | Seed enrichi + SHA Git | seed 7 entrées · `gitCanonicalSha` obligatoire |
+| **D4** | Pagination prefix-only | `paginationMode: "PREFIX_ONLY"` · `nextCursor: null` |
+| **D5** | Rétention Git-only | `retention: "GIT_ONLY"` · pas de store |
+| **D6** | Lot L-F11F13 | ce document / branche delivery |
+| **D7** | IAM NOT SELECTED | champ snapshot + anti-claims |
+| **D8** | Persistence NOT SELECTED | champ snapshot + anti-claims |
+
+---
+
+## 2. Implémentation F11.2
+
+| Élément | Résultat |
+|---------|----------|
+| Module | `app/lib/d1/operationalReadiness.ts` |
+| Schéma | `t-a7-f11.2-l-f11f13` |
+| Surface | `INTERNAL_ONLY` |
+| États | `READY` \| `NOT_READY` \| `UNKNOWN` |
+| Règles | hold actif → `NOT_READY` ; health `SIMULATED`/`UNKNOWN` → jamais `READY` ; absence history ≠ READY |
+| Flags | `mutable=false` · `adminUi=false` · `writeCommands=false` |
+| Provenance | hold, blockers, history summary (SHA + PREFIX_ONLY), legacy deps |
+| Audit | `DEFERRED_EXPLICITLY` |
+| IAM / Persistence | `NOT_SELECTED` / `NOT_SELECTED` |
+| HTTP / UI | **absents** |
+
+---
+
+## 3. Implémentation F13.4
+
+| Élément | Résultat |
+|---------|----------|
+| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` |
+| Seed | enrichi (PR #285/#286, lot1 feat/harden, merge #287 `770605bc…`, pack path) |
+| SHA | `gitCanonicalSha` validé (`^[0-9a-f]{40}$`) · défaut pin `770605bc…` · injection caller |
+| Shell Git runtime | **aucun** |
+| Pagination | `PREFIX_ONLY` · `prefixLength`/`limit` · max 50 · ordre stable · pas de multi-page |
+| Rétention | `GIT_ONLY` |
+| Audit | `DEFERRED_EXPLICITLY` |
+| Store / cache / DB | **aucun** |
+| Completeness | `BOUNDED_L_F11F13` |
+
+---
+
+## 4. Pagination prefix-only
+
+- `limit` et `prefixLength` sont des alias du même préfixe déterministe.
+- Clamp à `BOUNDED_HISTORY_MAX_ITEMS` (50).
+- `nextCursor` toujours `null` (D4 — pas de multi-page).
+- `hasMore` = `truncated` après slice préfixe.
+- Tests bornes : 0 (reject), 1, max, max+1.
+
+---
+
+## 5. SHA Git
+
+- Source : injection bornée `DocumentaryBoundedHistoryProviderOptions.gitCanonicalSha` ou pin `DEFAULT_BOUNDED_HISTORY_GIT_SHA` (= tip main lot 1).
+- Validation fail-closed via `assertGitCanonicalSha`.
+- Responsabilité caller documentée dans la note de page : pas de `git` shell produit.
+- F11 résume `observed.history.gitCanonicalSha`.
+
+---
+
+## 6. Audit différé / rétention Git-only
+
+- Aucun journal d’audit persistant créé.
+- Aucune rétention hors Git / packs documentaires.
+- RGPD production : **NOT VALIDATED** (inchangé).
+
+---
+
+## 7. Fichiers produit / tests / docs
+
+### Modifiés
+
+- `projects/sfia-studio/app/lib/d1/operationalReadiness.ts`
+- `projects/sfia-studio/app/lib/d1/index.ts`
+- `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`
+- `projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts`
+- `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`
+- `…/t-a7-technical-readiness-framing/README.md`
+- `…/12-…` · `13-…` (statut post-lot)
+- `…/16-…` (référence résultats)
+
+### Créés
+
+- `…/17-f11-f13-internal-completion-lot-results.md` (ce document)
+
+---
+
+## 8. Tests
+
+Commande :
+
+```bash
+./node_modules/.bin/vitest run \
+  __tests__/d1/t-a7-operational-readiness.test.ts \
+  __tests__/platform/t-a7-bounded-history.test.ts \
+  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
+  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
+  __tests__/d1/t-a7-method-mode-hold.test.ts \
+  __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts \
+  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
+  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
+  __tests__/platform/t-a7-local-volume.probe.test.ts
+```
+
+Résultat : **9 files / 44 tests passed** (2026-07-28 23:22:29 CEST).
+
+Couverture L-F11F13 : contrat F11, UNKNOWN/NOT_READY, INTERNAL_ONLY, SHA invalide, prefix-only, volume, seed enrichi, boundaries hold, absence HTTP route.
+
+---
+
+## 9. Non-régressions / absences vérifiées
+
+- aucune route HTTP readiness/cutover ;
+- aucune UI ;
+- aucune IAM / session ;
+- aucune persistance / migration ;
+- aucune write command F11/F13 ;
+- MethodMode hold **non modifié** fonctionnellement ;
+- OPS1 **non modifié** fonctionnellement ;
+- aucune dépendance npm ajoutée ;
+- aucun push / PR / merge projet.
+
+---
+
+## 10. Limites
+
+- Health reste `SIMULATED` → readiness ne peut pas être `READY` en conditions normales actuelles.
+- SHA pin / injection ≠ lecture live de `git rev-parse` en runtime produit.
+- Seed documentaire ≠ archive Git complète.
+- Reasons hold `F11_2_INCOMPLETE` / `F13_4_INCOMPLETE` **conservées** (pas de fermeture blockers via hold).
+- Audit / RUN prod / RGPD prod restent ouverts / non validés.
+
+---
+
+## 11. Blockers restant ouverts
+
+| Item | Statut |
+|------|--------|
+| B5 | `OPEN` |
+| R1 | `OPEN` |
+| R-M01 | `OPEN` |
+| HARD | `OPEN HARD` |
+| T-A6 COMPLETE | **NOT DECLARED** |
+| Option A | **NOT COMPLETE** |
+| Delivery / cutover | **NOT AUTHORIZED** |
+| IAM | `NOT SELECTED` |
+| Persistence | `NOT SELECTED` |
+| P08 / P09 | `MISSING` |
+
+---
+
+## 12. Anti-claims
+
+- L-F11F13 local ≠ F11/F13 « cutover-complete » ≠ delivery ready.
+- Contrat interne ≠ API HTTP publique.
+- Seed + SHA pin ≠ store historique concurrent à Git.
+- Tests verts ≠ RUN READY / RGPD VALIDATED.
+- Commit local ≠ autorisation push/PR.
+- Handoff L3 ≠ push branche projet.
+
+---
+
+## 13. Gate candidat suivant (non consommé)
+
+`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`
+
+**Statut :** `NOT CONSUMED` · **READY FOR PR READINESS**
+
+---
+
+## 14. Verdict
+
+`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY CONTRACT HARDENED — F13 SEED ENRICHED AND TIED TO GIT SHA — PREFIX-ONLY PAGINATION FORMALIZED — AUDIT DEFERRED EXPLICITLY — RETENTION GIT-ONLY — IAM AND PERSISTENCE REMAIN NOT SELECTED — TESTS PASSED — BLOCKERS B5 R1 R-M01 AND HARD REMAIN OPEN — NO HTTP UI PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
index 123c752..24e0f9c 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
@@ -2,41 +2,97 @@

 | Champ | Valeur |
 |-------|--------|
-| **Gate O3 (consommé)** | `GO DECIDE T-A7 OPENING — SELECT O3 FOR A FIRST BOUNDED DEVELOPMENT LOT LIMITED TO METHODMODE HOLD F11.2 READINESS CONTRACT AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER — KEEP B5 R1 R-M01 AND HARD OPEN` |
+| **Mise à jour N3** | 2026-07-28 22:45:18 CEST (+0200) |
+| **Mise à jour D1–D8 / L-F11F13** | 2026-07-28 22:58:09 CEST (+0200) |
+| **Mise à jour résultats L-F11F13** | 2026-07-28 23:22:34 CEST (+0200) |
+| **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
+| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
+| **Gate L-F11F13** | `DECIDED — ADOPTED BY MORRIS — IMPLEMENTATION AUTHORIZED LOCALLY` · **implémenté localement** (voir `17`) |
+| **Gate N3 (consommé)** | `GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N3 FOR F11.2 AND F13.4 COMPLETION FRAMING ONLY — DEFINE FINAL SURFACE GAPS DEPENDENCIES IAM PERSISTENCE AND RUNTIME BOUNDARIES — NO IMPLEMENTATION DELIVERY OR CUTOVER` |
 | **O3** | `DECIDED — ADOPTED BY MORRIS` |
 | **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
-| **Date lot 1** | 2026-07-28 21:19:12 CEST (+0200) |
-| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
-| **Base** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
-| **Push / PR projet** | **aucun** |
-| **F03.3 évaluation** | `F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
-| **F11.2 / F13.4 décisions** | `DECIDED` · fondations lot 1 livrées (≠ finales) |
+| **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287) · merge `770605bc…`) |
+| **F03.3** | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
+| **P03–P11** | P03–P07 · P10–P11 **PARTIAL** · P08 · P09 **MISSING** |
+| **F11.2** | contrat **INTERNAL_ONLY** durci (L-F11F13) · pas HTTP/UI · **≠ cutover-complete** |
+| **F13.4** | seed enrichi + SHA Git · PREFIX_ONLY · GIT_ONLY · **≠ archive complète / cutover** |
+| **IAM / Persistence** | `NOT SELECTED` / `NOT SELECTED` |
 | **B5 / R1 / R-M01** | `OPEN` |
 | **HARD** | `OPEN HARD` |
-| **Delivery / cutover** | `NOT AUTHORIZED` |
 | **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
-| **Persistence / IAM / RGPD** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |
+| **Delivery / cutover** | `NOT AUTHORIZED` |
+| **Push / PR projet (branche docs courante)** | **aucun** |
+
+## Index du pack

-## Lot 1 livré
+| Doc | Sujet |
+|-----|-------|
+| `01`–`09` | framing readiness / O2 |
+| `10` | lot 1 borné (O3) |
+| `11` | post-merge + options N1–N5 |
+| `12` | F11.2 completion surface & gaps |
+| `13` | F13.4 completion surface & gaps |
+| `14` | dépendances & frontières runtime |
+| `15` | options de lots bornés futurs |
+| `16` | decision pack Morris F11/F13 |
+| `17` | résultats lot L-F11F13 (implémentation locale) |

-1. MethodMode hold (défaut actif)
+## Lot 1 intégré sur `main`
+
+1. MethodMode hold (défaut actif ; override test-only hors barrel)
 2. F11.2 readiness read-only interne
 3. F13.4 historique RO borné (Git canonique)

-Détail : `10-t-a7-first-bounded-development-lot.md`
+## Cadrage N3 + lot L-F11F13 (local)
+
+Documents `12`–`16` : surfaces, gaps, D1–D8. Document `17` : résultats d’implémentation locale.
+
+**N3 ≠ cutover. L-F11F13 local ≠ push/PR/delivery.**

 ## Anti-claims

-- T-A7 borné ≠ fully open · ≠ delivery/cutover ready
+- lot 1 intégré ≠ T-A7 entièrement ouvert ≠ delivery/cutover ready
+- L-F11F13 local ≠ HTTP public ≠ IAM ≠ persistence
+- contrat interne F11 ≠ API réseau
+- seed F13 + SHA ≠ store concurrent à Git
 - hold ≠ blockers fermés
-- fondations ≠ API/UI/vue finales
+- tests verts ≠ RUN READY / RGPD VALIDATED

 ## Gate candidat suivant

-`GO INTEGRATE T-A7 FIRST BOUNDED DEVELOPMENT LOT — PUSH PR MERGE IF REQUIRED CHECKS PASS — PRESERVE SOURCE BRANCH — NO DELIVERY OR CUTOVER`
+`GO REVIEW T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT PR READINESS — NO PUSH PR MERGE DELIVERY OR CUTOVER`
+
+**Statut :** `NOT CONSUMED` · `READY FOR PR READINESS`
+
+## Verdict courant
+
+`T-A7 F11.2 F13.4 INTERNAL COMPLETION LOT IMPLEMENTED LOCALLY — F11 INTERNAL-ONLY — F13 SEED+SHA PREFIX-ONLY GIT-ONLY — AUDIT DEFERRED — IAM AND PERSISTENCE NOT SELECTED — TESTS PASSED — BLOCKERS OPEN — NO PROJECT PUSH PR MERGE DELIVERY OR CUTOVER — READY FOR PR READINESS`
+
+---
+
+## Historique post-merge (lot 1)
+
+> Section **historique**. Voir aussi `11-t-a7-lot1-post-merge-and-next-blocker-framing.md`.
+
+Post-merge confirmé 2026-07-28 : PR #287 · checks `30393629328` / `30393814783` · branche source préservée · README aligné main.
+
+Gate d’intégration et options N1–N5 : document `11`. N3 a depuis été **sélectionné** par Morris (ce cycle).
+
+---
+
+## Historique du lot local pré-intégration
+
+> Section **historique** uniquement. Ne décrit **pas** l’état courant sur `main`.
+
+Avant PR #287, le lot 1 existait uniquement en local sur
+`framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness`
+au-dessus de `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421`.

-**Statut :** `NOT CONSUMED` (après revue PR readiness)
+À cette étape, le résumé d’état indiquait correctement :

-## Verdict
+- `Push / PR projet : aucun`
+- gate d’intégration candidat `NOT CONSUMED`
+- verdict se terminant par `PROJECT BRANCH NOT PUSHED`

-`T-A7 FIRST BOUNDED DEVELOPMENT LOT IMPLEMENTED LOCALLY — O3 DECISION RECORDED — METHODMODE HOLD IMPLEMENTED — F11.2 READINESS FOUNDATION IMPLEMENTED READ-ONLY — F13.4 READ-ONLY FOUNDATION IMPLEMENTED WITH GIT REMAINING CANONICAL — TESTS PASS — NO MIGRATION IAM ADMIN UI DELIVERY OR CUTOVER — B5 R1 R-M01 AND HARD REMAIN OPEN — T-A7 OPEN FOR FIRST BOUNDED DEVELOPMENT LOT ONLY — PROJECT BRANCH NOT PUSHED`
+Ces formulations étaient **vraies avant** push/PR/merge #287 (2026-07-28 ~21:49–21:52 CEST).
+Elles sont **obsolètes** pour l’état courant documenté en tête de ce README.

```

---

## INSTRUCTION CHATGPT — REVIEW HANDOFF

Lire obligatoirement depuis Git :
- branche : sfia/review-handoff
- fichier : sfia-review-handoff/latest-chatgpt-review.md

Vérifier cycle PR readiness, HEAD/base, commits, findings (surtout F-PR-01 Major TS2322), tests, verdict NOT READY, SHA distant.
Ne pas analyser uniquement depuis le résumé Cursor.
