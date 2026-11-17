# SFIA Review Pack Full — Nora LIVE diagnostic + DEV fix

## 1. Date, cycle, profil, GO

- **Date:** 2026-11-17 (CET)
- **Cycle:** 8 — Delivery / RUN corrective
- **Profil:** Standard (contrôles renforcés LIVE / isolation)
- **GO Morris consommé:** diagnostic + correctif DEV minimal si cause démontrée
- **Non consommé / non fait:** appel OpenAI REAL payant, deploy RECETTE, push produit, PR/merge, migration, Gate C

## 2. Git Truth Check

| Item | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Tip avant correctif | `34a5e102b7e440f0b8bd2586a1689edac196dcb7` |
| Tip après commit local | `3f7863ba640b6520ace247dec125e5736508ca75` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Dirty hors pack | `.tmp-sfia-review/chatgpt-review.md` only |
| Push produit | **AUCUN** |

## 3. Sources / blobs

- Prior handoff: `sfia/review-handoff@c2e66cfc` blob `02dddc4e…`
- ENV-01 / versioning blobs déclarés sur `main`
- Code local: `nora-adapter.ts`, `cognitive-policy.ts`, `semantic-qualification.ts`, `visual-composition.ts`, `observability.ts`

## 4. Identité lanes initiale

| Lane | État |
|---|---|
| RECETTE `:3200` | PID 68332 · BUILD `xKkQienCXTPYIqkFElAuE` · SHA `34a5e102` · **inchangé** |
| DB RECETTE | `sfia_next_recette_ml4` @ `127.0.0.1:5434` |
| DEV config file | `~/.config/sfia-studio-next/dev/.env.local` **ABSENT** |
| Fixture | absente en RECETTE |

## 5. Chronologie des deux générations

| gen | attempt | streaming.notes | contact | ts UTC |
|---|---|---|---|---|
| `gen_38297f12-…` | `att_51b44012-…` | `PROVIDER_ERROR` | UNCERTAIN | 16:14:22 |
| `gen_fa348ac8-…` | `att_6123d15f-…` | `PROVIDER_ERROR` | UNCERTAIN | 16:15:54 |

OBS: `policy_selected` (model `gpt-6.1-sol`) → `provider_attempt` → `turn.completed` UNKNOWN (~60–170 ms).  
Exception brute **non conservée** dans les logs (rédaction by design).  
Catégorie persistée: `result_json.streaming.notes = PROVIDER_ERROR` (pas MODEL_OR_ENTITLEMENT).

## 6. Carte de frontière

`D3 generateNoraReply` → `runLiveWithTools` → `Agent({ outputType: NoraTurnQualificationSchema })` → `emit provider_attempt` → `run(..., {stream:true})` → catch → `categorizeProviderError` → UNKNOWN fail-closed (1 seul appel).

SDK: `@openai/agents@0.21.0` · `openai@7.50.0` · `zod@4.6.7` (identique Ensemble04/05).

## 7. Exceptions / catégories expurgées

- Persisté: `PROVIDER_ERROR`
- Non persisté: message HTTP / stack
- Nouveau (correctif): catégorie `PROVIDER_SCHEMA_OR_OUTPUT` + OBS `error_category` / `error_name` (nom d’Error seulement)

## 8. Contact fournisseur

**CONTACT UNCERTAIN** pour les deux gens (run() invoqué, stream non délivré).  
`provider_attempt` ≠ preuve HTTP reçue.

## 9. Analyse modèle / paramètres / accès

- Modèle `gpt-6.1-sol` : **valide** (docs OpenAI) et **prouvé LIVE COMPLETE** le même jour jusqu’à 13:47 UTC sous runtime Ensemble04 (`cb638613`).
- Clé RECETTE: présente (`sk-proj…`, len 164) — entitlement non re-prouvé sans REAL.
- Diff E05 vs runtime qui marchait: ajout `visualComposition: z.unknown().optional()` dans `NoraTurnQualificationSchema` (+ instruction Agents).

## 10. Cause racine démontrée

**Cause:** `z.unknown().optional()` sérialisé par Agents SDK en JSON Schema strict avec propriété `visualComposition: {}` (schéma vide / non contraint). OpenAI structured outputs rejette ce schéma → exception rapide dans `run()` → `PROVIDER_ERROR` / UNKNOWN.

**Preuves déterministes:**

1. Timeline: COMPLETE ×5 (13:06–13:47) sans le champ → UNKNOWN ×2 après cutover E05 (16:14–16:15).
2. Conversion SDK: `z.unknown().optional()` → `visual: {}` ; schéma typé → propriété non vide.
3. Même modèle / mêmes versions SDK avant et après.

