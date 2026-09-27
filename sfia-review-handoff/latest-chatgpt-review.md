# SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 — FULL Review Pack

## 1. Timestamp
2026-09-27T14:39:17+0200

## 2. Macro / cycle / profil
- **Macro:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01
- **Cycle:** Cycle 8 — Delivery / implémentation (`cyc:delivery`)
- **Profil:** Critical
- **Typologie:** EVOL
- **Capacité v3 primaire:** V3-F05 (réduction chemins concurrents / Product Spine)
- **Runtime v3:** NON ADOPTED

## 3. Git truth initial
- **Worktree:** `/Users/morris/Projects/sfia-workspace-legacy-decommission-01`
- **Branche:** `refactor/sfia-studio-legacy-architecture-decommission-01`
- **HEAD:** `1162b36b14ca2f4f644dcd3da970b25113214b06`
- **origin/main:** `1162b36b14ca2f4f644dcd3da970b25113214b06`
- **Attendu:** `1162b36b14ca2f4f644dcd3da970b25113214b06` — **MATCH**
- **Working tree initial:** clean après reset worktree (branche dédiée créée depuis origin/main)
- **Commit projet:** NON demandé / NON effectué

## 4. Sources lues
### Gouvernance
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
### Doctrine v3 (guidance)
- framing 30–37 + CKC `08-delivery-implementation.md` (autorité: aucune exécution)
### Living Production Runtime Reference (primaire)
- README + volumes 01–09 + manifest
### Process / runtime
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md`
- `projects/sfia-studio/app/package.json`
- `.github/workflows/sfia-studio-ci.yml`
- routes app, navigation, vertical-slice-runtime, project-assistant, nora, oa

## 5. Current Product Spine
```
Browser / Product UI (app/studio/projects/[id], pre-m6-product-ui)
  → server actions (project-assistant/actions.ts)
  → Project Assistant (orchestrateTurn / F2 / intentAnalysis)
  → Nora Cognitive Runtime (session sqlite, journal, MW5, CWP)
  → OA (project, cycle, decision, execution-contract, execution-attempt, evidence-review, …)
  → Product SQLite (Truth C) + Nora Session SQLite (Memory B)
  → REAL gated: Cursor/Git/GitHub via execution-attempt
     (composeStudioProductRealBoundary / StudioCursorRealLaunchGateway)