**Incertitude résiduelle:** message HTTP exact non capturé sur les incidents historiques (comblé partiellement par OBS améliorée). REAL LIVE non rejoué (pas de GO REAL).

## 11. Correctif DEV (diffs)

Commit local: `3f7863ba640b6520ace247dec125e5736508ca75`

### Fichiers

1. `web/src/domains/conversation/visual-composition.ts` — ajout `VisualCompositionAgentOutputSchema` (Zod discriminant, sans `z.unknown`).
2. `web/src/domains/conversation/semantic-qualification.ts` — `visualComposition: VisualCompositionAgentOutputSchema.optional()`.
3. `web/src/domains/conversation/nora-adapter.ts` — catégorie `PROVIDER_SCHEMA_OR_OUTPUT` ; OBS d’échec avec `error_category`.
4. `web/src/lib/observability.ts` — allowlist `provider_contacted`, `error_name`.
5. `web/tests/unit/nora-live-output-schema.test.ts` — tests régression schéma.
6. `construction/delivery-history.md` — entrée PATCH CANDIDATE.

### Diffstat

```
 .../construction/delivery-history.md               |  17 ++
 .../web/src/domains/conversation/nora-adapter.ts   |  31 +++-
 .../domains/conversation/semantic-qualification.ts |   9 +-
 .../src/domains/conversation/visual-composition.ts | 189 +++++++++++++++++++++
 .../sfia-studio-next/web/src/lib/observability.ts  |   3 +
 .../web/tests/unit/nora-live-output-schema.test.ts |  63 +++++++
 6 files changed, 309 insertions(+), 3 deletions(-)
```

`parseVisualComposition` reste l’autorité fail-closed post-réponse. Grammaire visuelle runtime non modifiée.

## 12. Tests

```text
vitest: nora-live-output-schema + nora-adapter-corrective + ensemble05-visual-composition
→ 30 PASS (STUDIO_LANE=DEV, DB gate :5433)
```

- REAL LIVE: **NOT EXECUTED** (pas de GO REAL)
- R01–R08: **NOT RUN**
- RECETTE runtime: **non reconstruit**

## 13. Fake / Real Qualification

| Frontière | Niveau |
|---|---|
| Cause locale schéma | **DETERMINISTIC PROVEN** |
| Correctif DEV | **UNIT VERIFIED** |
| Nora LIVE HTTP | **NOT RE-PROVEN** (GO REAL requis) |
| Composition LIVE | NOT PROVEN |
| RECETTE redeploy | NOT DONE |

## 14. Incidences

- Débloque la frontière d’appel structurée sans changer le modèle ni les retries.
- Un redéploiement RECETTE distinct est requis pour servir `3f7863ba`.
- Smoke LIVE REAL recommandé après deploy (≤2 appels).

## 15. État Git final

- Branche produit: `feat/next-ml4d-project-space-20261116`
- SHA correctif local: `3f7863ba640b6520ace247dec125e5736508ca75`
- Parent: `34a5e102…`
- Push produit: non

## 16. RECETTE confirmée inchangée

- BUILD `xKkQienCXTPYIqkFElAuE`
- SOURCE worktree `34a5e102`
- URL `http://127.0.0.1:3200`

## 17. Réserves / gates

1. Preuve LIVE SUCCESS absente jusqu’à GO REAL (+ éventuellement redeploy).
2. Schema agent est une projection typée ; sanitize `parseVisualComposition` conserve le fail-closed.
3. DEV `.env.local` absent — diagnostic DEV lane non configuré localement (tests unitaires OK).

## 18. Verdict unique

**`NORA LIVE DEV FIX VERIFIED — RECETTE DEPLOY GO REQUIRED`**

Sous-statut LIVE REAL: **NOT EXECUTED**.

## 19. Prochain gate Morris

1. GO déploiement RECETTE du candidat `3f7863ba` (remplace `34a5e102` sur `:3200`).
2. GO REAL borné (≤2 appels) pour smoke LIVE post-deploy.
3. Puis reprise UAT graphique R01–R08.

---

### CREATED: `projects/sfia-studio-next/web/tests/unit/nora-live-output-schema.test.ts`

(voir commit `3f7863ba` — contenu intégral dans le dépôt)

### MODIFIED sections clés

- `visualComposition: z.unknown().optional()` → `VisualCompositionAgentOutputSchema.optional()`
- Nouveau export `VisualCompositionAgentOutputSchema`
- OBS échec provider + `PROVIDER_SCHEMA_OR_OUTPUT`