```
**Not spine:** OPS1 isolated ops surface; `lib/oa/execution-run` memory BC; POC routes `/cycle-actif|/decision|/synthese`.

## 6. Inventaire candidats
| ID | Family | Paths |
|---|---|---|
| C-OPS1 | OPS1 | `app/app/ops1/**`, `lib/ops1/**`, `features/ops1/**`, env `OPS1_*` |
| C-ERUN | ExecutionRun BC | `lib/oa/execution-run/**` |
| C-POC-UI | Historical POC UI | `app/{cycle-actif,decision,synthese}`, `features/{cycle-actif,decision,synthese}`, harness companions |
| C-D1 | D1 intake | `/nouvelle-demande`, `/projects/*`, `/workspace`, `lib/d1/**` — préqual KEEP |
| C-F3W3A | F3/W3A fixtures | `f3FixtureWiring.ts`, `w3aProductFixtureWiring.ts` wired in service.ts — préqual KEEP |
| C-FINOPS | FinOps/T7 | HORS SCOPE |
| C-MODELED | sfia-v3-modeled | HORS SCOPE |

Aucun autre cluster mort prouvé hors de cette liste.

## 7. Matrice de classification

| Candidate | Purpose historique | Entrypoint courant | Consumers | Persistence | Authority | Fake/Real | Proof | Replacement | Classification |
|---|---|---|---|---|---|---|---|---|---|
| C-OPS1 | Ops vertical slice GPT+allowlist | `/ops1/nouvelle-demande` | features/nouvelle-demande, D1 nav, `__tests__/ops1/**`, e2e ops1/d1, env names in platform/ai + boundaries | ops1 sqlite isolé | allowlist OPS1 ≠ OA HD | Fake product réutilise `OPS1_*` | CI vitest ops1 | Studio spine | **KEEP — TEMPORARY** |
| C-ERUN | D2 ExecutionRun BC memory | composeExecutionRun* (non product service) | `__tests__/oa/execution-run/**`, FinOps T7 shadow script/compose | memory-only (SQLite ABSENT) | BC-local ≠ Truth C | fixtures internes | CI vitest | execution-attempt | **KEEP — TEMPORARY** |
| C-POC-UI | Increment A–E fixture POC | `/cycle-actif`,`/decision`,`/synthese`; `/`→synthese | navigation historical, FLUSH_TABS, not-found, increment/p0 tests | session/harness | fixture only | N/A | vitest increment | `/studio` | **RETIRE FROM ACTIVE VISIBILITY** (partial) + **KEEP — TEMPORARY** |
| C-D1 | Intake D1 | routes D1 actives | product intake | d1 stores | intake | — | e2e d1 | — | **KEEP — CURRENT / ADAPT** |
| C-F3W3A | Deterministic exec substitutes | vertical-slice-runtime service | product composition | none | fixture agents | **required** Fake substitute | F3/W3A tests | none without replacement | **KEEP — CURRENT** |
| C-FINOPS | FinOps T7 | frozen | T7 assets | — | — | — | — | — | **HORS SCOPE** |
| C-MODELED | Modeled governance | CI Required Gate | modeled tests | — | governance docs | — | modeled node tests | — | **HORS SCOPE** |

## 8. SAFE TO REMOVE retenus
**Aucun.** Removal set = ∅.

Pour chaque candidat prioritaire, SR-01…SR-10 **échouent** (au moins une condition) :

### C-OPS1 — non SAFE
- SR-01: rôle ops encore exposé; remplacement Studio existe mais cutover non fait
- SR-02: consumers — route, D1 `href="/ops1/nouvelle-demande"`, features/nouvelle-demande, server actions
- SR-03: ops1 sqlite encore utilisé localement (isolé mais vivant)
- SR-04: pas d'autorité OA Truth C (OK) mais gates allowlist actifs
- SR-05: `__tests__/ops1/**` dans `npm test` CI
- SR-06: env `OPS1_CONVERSATION_PROVIDER` / `OPS1_CURSOR_REAL` / `OPS1_E2E_*` sur Fake product path
- SR-07: e2e + operational surface
- SR-08: callers restants
- SR-09/10: N/A (pas de retrait)

### C-ERUN — non SAFE
- SR-01: remplacement product = execution-attempt (OK conceptuel)
- SR-02: pas d'import product-assistant/nora/VSR — mais FinOps T7 + tests
- SR-05/07/09: suite CI + `scripts/finops-t7-shadow-rollout.ts`
- FinOps HORS SCOPE ⇒ suppression bloquée
- SR-10: Living Ref documentait encore execution-run comme adapter (corrigé ce cycle en doc only)

### C-POC-UI — non SAFE
- SR-01: remplacement `/studio` existe
- SR-02/03: `app/page.tsx` redirect `/synthese`; `not-found` link; FLUSH_TABS; routes actives
- SR-05/09: increment/p0 tests dans vitest
- Classification: visibility déjà `historical` — exit restant requis avant delete

## 9. KEEP / ADAPT / TEMPORARY / UNKNOWN — justifications
Voir matrice §7. Exits TEMPORARY :
1. **OPS1:** Morris GO + unlink D1 nav + rename Fake env hors `OPS1_*` + retirer suites ops1 du gate + re-proof SR
2. **execution-run:** Morris GO + découplage FinOps/T7 (macro dédié HORS SCOPE ici) + retire suite + re-proof
3. **POC UI:** pointer `/` et 404 vers `/studio`; retirer FLUSH_TABS; migrer/archiver increment/p0; re-proof SR

## 10. Fichiers supprimés
Aucun.

## 11. Fichiers créés
Aucun (pas de `retired-components-ledger.md` — zéro retrait).

## 12. Fichiers modifiés
- `projects/sfia-studio/production-runtime-reference/README.md`
- `projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md`
- `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
- `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` (lastReviewedCommit + digests)

## 13. Diff stat
(voir `git diff --stat` au moment de publication handoff)

## 14. Contenu modifié (Living Reference)

### 01 — adapter layer
Product REAL path documenté via **execution-attempt** / `composeStudioProductRealBoundary` / `StudioCursorRealLaunchGateway`.
`lib/oa/execution-run/**` explicitement **parallèle / non Product Spine**.

### 03 — F20
Étendu : POC UI routes, OPS1 surface, ExecutionRun parallel BC ; statut **no SAFE TO REMOVE proven**.

### 09 — decommission audit table
Classifications + exits ; pas de ledger retired.

### README / manifest
Reviewed commit → `1162b36b`; digests rafraîchis après revue sémantique.

## 15. Living Reference update
Oui — clarifications CURRENT uniquement (pas de retrait de composant runtime).

## 16. Retired ledger
Non applicable (zéro composant retiré).

## 17. Validations
(rempli après exécution — section résultats)

## 18. Réserves
- Absence de preuve ≠ preuve d'absence ; inventaire centré sur candidats préqualifiés + graphe révélé
- Playwright e2e hors Required Gate CI mais restent consumers de routes
- Couplage nominal `OPS1_*` ≠ import `lib/ops1` — suppression lib seule casserait quand même Fake product si env non migrés
- Vol 02/04/05/06/07 headers as-implemented peuvent encore citer SHA harvest antérieur ; sémantique CURRENT inchangée hors 01/03/09

## 19. Gaps HORS SCOPE
- PRODUCT-CYCLE-E2E-STABILIZATION-01
- PocketTasks / MW5 defects
- FinOps/T7 freeze
- Env rename `OPS1_*` → product-neutral (nécessite GO)
- Root redirect `/` → `/studio` (nécessite GO si considéré comportement produit)

## 20. Décisions Morris éventuellement requises
1. Autoriser cutover OPS1 (nav + env rename + suite) avant un futur macro de suppression
2. Autoriser découplage FinOps↔execution-run avant retrait BC
3. Autoriser bascule `/` + 404 vers `/studio` et archivage increment/p0

Sans ces GO : **ne pas supprimer**.

## 21. Fake/Real Qualification
- Applicable: oui
- Entrée: DETERMINISTIC PROVEN (suite locale)
- Attendu ce macro: DETERMINISTIC / LOCAL REGRESSION PROVEN
- REAL BOUNDARY / E2E REAL: non
- Fixtures F3/W3A: **conservées** (SR-06)
- Claims interdits non émis

## 22. Verdict
**AUDIT COMPLETE — NO SAFE REMOVAL PROVEN**

Capacité suivante: `PRODUCT-CYCLE-E2E-STABILIZATION-01`

## 17. Validations — résultats exacts

| Check | Result |
|---|---|
| `npm ci` | PASS (492 packages) |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (No ESLint warnings or errors) |
| `npm run build` | PASS (Next build EXIT 0) |
| `npm test` | PASS — Test Files 444 passed \| 17 skipped (461); Tests 4905 passed \| 137 skipped (5042); Duration 67.59s |
| `node scripts/check-production-runtime-reference.mjs` | PASS — PRODUCTION RUNTIME REFERENCE CONFORMANCE OK |
| modeled governance (3 files node --test) | PASS — 73 pass / 0 fail |
| `git diff --check` | PASS (after trailing-whitespace strip) |
| Secret scan (RSA/OPENSSH/AKIA) under projects/sfia-studio | PASS — clean |
| Decommission residual grep | N/A — no symbols removed |

## 13bis. Diff stat (final local, uncommitted)

```
 .tmp-sfia-review/chatgpt-review.md                 | 308 ++++++++++++---------
 .../01-system-runtime-overview.md                  |   8 +-
 .../03-end-to-end-flow-catalog.md                  |   7 +-
 ...9-known-gaps-reserves-and-current-boundaries.md |  17 ++
 .../production-runtime-reference/README.md         |   5 +-
 .../production-runtime-reference.manifest.json     |  12 +-
 6 files changed, 216 insertions(+), 141 deletions(-)
```

## Final Git note
- Branche projet: `refactor/sfia-studio-legacy-architecture-decommission-01`
- HEAD local inchangé (pas de commit projet): `1162b36b14ca2f4f644dcd3da970b25113214b06`
- Modifications locales: Living Reference clarifications + review pack only
- Verdict: **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN**
