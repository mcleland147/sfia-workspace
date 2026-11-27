# SFIA Studio Next — Review Pack FULL — E2 complément REL-01…06

| Champ | Valeur |
|---|---|
| date_heure | 2026-11-27T19:05:16+01:00 |
| mandat | Ensemble 2/5 complément ciblé E2 — six reliquats ChatGPT |
| cycle | 8 — Delivery / Critical / EVOL |
| repo | mcleland147/sfia-workspace |
| worktree | /Users/morris/Projects/sfia-wt-next-ml5-20261123 |
| branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `58ca9486003805f74e69a0842f2c0792a7184437` |
| merge-base main | `997897fd7cf914771e7d08e8030dc7123fab7d25` (= main `997897fd…`) |
| main distant | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| handoff E2 antérieur | `80cdef6ce151e0414b9aafb952bfa276966fc06c` / blob `981a26d5…` |
| suivi ChatGPT | `docs/next-openai-studio-convergence-20261126` @ `d5ef3764` suivi v0.5 blob `5a3fdb45` — **NON MODIFIÉ** |
| classe | NO RELEASE |
| LIVE | aucune émission |
| RECETTE | préservée sans mutation |
| verdict Cursor | **READY WITH RESERVES** (avant revue ChatGPT / gate Morris E3) |

---

## 1. Git Truth Check

- Repo remote: origin → mcleland147/sfia-workspace
- Branche: `sfia/next-ml5-integrated-delivery-20261123`
- HEAD: `58ca9486003805f74e69a0842f2c0792a7184437`
- merge-base main: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- Worktree dirty attendu (macro-lot + complément E2)
- Aucun staged inattendu contrôlé à l'entrée ; aucun pull/merge/rebase/reset/clean
- Delta complément vs cumul macro-lot: voir inventaire §4 (REL*) ; acquis E1/A.1–A.7/C/D préservés
- Agents: intégrateur unique sur ce mandat

### git status --short (extrait pertinent)

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/knowledge/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts
 M projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
 M projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
 M projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-admission.ts
 M projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
 M projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
 M projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
 M projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
 M projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
 M projects/sfia-studio-next/web/src/domains/knowledge/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/types.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
 M projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
 M projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
 M projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
 M projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts
 M projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
?? projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md
?? projects/sfia-studio-next/web/.tmp-sfia-review/
?? projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/
?? projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
?? projects/sfia-studio-next/web/src/domains/conversation/assert-owned-preparation.ts
?? projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor-terminal.ts
?? projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts
?? projects/sfia-studio-next/web/src/domains/conversation/segment-context-efficiency.ts
?? projects/sfia-studio-next/web/src/domains/knowledge/subject-proposal-batch.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-labels.ts
?? projects/sfia-studio-next/web/src/domains/preparation/project-activity-projection.ts
?? projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
?? projects/sfia-studio-next/web/src/lib/project-recent-items.ts
?? projects/sfia-studio-next/web/tests/integration/e1-continuity-b7-b8.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/e1-continuity-integrated.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/e1-ensemble-b5-b6.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/e1-final-safeguards.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/e1-reliquats-integrity.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/e2-hybrid-pg-path.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-continuity-raccordement.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/mp09-multi-pilotage-turn.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/e1-b1-capitalisation-selectivity.test.ts
?? projects/sfia-studio-next/web/tests/unit/e1-continuity-b7-b8.test.ts
?? projects/sfia-studio-next/web/tests/unit/e1-ensemble-b5-b6.test.ts
?? projects/sfia-studio-next/web/tests/unit/knowledge-parent-subject-proposal.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-a4-context-efficiency.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-a5-cognitive-conductor-terminal.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-a6-finops-read-attribution.test.ts
?? projects/sfia-studio-next/web/tests/unit/mp09-conversational-command-key.test.ts
?? projects/sfia-studio-next/web/tests/unit/mp09-list-pilotage-bindings.test.ts
?? projects/sfia-studio-next/web/tests/unit/mp09-pilotage-multi-restitution.test.ts
?? projects/sfia-studio-next/web/tests/unit/nora-shared-composer.test.ts
?? projects/sfia-studio-next/web/tests/unit/project-activity-projection.test.ts
?? projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts
?? projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts
```

### ENV-01

| Contrôle | Résultat |
|---|---|
| DEV :3100 | LISTEN (node) |
| DEV PG :5433 | LISTEN (docker) |
| RECETTE :3200 | LISTEN — **non muté** |
| RECETTE PG :5434 | LISTEN — **non muté** |
| RECETTE worktree e8e6e069 | PRÉSENT |
| STUDIO_LANE | DEV pour tests |
| LIVE OpenAI / models.list / embeddings LIVE / Realtime / WEB Admin | NON |
| Verdict | **ENV ROUTING COMPLETE** |

### Product versioning

- Classe: NO RELEASE
- Entrée Delivery History: `DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV` complétée (E2_complément_reliquats)
- STABLE / candidate officielle: NOT AVAILABLE

---

## 2. Git Review Index (proportionné)

| Source | Ref | Section | Rôle | Statut |
|---|---|---|---|---|
| sfia-cycle-routing-guide.md | main@997897fd blob 3315bbae | §4.3.0b | Routage Next Critical | LU |
| sfia-cycle-execution-template.md | main@997897fd blob f4fdb488 | §5–9 | Structure Critical | LU |
| suivi-macro-lot…ml5.md | d5ef3764 blob 5a3fdb45 | §12 / 12.1–12.3 | Six reliquats | LU — non modifié |
| SEF.md / roadmap / naming / ADR R4 / SEM | docs tip | gouvernance | Contraintes | LU |
| ENV-01 / product-versioning | main | REQUIRED | Lane / NO RELEASE | APPLIQUÉ |
| allocation-cognitive… (fonc+tech) | blobs e1c24617 / 6835e9e3 | FinOps/allocation | Contrat | LU |
| conducteur-cognitif… | blob 2fd0f3b0 | D3 | Architecture | LU |
| contrat-observabilite-transverse | blob 31480c7e | OBS | Cartographie E3 | LU |
| e1-continuite-cognitive-as-built | local | E1 | Préservé | LU |
| handoff E2 | 80cdef6c | acquis | Référence | LU |
| Code propriétaires | worktree dirty | REL-01…06 | Impl | MODIFIÉ |

---

## 3. État d'entrée et acquis préservés

Entrée: E2 A.1–A.7 Cursor READY WITH RESERVES ; ChatGPT **PARTIEL — NOT READY E3** ; six reliquats §12.1.

Acquis préservés: policy stamp ; demandé≠appliqué/UNVERIFIED ; admission versionnée (complétée) ; deps non vérifiables fail-closed ; SKIPPED ownership ; projectId resume ; file-index fixture ; CONTINUE→OPEN ; attribution helpers ; billable distinction ; 91 tests E2 antérieurs.

---

## 4. Six reliquats — matrice

| ID | Exigence | Entrée | Constat | Défaut | Correction | Mécanisme final | Fichier(s) | Validation | Résultat | Preuve restante | Risque | Dépendance | Exit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| E2-REL-01 | Admit RECETTE versionnée | bare `qualified` activait v0.1/v0.2 | Confirmé | Fallback non versionné | `isRecetteProvisionalQualified` exige `qualified-v0.x` | Lane gate + reason codes | provisional-cognitive-policy.ts | ml5-cognitive-resources | PASS | Calibration LIVE | Faible (fail-closed) | Morris GO calibration | RECETTE admit versionné |
| E2-REL-02 | Orchestration + C02 + finalisation | dependsOn hors D5/D6 refusé systématiquement ; C02 primary-only | Confirmé | Protection ≠ capacité | Early D4 + crossCap map ; multi-intent replay ; CONTINUE cause | D3 unique + owners | service.ts, pilotage-effect-aggregate.ts, conductor, nora-adapter | mp09 + A.5 | PASS | Conversation naturelle | Moyen (ordre tour) | E3 UX | Multi-cap gouverné |
| E2-REL-03 | Hybrid PG + efficience | file fixture seulement ; FP open_point mismatch | Confirmé | PG non démontré ; FP open_point | Test PG fake embed ; align open_point text | hybridSearch PG + rights FP | e2-hybrid-pg-path.pg.test.ts, knowledge/service.ts | e2-hybrid-pg 2 PASS | PASS | Embedding LIVE | Faible | Recette pertinence | Hybrid instruit |
| E2-REL-04 | OBS pour E3/T08 | Corrélation partielle | Cartographie existante | Gaps latence | Documenter contrat données ; pas 2e console | emitObs d3.* + usage | pack §OBS | Inspection | DOCUMENTED | Latences ; E3 labels | Faible | E3 | Données disponibles |
| E2-REL-05 | Attribution FinOps | OR projectId∪works contaminateur | Confirmé (revue) | Double comptage possible | SQL concordant + effectiveFinOpsProjectId(+ForWork) | usage-read + projection | usage-read-service.ts, usage-projection.ts | FinOps unit + A.6 | PASS | Agrégat PG large | Moyen historique | Admin OFF | Attribution univoque |
| E2-REL-06 | Dossier | ChatGPT verdict mal attribué ; MP | Confirmé | Docs | Sync delivery-history + registre ; MP map | R-E2c | construction/* | Inspection | SYNC | Revue ChatGPT | — | Gate Morris | Dossier cohérent |

### Réconciliation A.1–A.7 / MP

- A.1←REL-01 ; A.3←REL-02 ; A.4←REL-03 ; A.5 finalisation ; A.6←REL-04 ; A.7←REL-05
- MP-09 orchestration ; MP-11 activité ; MP-14 perf ; MP-15 allocation ; MP-16 FinOps — **OPEN RECETTE**
- E1 acquis inchangés ; R-REC-E1-01/02 conservés

---

## 5. Corrections et mécanismes

### REL-01 Admission
`qualified-v0.1` ⇔ policy v0.1 only ; `qualified-v0.2` ⇔ v0.2 ; bare `qualified` → REJECTED (`COG_POLICY_RECETTE_ADMIT_BARE_QUALIFIED_REJECTED`). Rollback `legacy_sol` préservé. RECETTE non activée dans ce mandat.

### REL-02 Orchestration
Avant pilotage: capitalisations D4 `dependsOn`-ciblées → `crossCapOutcomeByIntentId`. `dependencyPreconditionBlockReason` accepte deps hors D5/D6 si crossCap APPLIED. Guidance Nora: dependsOn D4→D5/D6 autorisé. C02: reconstitue **chaque** `semanticIntentId`. CONTINUE → checkpoint cause `CONTINUE` (pas AWAIT_PILOT).

### REL-03 Hybrid / efficience
Chemin PG: BACKEND=pg + SEARCH=1 + fake EmbedClient → semanticHits channel `both`/`derived_embedding`. Révocation exclut. Bug: open_point upsert `OPEN:` vs collect bare statement → aligné sur statement. Efficience: `segment-context-efficiency` omit journal continuation **préservé** (pas de cache global / previous_response_id).

### Audit efficience (T08-oriented, no LIVE)

| Opération | Propriétaire | Données | Répétition | Réutilisation | Risque | Correction |
|---|---|---|---|---|---|---|
| Journal D4 listing | D4/D3 | snippets acquis/OP/sujets | Chaque segment | omit marker si continuation+prior acquis | Redondance corpus | Déjà A.4 — préservé |
| Messages récents | D3 | context snippets | Continuation | slice(-2) | Faible | Déjà A.4 |
| PREFERRED rows | D4/B.7 | acquis préférentiels | Continuation | conservés | — | Préservé |
| Embeddings dérivés | D4 hybrid | vecteurs PG | Par recherche | index FP | FP mismatch open_point | **Corrigé** |
| Relecture Git intégrale | D9 | fichiers | Segments | refs SHA | Possible si Nora re-demande | Pas de cache global (hors mandat) |
| Tool results | D3 | tool outputs | Segments | checkpoint | Injection multiple | Conducteur checkpoint — inspection OK |

### REL-04 Cartographie OBS (données E3)

| Frontière | Événement | IDs | Mesure | Inconnue |
|---|---|---|---|---|
| Tour D3 | d3.turn.accepted/completed/replay/unknown/ownership_lost | request_id, operation_id, generation_id, policy_version | outcome, tool_calls | latence non native |
| Autorité | d3.turn.conversational_authority | intent, command keys | APPLIED/REJECTED/… | — |
| D4 | d3.turn.knowledge_capitalisation / proposals / capitalisation_failed | acquis counts | written/failed | contenu non loggé |
| Document | document_act / proposal / revise / save_failed | document refs | status | — |
| Mission | publication_* | mandate | authorized/awaiting | — |
| Nora adapter | d3.nora.* | attempt_id, segmentIndex | usage tokens si observé | model applied UNVERIFIED |
| FinOps | provider_usage_observations | pilot, project?, work, segment, model req/app | tokens, cost est. | facture Admin OFF |
| Hybrid | (via search path) | projectId, sourceId, indexRef | derivedUsed | embedding LIVE |

E3 présente ; OBS ≠ autorité métier ; pas de chaîne de pensée.

### REL-05 FinOps
Règle: A/A→A ; NULL/A→A ; A/NULL→A ; B/A→null ; multi A+B→null ; hors projet préservé. SQL: directConcordant ∪ viaWorkNullObs ; post-filter `effectiveFinOpsProjectId`. Billable exclut CORRELATION_ONLY only (USAGE_UNKNOWN reste dans recensement requêtes). Couverture vs estimation = populations distinctes (OK).

### REL-06 Docs
delivery-history + registre v0.31 ; R-E2c ; MP mapping exact ; verdict **Cursor** distinct de ChatGPT.

---

## 6. Blast radius

- Conversation/D3: service, aggregate, conductor, nora-adapter, provisional policy
- FinOps read/projection
- Knowledge capitalize open_point text + hybrid test
- Docs construction only (pas suivi ChatGPT)

Hors blast: UX E3, LIVE, RECETTE, migrations, D7 externe, Figma.

---

## 7. Tests et validations

| Commande | Env | Date | Portée | Résultat | Exit |
|---|---|---|---|---|---|
| vitest ml5-cognitive-resources, mp09*, ml5-finops*, ml5-a4/a5/a6, e2-hybrid-pg, mp09-multi-pilotage | DEV PG :5433 | 2026-11-27 | REL 01–05 | **89 PASS** | 0 |
| tsc --noEmit (filtre delta) | DEV | 2026-11-27 | fichiers REL | **NO_DELTA_TSC_ERRORS** | 0 (erreurs préexistantes hors delta) |
| eslint delta | DEV | 2026-11-27 | owners REL | 0 errors (warnings fixed) | 0 |
| git diff --check | — | 2026-11-27 | worktree | clean | 0 |

Non-régression: mp09, A.5 CONTINUE, A.4 omit, e1 safeguards non rejoués en masse (hors impact).

### Fake/Real

| Frontière | Fake | Real | Parité | Gap |
|---|---|---|---|---|
| Admit policy | env stubs | env RECETTE | codes | Calibration LIVE |
| Orchestration | fixtures/unit + mp09 PG | PG DEV | effets | LIVE multi-cap |
| Hybrid | EmbedClient fake 4-d | PG store REAL | search path | dims/model LIVE |
| FinOps | unit helpers | SQL service | attribution | Admin cost |
| OBS | inspection | emitObs DEV | événements | latence |

Claims: IMPLEMENTED / COVERAGE VERIFIED / VERIFIED BY INSPECTION / DETERMINISTIC PROVEN ciblé. Interdits: READY FOR REAL, END-TO-END REAL, coût facturé, Livraison 1 acceptée.

---

## 8. Preuves reportées / réserves

| ID | Type | Contenu | Gate |
|---|---|---|---|
| R-REC-E1-01/02 | C | conservées | Morris |
| R-E2c-CAL | D | calibration ressources | GO Morris LIVE |
| R-E2c-T08 | C/D | mesure comparative T08 | Recette + instrument |
| R-E2c-NAT | C | conversations naturelles multi-cap / reprise / FinOps consult | Recette |
| R-E2c-ADMIN | D | coût facturé | Admin ON sous GO |
| R-E2c-E3 | E | présentation activité | E3 |

Parcours naturels préparés: demande simple ; conception complexe ; multi-capacités ; reprise interruption ; connaissance ancienne ; investigation type T08 ; consultation FinOps.

---

## 9. Review Pack Content Coverage

- [x] date/mandat/Git/ENV/versioning
- [x] Git Review Index
- [x] six reliquats matrice
- [x] corrections + mécanismes
- [x] fichiers complets (ci-dessous) + diffs sections
- [x] tests/preuves
- [x] audit efficience
- [x] chemin PG hybrid
- [x] cartographie OBS
- [x] règle attribution FinOps
- [x] Fake/Real
- [x] réserves
- [x] verdict Cursor

---

## 10. Verdict Cursor

**READY WITH RESERVES**

Gate Morris requis avant E3. ChatGPT doit lire le handoff distant. Ne pas engager E3. Livraison 1 NOT ACCEPTED. NO RELEASE.

---

## 11. Fichiers créés / complets

### FILE COMPLETE: `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts`

```typescript
/**
 * ML5 provisional cognitive policy — Option C env-governed (Morris 2026-11-27).
 *
 * v0.2 (explicit): Terra medium default; Luna low/medium experimental;
 * Sol L/M/H historical; Terra high / Luna high candidates.
 *
 * Activation is NEVER implicit: absent or unknown SFIA_COG_PROVISIONAL_POLICY
 * resolves to legacy_sol (safe historical default).
 *
 * Lane gates:
 * - DEV: explicit `v0.2` | `v0.1` activates provisional couples.
 * - RECETTE: same policy env is refused unless
 *   `SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified-v0.x` (version-scoped) after calibration.
 * - Other / unknown lanes: refuse provisional (fail closed to legacy_sol).
 *
 * An unqualified policy must never become active in RECETTE by default.
 *
 * Rollback: `legacy_sol` | `off` | `0` — no structural rewrite.
 */

import type { CognitiveEffort, CognitiveModelId } from "./resource-catalog";

export const PROVISIONAL_COGNITIVE_POLICY_VERSION =
  "ml5-cog-provisional-policy-v0.2-20261126" as const;

export type ProvisionalPolicyId = "v0.2" | "v0.1" | "legacy_sol";

/** Historical Sol medium — rollback / comparison reference. */
export const HISTORICAL_SOL_DEFAULT_RESOURCE = {
  modelId: "gpt-6.2-sol",
  effort: "medium",
} as const satisfies {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
};

/** Morris-validated provisional initial resource (DEV). */
export const PROVISIONAL_V02_DEFAULT_RESOURCE = {
  modelId: "gpt-6.1-terra",
  effort: "medium",
} as const satisfies {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
};

/** @deprecated alias — same default as v0.2 */
export const PROVISIONAL_V01_DEFAULT_RESOURCE = PROVISIONAL_V02_DEFAULT_RESOURCE;

/**
 * Couples admitted under provisional v0.2 (operational DEV, explicit).
 * Luna Low: experimental admission (Morris 26/11 finalisation).
 */
const PROVISIONAL_V02_ADMITTED: ReadonlySet<string> = new Set([
  "gpt-6.1-terra:medium",
  "gpt-6-luna:low",
  "gpt-6-luna:medium",
  "gpt-6.2-sol:low",
  "gpt-6.2-sol:medium",
  "gpt-6.2-sol:high",
]);

/** v0.1 admitted set (no Luna low) — kept for explicit `v0.1` rollback of admission surface. */
const PROVISIONAL_V01_ADMITTED: ReadonlySet<string> = new Set([
  "gpt-6.1-terra:medium",
  "gpt-6-luna:medium",
  "gpt-6.2-sol:low",
  "gpt-6.2-sol:medium",
  "gpt-6.2-sol:high",
]);

const PROVISIONAL_CANDIDATES: ReadonlySet<string> = new Set([
  "gpt-6-luna:high",
  "gpt-6.1-terra:high",
]);

function coupleKey(modelId: string, effort: string): string {
  return `${modelId}:${effort}`;
}

function studioLane(env: NodeJS.ProcessEnv): string {
  return (env.STUDIO_LANE ?? "").trim().toUpperCase();
}

/**
 * Explicit post-calibration admit for RECETTE — never inferred.
 * E2-REL-01: version-scoped ONLY — `qualified-v0.2` | `qualified-v0.1`
 * (also `qualified:v0.x`). Bare `qualified` is NOT sufficient: v0.1 and v0.2
 * admit distinct couples; an unversioned token must not activate either.
 */
export function isRecetteProvisionalQualified(
  env: NodeJS.ProcessEnv = process.env,
  policyId?: Exclude<ProvisionalPolicyId, "legacy_sol">,
): boolean {
  const raw = (env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT ?? "").trim();
  if (!raw || !policyId) return false;
  return raw === `qualified-${policyId}` || raw === `qualified:${policyId}`;
}

function laneAllowsProvisional(
  lane: string,
  env: NodeJS.ProcessEnv,
  policyId: Exclude<ProvisionalPolicyId, "legacy_sol">,
): { allowed: boolean; reasonCodes: string[] } {
  if (lane === "DEV") {
    return { allowed: true, reasonCodes: ["LANE_DEV"] };
  }
  if (lane === "RECETTE") {
    const raw = (env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT ?? "").trim();
    if (isRecetteProvisionalQualified(env, policyId)) {
      return {
        allowed: true,
        reasonCodes: [
          "LANE_RECETTE",
          "COG_POLICY_RECETTE_ADMIT_QUALIFIED",
          `COG_POLICY_RECETTE_ADMIT_VERSION_${policyId}`,
        ],
      };
    }
    const bareUnversioned = raw === "qualified";
    return {
      allowed: false,
      reasonCodes: [
        "COG_POLICY_REFUSED_RECETTE_UNQUALIFIED",
        "LANE_RECETTE",
        bareUnversioned
          ? "COG_POLICY_REQUIRE_VERSIONED_ADMIT_qualified-vX"
          : "COG_POLICY_REQUIRE_SFIA_COG_PROVISIONAL_RECETTE_ADMIT_qualified-vX",
        `COG_POLICY_REQUIRE_ADMIT_FOR_${policyId}`,
        ...(bareUnversioned ? ["COG_POLICY_RECETTE_ADMIT_BARE_QUALIFIED_REJECTED"] : []),
      ],
    };
  }
  return {
    allowed: false,
    reasonCodes: [
      "COG_POLICY_REFUSED_NON_GOVERNED_LANE",
      `LANE_${lane || "UNKNOWN"}`,
    ],
  };
}

export type ProvisionalPolicyResolution = {
  id: ProvisionalPolicyId;
  /** True when provisional experimental couples may be admitted. */
  provisionalActive: boolean;
  reasonCodes: string[];
};

/**
 * Resolve active policy — fail closed to legacy_sol unless explicitly activated
 * on an allowed lane (DEV, or RECETTE with qualified admit).
 */
export function resolveProvisionalPolicy(
  env: NodeJS.ProcessEnv = process.env,
): ProvisionalPolicyResolution {
  const raw = (env.SFIA_COG_PROVISIONAL_POLICY ?? "").trim().toLowerCase();
  const lane = studioLane(env);

  if (!raw) {
    return {
      id: "legacy_sol",
      provisionalActive: false,
      reasonCodes: [
        "COG_POLICY_ABSENT_FALLBACK_LEGACY_SOL",
        "COG_POLICY_VERSION_legacy_sol",
      ],
    };
  }

  if (
    raw === "off" ||
    raw === "0" ||
    raw === "legacy" ||
    raw === "legacy_sol" ||
    raw === "sol"
  ) {
    return {
      id: "legacy_sol",
      provisionalActive: false,
      reasonCodes: ["COG_POLICY_LEGACY_SOL", "COG_POLICY_VERSION_legacy_sol"],
    };
  }

  if (raw === "v0.2" || raw === "0.2" || raw === "v2") {
    const gate = laneAllowsProvisional(lane, env, "v0.2");
    if (!gate.allowed) {
      return {
        id: "legacy_sol",
        provisionalActive: false,
        reasonCodes: [
          "COG_POLICY_V02_REFUSED_LANE_GATE",
          ...gate.reasonCodes,
          "COG_POLICY_VERSION_legacy_sol",
        ],
      };
    }
    return {
      id: "v0.2",
      provisionalActive: true,
      reasonCodes: [
        `COG_POLICY_PROVISIONAL_${PROVISIONAL_COGNITIVE_POLICY_VERSION}`,
        "COG_POLICY_VERSION_v0.2",
        ...gate.reasonCodes,
      ],
    };
  }

  if (raw === "v0.1" || raw === "0.1" || raw === "v1") {
    const gate = laneAllowsProvisional(lane, env, "v0.1");
    if (!gate.allowed) {
      return {
        id: "legacy_sol",
        provisionalActive: false,
        reasonCodes: [
          "COG_POLICY_V01_REFUSED_LANE_GATE",
          ...gate.reasonCodes,
          "COG_POLICY_VERSION_legacy_sol",
        ],
      };
    }
    return {
      id: "v0.1",
      provisionalActive: true,
      reasonCodes: [
        "COG_POLICY_PROVISIONAL_ml5-cog-provisional-policy-v0.1-20261126",
        "COG_POLICY_VERSION_v0.1",
        "COG_POLICY_V01_DEPRECATED_PREFER_V02",
        ...gate.reasonCodes,
      ],
    };
  }

  // Unknown value — never invent provisional admission.
  return {
    id: "legacy_sol",
    provisionalActive: false,
    reasonCodes: [
      "COG_POLICY_UNKNOWN_FALLBACK_LEGACY_SOL",
      `COG_POLICY_RAW_${raw.slice(0, 32)}`,
      "COG_POLICY_VERSION_legacy_sol",
    ],
  };
}

/** Active provisional policy id — never defaults to v0.2 when env absent. */
export function activeProvisionalPolicyId(
  env: NodeJS.ProcessEnv = process.env,
): ProvisionalPolicyId {
  return resolveProvisionalPolicy(env).id;
}

export function isProvisionalPolicyActive(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return resolveProvisionalPolicy(env).provisionalActive;
}

export function resolveOperationalDefaultResource(
  env: NodeJS.ProcessEnv = process.env,
): { modelId: CognitiveModelId; effort: CognitiveEffort } {
  const resolved = resolveProvisionalPolicy(env);
  if (!resolved.provisionalActive) {
    return { ...HISTORICAL_SOL_DEFAULT_RESOURCE };
  }
  return { ...PROVISIONAL_V02_DEFAULT_RESOURCE };
}

export function isProvisionalAdmittedCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  const resolved = resolveProvisionalPolicy(env);
  if (!resolved.provisionalActive) return false;
  if (resolved.id === "v0.1") {
    return PROVISIONAL_V01_ADMITTED.has(coupleKey(modelId, effort));
  }
  return PROVISIONAL_V02_ADMITTED.has(coupleKey(modelId, effort));
}

/** @deprecated use isProvisionalAdmittedCouple */
export function isProvisionalV01AdmittedCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return isProvisionalAdmittedCouple(modelId, effort, env);
}

export function isProvisionalCandidateCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
): boolean {
  return PROVISIONAL_CANDIDATES.has(coupleKey(modelId, effort));
}

/** @deprecated alias */
export function isProvisionalV01CandidateCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
): boolean {
  return isProvisionalCandidateCouple(modelId, effort);
}

export function provisionalPolicyReasonCodes(
  env: NodeJS.ProcessEnv = process.env,
): string[] {
  return [...resolveProvisionalPolicy(env).reasonCodes];
}

```

### FILE COMPLETE: `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts`

```typescript
/**
 * MP-09 — aggregate multiple D5/D6 conversational outcomes on one turn.
 * Primary effect preserves backward-compatible singular projection; full list feeds restitution.
 */

import type { ConversationalAuthorityOutcome } from "@/domains/pilotage/conversation-authority";
import type { DurablePilotageBinding } from "./semantic-qualification";

/** Durable turn payload slice (matches TurnResult.pilotageEffect when set). */
export type TurnPilotageEffect = {
  attempted: boolean;
  intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
  intentReason?: string;
  operation?: string;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  commandId?: string | null;
  decisionId?: string | null;
  clarification?: string;
  source: ConversationalAuthorityOutcome["source"];
  clientCommandKey?: string;
  semanticIntentId?: string;
  effects?: Array<{ effectKind: string; targetRef: string }>;
};

export function pilotageEffectFromAuthority(
  authority: ConversationalAuthorityOutcome | null,
  semanticIntentId?: string,
): TurnPilotageEffect | null {
  if (!authority) return null;
  return {
    attempted: authority.attempted,
    intentClarity: authority.intentClarity,
    intentReason: authority.intentReason,
    operation: authority.operation,
    status: authority.command?.status ?? null,
    reasonCode: authority.command?.reasonCode ?? null,
    reason: authority.command?.reason ?? authority.intentReason ?? null,
    commandId: authority.command?.commandId ?? null,
    decisionId: authority.decisionId,
    clarification: authority.clarification,
    source: authority.source,
    clientCommandKey: authority.clientCommandKey,
    semanticIntentId,
    effects: authority.command?.effects?.map((e) => ({
      effectKind: e.effectKind,
      targetRef: e.targetRef,
    })),
  };
}

export function ambiguousPilotageEffectRecord(input: {
  intentId: string;
  reason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "AMBIGUOUS",
    intentReason: input.reason,
    reason: input.reason,
    status: null,
    decisionId: null,
    source: "clarification_only",
    semanticIntentId: input.intentId,
  };
}

export function dependencyBlockedPilotageEffectRecord(input: {
  binding: DurablePilotageBinding;
  blockReason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "CLEAR",
    operation: input.binding.operation,
    status: "REJECTED",
    reasonCode: "DEPENDENCY_PRECONDITION",
    reason: input.blockReason,
    decisionId: null,
    source: "none",
    semanticIntentId: input.binding.intentId,
  };
}

/** Mid-loop ownership loss — remaining bindings must not mutate and must be explicit. */
export function ownershipLostPilotageEffectRecord(input: {
  binding: DurablePilotageBinding | { intentId: string; operation?: string };
}): TurnPilotageEffect {
  return {
    attempted: false,
    intentClarity: "CLEAR",
    operation: "operation" in input.binding ? input.binding.operation : undefined,
    status: "SKIPPED",
    reasonCode: "OWNERSHIP_LOST",
    reason:
      "Propriété du tour perdue avant cet acte — effet non exécuté (pas de duplication à la reprise).",
    decisionId: null,
    source: "none",
    semanticIntentId: input.binding.intentId,
  };
}

export function isSuccessfulPilotageCommandStatus(status: string | null | undefined): boolean {
  const s = (status ?? "").toUpperCase();
  return s === "APPLIED" || s === "ALREADY_APPLIED";
}

/**
 * Intent-id outcome map entry after each binding step.
 * Values: command status, AMBIGUOUS, or SKIPPED (dependency / gate).
 */
export type PilotageIntentStepOutcome = string;

function isSatisfiedCrossCapOutcome(step: string): boolean {
  const s = step.toUpperCase();
  return (
    s === "APPLIED" ||
    s === "ALREADY_APPLIED" ||
    s === "AVAILABLE" ||
    s === "OK" ||
    s === "SUCCESS"
  );
}

/**
 * If a pilotage predecessor did not succeed, dependent bindings must not mutate.
 * E2-REL-02 — non-pilotage deps (e.g. D4→D5) are satisfiable when the owner
 * effect was already resolved this turn (`crossCapOutcomeByIntentId`); otherwise
 * fail closed (never treat as vacuously satisfied).
 */
export function dependencyPreconditionBlockReason(input: {
  dependsOn: string[];
  pilotageIntentIds: Set<string>;
  outcomeByIntentId: Map<string, PilotageIntentStepOutcome>;
  /** Same-turn non-pilotage owner outcomes (D4 capitalisation, …). */
  crossCapOutcomeByIntentId?: Map<string, PilotageIntentStepOutcome>;
}): string | null {
  for (const dep of input.dependsOn) {
    if (!input.pilotageIntentIds.has(dep)) {
      const cross = input.crossCapOutcomeByIntentId?.get(dep);
      if (cross === undefined) {
        return (
          `Dépendance (${dep}) hors intentions D5/D6 — précondition inter-capacité ` +
          `non encore satisfaite par un propriétaire; effet dépendant non exécuté.`
        );
      }
      if (cross === "AMBIGUOUS") {
        return `L'intention prérequis hors pilotage (${dep}) est ambiguë — effet dépendant non lancé.`;
      }
      if (cross === "SKIPPED") {
        return `L'acte prérequis hors pilotage (${dep}) n'a pas abouti — effet dépendant non exécuté.`;
      }
      if (!isSatisfiedCrossCapOutcome(cross)) {
        return (
          `L'acte prérequis hors pilotage (${dep}) n'est pas appliqué (${cross}) — ` +
          `effet dépendant non exécuté.`
        );
      }
      continue;
    }
    const step = input.outcomeByIntentId.get(dep);
    if (step === undefined) {
      return `Acte prérequis (${dep}) non encore résolu — effet suivant non exécuté.`;
    }
    if (step === "AMBIGUOUS") {
      return `L'intention prérequis (${dep}) est ambiguë — l'effet dépendant n'a pas été lancé.`;
    }
    if (step === "SKIPPED") {
      return `L'acte prérequis (${dep}) n'a pas abouti — effet dépendant non exécuté.`;
    }
    if (!isSuccessfulPilotageCommandStatus(step)) {
      return `L'acte prérequis (${dep}) n'est pas appliqué (${step}) — effet dépendant non exécuté.`;
    }
  }
  return null;
}

/** First attempted record in stable binding order — backward-compatible primary. */
export function pickPrimaryPilotageEffect(
  records: TurnPilotageEffect[],
): TurnPilotageEffect | null {
  if (records.length === 0) return null;
  return records.find((r) => r.attempted) ?? records[records.length - 1] ?? null;
}

export function intentIdsFromPilotageBindings(
  bindings: Array<
    DurablePilotageBinding | { ambiguous: true; reason: string; intentId: string }
  >,
): Set<string> {
  const ids = new Set<string>();
  for (const b of bindings) {
    ids.add("ambiguous" in b ? b.intentId : b.intentId);
  }
  return ids;
}
```

### FILE COMPLETE: `projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts`

```typescript
/**
 * E06 — pure FinOps read projections (no I/O). UNKNOWN ≠ 0.
 */

export const FINOPS_PERIOD_OPTIONS = [7, 30, 90] as const;
export type FinOpsPeriodDays = (typeof FINOPS_PERIOD_OPTIONS)[number];

export type MeasuredValue<T> =
  | { kind: "empty" }
  | { kind: "unknown"; reason?: string }
  | { kind: "known"; value: T }
  | { kind: "partial"; value: T; note?: string };

export function parseFinOpsPeriodDays(raw: string | null | undefined): FinOpsPeriodDays {
  const n = Number(raw);
  if (n === 7 || n === 90) return n;
  return 30;
}

export function periodStartDate(periodDays: FinOpsPeriodDays, now = new Date()): Date {
  const d = new Date(now);
  d.setUTCDate(d.getUTCDate() - periodDays);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

export const HTTP_ATTEMPT_USAGE_UNKNOWN = "HTTP_ATTEMPT_USAGE_UNKNOWN";
export const HTTP_ATTEMPT_CORRELATION_ONLY = "HTTP_ATTEMPT_CORRELATION_ONLY";

/**
 * HTTP attempt companion rows are correlation markers, not billable request increments.
 * E2-REL-05 — require CORRELATION_ONLY (not USAGE_UNKNOWN alone) so a billable row
 * that incorrectly carries USAGE_UNKNOWN is not silently dropped from cost totals.
 */
export function limitsJsonMarksHttpAttemptCorrelationOnly(
  limits: string[] | null | undefined,
): boolean {
  if (!limits?.length) return false;
  return limits.some((l) => l === HTTP_ATTEMPT_CORRELATION_ONLY);
}

/** True when the row is a correlation companion (may also carry USAGE_UNKNOWN). */
export function isHttpAttemptCorrelationCompanion(row: {
  limitsJson?: string[] | null;
}): boolean {
  return limitsJsonMarksHttpAttemptCorrelationOnly(row.limitsJson);
}

export function isBillableFinOpsObservationRow(row: {
  limitsJson?: string[] | null;
}): boolean {
  return !limitsJsonMarksHttpAttemptCorrelationOnly(row.limitsJson);
}

export function filterBillableFinOpsRows<T extends { limitsJson?: string[] | null }>(
  rows: T[],
): T[] {
  return rows.filter(isBillableFinOpsObservationRow);
}

/**
 * E2-REL-05 — single-row effective project attribution.
 * Concordant / one-sided → that id. Conflict obs≠work → null (never invent).
 */
export function effectiveFinOpsProjectId(input: {
  observationProjectId?: string | null;
  workProjectId?: string | null;
}): string | null {
  const obs = input.observationProjectId?.trim() || null;
  const work = input.workProjectId?.trim() || null;
  if (obs && work && obs !== work) return null;
  return work ?? obs ?? null;
}

/**
 * Work-level attribution across a slice of observations.
 * Any obs≠work conflict ⇒ null (do not invent / do not pick first).
 */
export function effectiveFinOpsProjectIdForWork(
  workProjectId: string | null | undefined,
  rows: Array<{ projectId?: string | null }>,
): string | null {
  const work = workProjectId?.trim() || null;
  for (const r of rows) {
    const obs = r.projectId?.trim() || null;
    if (obs && work && obs !== work) return null;
  }
  return effectiveFinOpsProjectId({
    observationProjectId: resolveObservedProjectId(rows),
    workProjectId: work,
  });
}

/**
 * Resolve a single projectId from observation rows without inventing attribution.
 * Prefer work.projectId (caller). When falling back to observations:
 * - zero projectIds → null (legitimate hors-projet)
 * - one distinct projectId → that id
 * - multiple distinct → null (do NOT pick the first; avoids cross-project contamination)
 */
export function resolveObservedProjectId(
  rows: Array<{ projectId?: string | null }>,
): string | null {
  const ids = new Set<string>();
  for (const r of rows) {
    const id = r.projectId?.trim();
    if (id) ids.add(id);
  }
  if (ids.size === 1) return [...ids][0]!;
  return null;
}

/** Display label: never present UNVERIFIED/null applied as if it were the requested model. */
export function finOpsModelDisplayLabel(input: {
  modelApplied?: string | null;
  modelRequested?: string | null;
}): string | null {
  const applied = input.modelApplied?.trim() || null;
  const requested = input.modelRequested?.trim() || null;
  if (applied && applied !== "UNVERIFIED" && applied !== "inconnu") return applied;
  if (requested) return `${requested} (demandé)`;
  if (applied === "UNVERIFIED") return "non vérifié";
  return null;
}

/** Subtext under « Couverture mesure » — avoids 100 % / 0 % estimation mismatch without lying. */
export function finOpsMeasureCoverageSubtext(kpis: {
  totalRequests: number;
  measuredRequests: number;
  estimationCompletenessPercent: MeasuredValue<number>;
}): string {
  if (kpis.totalRequests <= 0) return "Requêtes non recensées";
  const observed = `${formatIntegerFr(kpis.measuredRequests)} / ${formatIntegerFr(kpis.totalRequests)} requêtes recensées`;
  const est = kpis.estimationCompletenessPercent;
  if (est.kind === "partial" && est.value === 0) {
    return `${observed} · coûts entièrement PARTIAL ou inconnus`;
  }
  if (est.kind === "known" || est.kind === "partial") {
    return `${observed} · estimation connue ${est.value} %`;
  }
  return observed;
}

export function sumBillableProviderRequests(
  rows: Array<{
    providerRequests: number | null;
    limitsJson?: string[] | null;
    costCoverage?: string;
  }>,
  opts?: { onlyWithObservedCost?: boolean },
): number {
  return rows.reduce((acc, r) => {
    if (!isBillableFinOpsObservationRow(r)) return acc;
    if (
      opts?.onlyWithObservedCost &&
      r.costCoverage !== "KNOWN" &&
      r.costCoverage !== "PARTIAL"
    ) {
      return acc;
    }
    const pr = r.providerRequests;
    if (pr == null || !Number.isFinite(pr)) return acc;
    return acc + pr;
  }, 0);
}

export type CostRow = {
  estimatedCostUsd: string | null;
  costCoverage: string;
  limitsJson?: string[] | null;
};

export type TokenRow = {
  totalTokens: number | null;
  inputTokens: number | null;
  outputTokens: number | null;
  limitsJson?: string[] | null;
};

export function tokenTotalForRow(row: TokenRow): number | null {
  if (row.totalTokens != null && Number.isFinite(row.totalTokens)) {
    return row.totalTokens;
  }
  const input = row.inputTokens;
  const output = row.outputTokens;
  if (input == null && output == null) return null;
  if (input == null || output == null) return null;
  if (!Number.isFinite(input) || !Number.isFinite(output)) return null;
  return input + output;
}

export function aggregateEstimatedCost(rows: CostRow[]): MeasuredValue<number> {
  const billable = filterBillableFinOpsRows(rows);
  if (billable.length === 0) return { kind: "empty" };
  let sum = 0;
  let hasKnown = false;
  let hasUnknown = false;
  let hasPartial = false;
  for (const r of billable) {
    if (r.costCoverage === "UNKNOWN" || r.estimatedCostUsd == null) {
      hasUnknown = true;
      continue;
    }
    if (r.costCoverage === "PARTIAL") {
      hasPartial = true;
    }
    const n = Number(r.estimatedCostUsd);
    if (!Number.isFinite(n)) {
      hasUnknown = true;
      continue;
    }
    sum += n;
    hasKnown = true;
  }
  if (!hasKnown) return { kind: "unknown", reason: "Aucun coût mesuré" };
  if (hasUnknown || hasPartial) {
    return {
      kind: "partial",
      value: sum,
      note: hasUnknown
        ? "Certains coûts restent inconnus"
        : "Certains coûts sont partiels",
    };
  }
  return { kind: "known", value: sum };
}

export function aggregateTokenTotal(rows: TokenRow[]): MeasuredValue<number> {
  const billable = filterBillableFinOpsRows(rows);
  if (billable.length === 0) return { kind: "empty" };
  let sum = 0;
  let hasUnknown = false;
  for (const r of billable) {
    const t = tokenTotalForRow(r);
    if (t == null) {
      hasUnknown = true;
      continue;
    }
    sum += t;
  }
  if (sum === 0 && hasUnknown && billable.length > 0) {
    return { kind: "unknown", reason: "Tokens non recensés" };
  }
  if (hasUnknown) {
    return { kind: "partial", value: sum, note: "Tokens partiellement recensés" };
  }
  return { kind: "known", value: sum };
}

/**
 * Observation coverage: share of *recorded* provider requests that have *some*
 * cost observation (KNOWN or PARTIAL). PARTIAL still counts as observed — not as
 * financially complete.
 *
 * The denominator is the observation set, not a proven complete HTTP-emission
 * census. Without an independent emission census, never present coverage as a
 * fully-known 100% of all real emissions (mandate S4 — honest coverage).
 */
export function computeMeasureCoveragePercent(
  rows: Array<{
    costCoverage: string;
    providerRequests: number | null;
    limitsJson?: string[] | null;
  }>,
  opts?: { emissionCensusComplete?: boolean },
): MeasuredValue<number> {
  const billable = filterBillableFinOpsRows(rows);
  if (billable.length === 0) return rows.length === 0 ? { kind: "empty" } : { kind: "unknown", reason: "Requêtes non observées" };
  let totalReq = 0;
  let observedReq = 0;
  let missingRequestCounts = false;
  for (const r of billable) {
    if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
      missingRequestCounts = true;
      continue;
    }
    totalReq += r.providerRequests;
    if (r.costCoverage === "KNOWN" || r.costCoverage === "PARTIAL") {
      observedReq += r.providerRequests;
    }
  }
  if (missingRequestCounts && totalReq <= 0) {
    return { kind: "unknown", reason: "Requêtes non observées" };
  }
  if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
  const pct = Math.round((observedReq / totalReq) * 100);
  const value = Math.min(100, Math.max(0, pct));
  const censusComplete = opts?.emissionCensusComplete === true;
  if (missingRequestCounts || !censusComplete) {
    return {
      kind: "partial",
      value,
      note: missingRequestCounts
        ? "Certaines lignes sans nombre de requêtes"
        : "Couverture sur observations recensées — population d'émissions HTTP non établie indépendamment",
    };
  }
  return { kind: "known", value };
}

/**
 * Estimation completeness: only KNOWN rows contribute. PARTIAL never inflates
 * this toward a fully-known financial picture. Completeness is always relative
 * to the recorded observation set unless an emission census is proven complete.
 */
export function computeEstimationCompletenessPercent(
  rows: Array<{
    costCoverage: string;
    providerRequests: number | null;
    limitsJson?: string[] | null;
  }>,
  opts?: { emissionCensusComplete?: boolean },
): MeasuredValue<number> {
  const billable = filterBillableFinOpsRows(rows);
  if (billable.length === 0) return rows.length === 0 ? { kind: "empty" } : { kind: "unknown", reason: "Requêtes non observées" };
  let totalReq = 0;
  let knownReq = 0;
  let hasPartial = false;
  let missingRequestCounts = false;
  for (const r of billable) {
    if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
      missingRequestCounts = true;
      continue;
    }
    totalReq += r.providerRequests;
    if (r.costCoverage === "KNOWN") {
      knownReq += r.providerRequests;
    } else if (r.costCoverage === "PARTIAL") {
      hasPartial = true;
    }
  }
  if (missingRequestCounts && totalReq <= 0) {
    return { kind: "unknown", reason: "Requêtes non observées" };
  }
  if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
  const pct = Math.round((knownReq / totalReq) * 100);
  const value = Math.min(100, Math.max(0, pct));
  const censusComplete = opts?.emissionCensusComplete === true;
  if (missingRequestCounts || hasPartial || !censusComplete) {
    return {
      kind: "partial",
      value,
      note: hasPartial
        ? "Mesures PARTIAL exclues de la complétude financière"
        : missingRequestCounts
          ? "Certaines lignes sans nombre de requêtes"
          : "Complétude sur observations recensées — population d'émissions HTTP non établie indépendamment",
    };
  }
  return { kind: "known", value };
}

export function formatUsdFr(value: number): string {
  const s = value.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${s} $`;
}

/** Compact USD for chart Y-axis (Figma 13.03). */
export function formatUsdAxisFr(value: number): string {
  const s = value.toLocaleString("fr-FR", {
    minimumFractionDigits: value > 0 && value < 1 ? 1 : 0,
    maximumFractionDigits: value > 0 && value < 1 ? 2 : 0,
  });
  return `${s} $`;
}

export function finOpsDailyChartScaleMax(costs: Array<number | null>): number {
  let max = 0;
  for (const c of costs) {
    if (c != null && Number.isFinite(c) && c > max) max = c;
  }
  return max > 0 ? max : 1;
}

function finOpsNiceChartTop(max: number): number {
  if (max <= 1) return 1;
  if (max <= 3) return 3;
  if (max <= 6) return 6;
  if (max <= 10) return 10;
  const mag = 10 ** Math.floor(Math.log10(max));
  return Math.ceil(max / mag) * mag;
}

/** Descending USD ticks for a daily spend chart (top → 0). */
export function finOpsDailyChartYTicks(scaleMax: number): number[] {
  const top = finOpsNiceChartTop(scaleMax);
  const steps = top <= 1 ? 2 : 3;
  const step = top / steps;
  const ticks: number[] = [];
  for (let i = steps; i >= 0; i--) {
    ticks.push(Math.round(step * i * 1000) / 1000);
  }
  return ticks;
}

export function finOpsDailyXAxisLabels(periodDays: number): { start: string; end: string } {
  const span = Math.max(1, periodDays);
  return { start: `J-${span - 1}`, end: "Aujourd'hui" };
}

export function formatModelBreakdownCost(row: {
  costUsd: number | null;
  coverage: string;
}): string {
  if (row.costUsd == null || row.coverage === "UNKNOWN") {
    return "Inconnu";
  }
  if (row.coverage === "PARTIAL") {
    return formatMeasuredUsd({ kind: "partial", value: row.costUsd });
  }
  return formatMeasuredUsd({ kind: "known", value: row.costUsd });
}

export function mapCostCoverageLabel(coverage: string): string {
  switch ((coverage ?? "").toUpperCase()) {
    case "KNOWN":
      return "Mesuré";
    case "PARTIAL":
      return "Partiel";
    case "UNKNOWN":
      return "Inconnu";
    default:
      return coverage || "—";
  }
}

export function formatTokenCountFr(value: number): string {
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    return `${m.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} M`;
  }
  return value.toLocaleString("fr-FR");
}

export function formatIntegerFr(value: number): string {
  return value.toLocaleString("fr-FR");
}

export function formatMeasuredUsd(metric: MeasuredValue<number>): string {
  switch (metric.kind) {
    case "known":
    case "partial":
      return formatUsdFr(metric.value);
    case "unknown":
      return "Inconnu";
    case "empty":
      return "—";
  }
}

export function formatMeasuredTokens(metric: MeasuredValue<number>): string {
  switch (metric.kind) {
    case "known":
    case "partial":
      return formatTokenCountFr(metric.value);
    case "unknown":
      return "—";
    case "empty":
      return "—";
  }
}

export function formatMeasuredPercent(metric: MeasuredValue<number>): string {
  switch (metric.kind) {
    case "known":
      return `${metric.value} %`;
    case "partial":
      return `${metric.value} %`;
    case "unknown":
      return "—";
    case "empty":
      return "—";
  }
}

export function mapCognitiveWorkStatusLabel(status: string | null | undefined): string {
  switch ((status ?? "").toUpperCase()) {
    case "COMPLETE":
      return "Abouti";
    case "OPEN":
    case "RUNNING":
    case "SUSPENDED":
      return "En cours";
    default:
      return "Interrompu";
  }
}

export function resolvePersonalSettingsActive(
  pathname: string,
): "integrations" | "consumption" | null {
  const path = pathname || "/";
  if (path.startsWith("/settings/consumption")) return "consumption";
  if (path.startsWith("/settings/integrations")) return "integrations";
  return null;
}

export function displayModelShort(model: string | null | undefined): string | null {
  if (!model) return null;
  const m = model.toLowerCase();
  if (m.includes("luna")) return "Luna";
  if (m.includes("terra")) return "Terra";
  if (m.includes("sol")) return "Sol";
  const tail = model.split(/[-_/]/).pop();
  return tail ? tail.charAt(0).toUpperCase() + tail.slice(1) : model;
}

export function uniqueModelsLabel(models: Iterable<string | null | undefined>): string {
  const set = new Set<string>();
  for (const raw of models) {
    const d = displayModelShort(raw);
    if (d) set.add(d);
  }
  return [...set].sort().join(" · ") || "—";
}
```

### FILE COMPLETE: `projects/sfia-studio-next/web/tests/integration/e2-hybrid-pg-path.pg.test.ts`

```typescript
/**
 * E2-REL-03 — PostgreSQL derived hybrid path with substituted embed client (no LIVE).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db, sql as pgSql } from "@/db/client";
import { pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  hybridSearchProjectKnowledge,
  upsertDerivedAdmissibleSource,
  revokeDerivedSource,
  type EmbedClient,
} from "@/domains/knowledge/derived-embedding-service";
import { ensureSubject, capitalizeAcquis } from "@/domains/knowledge/service";
import { knowledgeAcquis } from "@/db/schema";

const VECTOR_Q = [0.9, 0.1, 0.0, 0.0];

function mockEmbedClient(): EmbedClient {
  return {
    embeddings: {
      create: async () => ({
        data: [{ embedding: VECTOR_Q }],
        usage: { total_tokens: 8 },
      }),
    },
  };
}

async function seedPilotProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  const uniqueName = `${label}-${newId("p").slice(-6)}`;
  await updatePreview(pilotId, prep.id, uniqueName, "e2 hybrid pg");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: uniqueName,
    previewSummary: "e2 hybrid pg",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED") throw new Error(`seed failed: ${created.status}`);
  return { pilotId, projectId: created.projectId!, preparationId: prep.id };
}

describe("E2-REL-03 — hybrid PG path (DET, fake embed)", () => {
  let pilotId = "";
  let projectId = "";
  let preparationId = "";
  let derivedTableReady = false;
  let sourceId = "";
  const prevSearch = process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
  const prevBackend = process.env.SFIA_DERIVED_EMBEDDING_BACKEND;
  const text =
    "Les règles d'habilitation exigent une validation du Pilote avant ouverture.";

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
    process.env.SFIA_DERIVED_EMBEDDING_BACKEND = "pg";
    delete process.env.OPENAI_API_KEY;
    const meta = await pgSql`
      SELECT 1 AS ok
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_name = 'derived_embedding_chunks'
      LIMIT 1
    `;
    derivedTableReady = meta.length > 0;
    if (!derivedTableReady) return;
    const seeded = await seedPilotProject(`e2-hyb-${newId("p").slice(-6)}`);
    pilotId = seeded.pilotId;
    projectId = seeded.projectId;
    preparationId = seeded.preparationId;
    const subject = await ensureSubject(pilotId, preparationId, "Habilitations");
    const subjectId =
      "subjectId" in subject && typeof subject.subjectId === "string"
        ? subject.subjectId
        : null;
    expect(subjectId).toBeTruthy();
    const acquis = await capitalizeAcquis(pilotId, preparationId, {
      statement: text,
      kind: "FACT",
      subjectId: subjectId!,
      provenance: { sourceKind: "pilot", sourceId: "e2-hyb", epistemic: "established" },
    });
    expect(acquis.status).toBe("AVAILABLE");
    sourceId = acquis.acquisId!;
    const stored = (
      await db.select().from(knowledgeAcquis).where(eq(knowledgeAcquis.id, sourceId)).limit(1)
    )[0];
    // Must match collectAdmissibleKnowledgeSources fingerprint text (`${kind}: ${statement}`).
    const indexedText = `FACT: ${stored?.statement?.trim() || text}`;
    const client = mockEmbedClient();
    const up = await upsertDerivedAdmissibleSource({
      pilotId,
      projectId,
      preparationId,
      sourceId,
      sourceKind: "acquis",
      text: indexedText,
      client,
    });
    expect(up.ok).toBe(true);
  });

  afterAll(async () => {
    if (prevSearch === undefined) delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
    else process.env.SFIA_DERIVED_EMBEDDING_SEARCH = prevSearch;
    if (prevBackend === undefined) delete process.env.SFIA_DERIVED_EMBEDDING_BACKEND;
    else process.env.SFIA_DERIVED_EMBEDDING_BACKEND = prevBackend;
    if (!derivedTableReady || !projectId) return;
    await pgSql`DELETE FROM derived_embedding_chunks WHERE project_id = ${projectId}`;
  });

  it("semanticHits contribute with derivedUsed=true on PG backend", async ({ skip }) => {
    if (!derivedTableReady) skip("derived_embedding_chunks absent");
    const client = mockEmbedClient();
    const out = await hybridSearchProjectKnowledge({
      pilotId,
      projectId,
      query: "règles habilitation validation",
      lexical: [
        {
          sourceId,
          title: "Habilitations",
          snippet: "Les règles d'habilitation…",
          matchKind: "title",
          channel: "lexical",
        },
      ],
      limit: 8,
      client,
    });
    expect(out.backend).toBe("pg");
    expect(out.derivedSkippedReason).toBeNull();
    expect(out.derivedUsed).toBe(true);
    expect(out.hits.some((h) => h.sourceId === sourceId)).toBe(true);
    const hit = out.hits.find((h) => h.sourceId === sourceId);
    expect(hit?.channel === "both" || hit?.channel === "derived_embedding").toBe(true);
  });

  it("revoked source is excluded after rights revalidation", async ({ skip }) => {
    if (!derivedTableReady) skip("derived_embedding_chunks absent");
    await revokeDerivedSource(projectId, sourceId);
    const client = mockEmbedClient();
    const out = await hybridSearchProjectKnowledge({
      pilotId,
      projectId,
      query: "règles habilitation validation",
      lexical: [
        {
          sourceId,
          title: "Habilitations",
          snippet: "Les règles d'habilitation…",
          matchKind: "title",
          channel: "lexical",
        },
      ],
      limit: 8,
      client,
    });
    const semanticish = out.hits.filter(
      (h) =>
        h.sourceId === sourceId &&
        (h.channel === "derived_embedding" || h.channel === "both"),
    );
    expect(semanticish.length).toBe(0);
  });
});

```

### FILE COMPLETE: `projects/sfia-studio-next/web/tests/unit/ml5-a6-finops-read-attribution.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const usageRead = join(
  process.cwd(),
  "src/domains/finops/usage-read-service.ts",
);

describe("A.6/A.7 — FinOps usage read attribution (module contract)", () => {
  it("filters billable rows in work detail and aggregates with projection helpers", () => {
    const src = readFileSync(usageRead, "utf8");
    expect(src).toMatch(/filterBillableFinOpsRows\(rows\)/);
    expect(src).toMatch(/aggregateEstimatedCost\(billableRows\)/);
    expect(src).toMatch(/sumBillableProviderRequests\(billableRows/);
  });

  it("E2-REL-05 — project filter avoids OR conflict; effectiveFinOpsProjectId post-filters", () => {
    const src = readFileSync(usageRead, "utf8");
    expect(src).toMatch(/cognitiveWorkIdsOnProject/);
    expect(src).toMatch(/cognitiveWorkIdsHorsProjet/);
    expect(src).toMatch(/directConcordant/);
    expect(src).toMatch(/viaWorkNullObs/);
    expect(src).toMatch(/effectiveFinOpsProjectId/);
    // Legacy OR (obs.projectId = A OR work-on-A) must not return — contaminates B∩A.
    expect(src).not.toMatch(
      /or\(eq\(providerUsageObservations\.projectId, input\.projectId\), byWork\)/,
    );
    expect(src).toMatch(/effectiveFinOpsProjectId\(\{/);
  });

  it("summary KPIs use billable request denominators", () => {
    const src = readFileSync(usageRead, "utf8");
    expect(src).toMatch(/const totalRequests = sumBillableProviderRequests\(rows\)/);
    expect(src).toMatch(/onlyWithObservedCost: true/);
  });
});
```

## 12. Diffs exploitables (fichiers volumineux)

### DIFF: `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index d7211fc8..5b240444 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -79,6 +79,16 @@ import {
   isTechnicalMissionAssistantContent,
   projectMetierMissionMessage,
 } from "@/domains/conversation/pilotage-effect-restitution";
+import {
+  ambiguousPilotageEffectRecord,
+  dependencyBlockedPilotageEffectRecord,
+  dependencyPreconditionBlockReason,
+  intentIdsFromPilotageBindings,
+  ownershipLostPilotageEffectRecord,
+  pickPrimaryPilotageEffect,
+  pilotageEffectFromAuthority,
+  type TurnPilotageEffect,
+} from "@/domains/conversation/pilotage-effect-aggregate";
 import {
   appendDocumentEffectAck,
   extractContractualDocumentProposal,
@@ -95,7 +105,7 @@ import {
   extractKnowledgeProposals,
   summarizeKnowledgeProposals,
   extractKnowledgeSelectionHints,
-  extractPilotageBinding,
+  listPilotageEffectBindings,
   projectStudioEffects,
   unavailableQualification,
   type NoraTurnQualification,
@@ -480,6 +490,7 @@ export async function lookupDurableTurnByClientKey(
   userMessageId: string | null;
   assistantMessageId: string | null;
   pilotageEffect: TurnResult["pilotageEffect"];
+  pilotageEffects?: TurnPilotageEffect[];
   idempotentReplay: true;
   noraMode: "durable-lookup";
 }> {
@@ -493,6 +504,7 @@ export async function lookupDurableTurnByClientKey(
     userMessageId: null,
     assistantMessageId: null,
     pilotageEffect: null,
+    pilotageEffects: undefined as TurnPilotageEffect[] | undefined,
     idempotentReplay: true as const,
     noraMode: "durable-lookup" as const,
   };
@@ -526,11 +538,13 @@ export async function lookupDurableTurnByClientKey(
   if (!row) return empty;

   let fromJson: TurnResult["pilotageEffect"] = null;
+  let fromJsonEffects: TurnResult["pilotageEffects"] = undefined;
   let humanDecisionCreated = false;
   if (row.resultJson) {
     try {
       const parsed = JSON.parse(row.resultJson) as TurnResult;
       fromJson = parsed.pilotageEffect ?? null;
+      fromJsonEffects = parsed.pilotageEffects;
       humanDecisionCreated = Boolean(parsed.humanDecisionCreated);
     } catch {
       /* ignore corrupt payload — status row still authoritative for D3 */
@@ -543,7 +557,11 @@ export async function lookupDurableTurnByClientKey(
     clientTurnKey: row.clientTurnKey,
     userMessageId: row.userMessageId,
     fromJson,
+    fromJsonEffects,
     humanDecisionCreated,
+    semanticIntentIds: fromJsonEffects
+      ?.map((e) => e.semanticIntentId?.trim() || "")
+      .filter(Boolean),
   });

   return {
@@ -555,6 +573,7 @@ export async function lookupDurableTurnByClientKey(
     userMessageId: row.userMessageId,
     assistantMessageId: row.assistantMessageId,
     pilotageEffect: resolved.pilotageEffect,
+    pilotageEffects: resolved.pilotageEffects,
     idempotentReplay: true,
     noraMode: "durable-lookup",
   };
@@ -750,21 +769,9 @@ export type TurnResult = {
    */
   humanDecisionCreated: boolean;
   /** Honest D5/D6 bridge outcome for this USER turn (absent when no project / no act). */
-  pilotageEffect?: {
-    attempted: boolean;
-    intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
-    intentReason?: string;
-    operation?: string;
-    status?: string | null;
-    reasonCode?: string | null;
-    reason?: string | null;
-    commandId?: string | null;
-    decisionId?: string | null;
-    clarification?: string;
-    source: ConversationalAuthorityOutcome["source"];
-    clientCommandKey?: string;
-    effects?: Array<{ effectKind: string; targetRef: string }>;
-  } | null;
+  pilotageEffect?: TurnPilotageEffect | null;
+  /** MP-09 — every admissible binding outcome on the turn (primary kept in pilotageEffect). */
+  pilotageEffects?: TurnPilotageEffect[];
   reconciled?: boolean;
   /** Durable turn id — available for mid-turn activity polling (C01/C07). */
   turnCommandId?: string | null;
@@ -808,46 +815,74 @@ export type TurnResult = {
   turnProjection?: TurnProjection | null;
 };

-function pilotageEffectFromAuthority(
-  authority: ConversationalAuthorityOutcome | null,
-): TurnResult["pilotageEffect"] {
-  if (!authority) return null;
-  return {
-    attempted: authority.attempted,
-    intentClarity: authority.intentClarity,
-    intentReason: authority.intentReason,
-    operation: authority.operation,
-    status: authority.command?.status ?? null,
-    reasonCode: authority.command?.reasonCode ?? null,
-    reason: authority.command?.reason ?? authority.intentReason ?? null,
-    commandId: authority.command?.commandId ?? null,
-    decisionId: authority.decisionId,
-    clarification: authority.clarification,
-    source: authority.source,
-    clientCommandKey: authority.clientCommandKey,
-    effects: authority.command?.effects?.map((e) => ({
-      effectKind: e.effectKind,
-      targetRef: e.targetRef,
-    })),
-  };
-}
-
 async function resolvePilotageEffectForReplay(input: {
   pilotId: string;
   projectId: string | null | undefined;
   clientTurnKey?: string | null;
   userMessageId?: string | null;
   fromJson: TurnResult["pilotageEffect"] | null | undefined;
+  /** E2-REL-02 — full multi-intent list from stored result_json when present. */
+  fromJsonEffects?: TurnResult["pilotageEffects"] | null | undefined;
+  humanDecisionCreated: boolean;
+  /** Semantic intent ids from stashed qualification when replaying UNKNOWN. */
+  semanticIntentIds?: string[] | null;
+}): Promise<{
+  pilotageEffect: TurnResult["pilotageEffect"];
+  pilotageEffects?: TurnPilotageEffect[];
   humanDecisionCreated: boolean;
-}): Promise<{ pilotageEffect: TurnResult["pilotageEffect"]; humanDecisionCreated: boolean }> {
+}> {
+  // Prefer durable multi-intent payload from result_json (idempotent COMPLETE / partial).
+  if (input.fromJsonEffects && input.fromJsonEffects.length > 0) {
+    const primary =
+      input.fromJsonEffects.find((e) => e.attempted && e.status) ??
+      input.fromJsonEffects[0] ??
+      null;
+    return {
+      pilotageEffect: input.fromJson ?? primary,
+      pilotageEffects: input.fromJsonEffects,
+      humanDecisionCreated:
+        input.humanDecisionCreated ||
+        input.fromJsonEffects.some((e) => Boolean(e.decisionId)),
+    };
+  }
   if (input.fromJson?.attempted && input.fromJson.status) {
     return {
       pilotageEffect: input.fromJson,
+      pilotageEffects: input.fromJson ? [input.fromJson] : undefined,
       humanDecisionCreated: input.humanDecisionCreated || Boolean(input.fromJson.decisionId),
     };
   }
   if (!input.projectId) {
-    return { pilotageEffect: input.fromJson ?? null, humanDecisionCreated: input.humanDecisionCreated };
+    return {
+      pilotageEffect: input.fromJson ?? null,
+      humanDecisionCreated: input.humanDecisionCreated,
+    };
+  }
+  // E2-REL-02 — reconstitute each semantic intent (C02 per-intent keys), not only primary.
+  const intentIds = (input.semanticIntentIds ?? []).map((s) => s.trim()).filter(Boolean);
+  if (intentIds.length > 0 && input.clientTurnKey?.trim()) {
+    const effects: TurnPilotageEffect[] = [];
+    let human = input.humanDecisionCreated;
+    for (const semanticIntentId of intentIds) {
+      const reconstituted = await reconstituteConversationalAuthority({
+        pilotId: input.pilotId,
+        projectId: input.projectId,
+        clientTurnKey: input.clientTurnKey,
+        userMessageId: input.userMessageId,
+        semanticIntentId,
+      });
+      if (!reconstituted) continue;
+      const effect = pilotageEffectFromAuthority(reconstituted, semanticIntentId);
+      if (effect) effects.push(effect);
+      human = human || Boolean(reconstituted.humanDecisionCreated);
+    }
+    if (effects.length > 0) {
+      return {
+        pilotageEffect: pickPrimaryPilotageEffect(effects),
+        pilotageEffects: effects,
+        humanDecisionCreated: human,
+      };
+    }
   }
   const reconstituted = await reconstituteConversationalAuthority({
     pilotId: input.pilotId,
@@ -856,11 +891,15 @@ async function resolvePilotageEffectForReplay(input: {
     userMessageId: input.userMessageId,
   });
   if (!reconstituted) {
-    return { pilotageEffect: input.fromJson ?? null, humanDecisionCreated: input.humanDecisionCreated };
+    return {
+      pilotageEffect: input.fromJson ?? null,
+      humanDecisionCreated: input.humanDecisionCreated,
+    };
   }
   const effect = pilotageEffectFromAuthority(reconstituted);
   return {
     pilotageEffect: effect,
+    pilotageEffects: effect ? [effect] : undefined,
     humanDecisionCreated:
       input.humanDecisionCreated || Boolean(reconstituted.humanDecisionCreated),
   };
@@ -996,12 +1035,20 @@ export async function postUserMessageAndNora(
         userMessageId: reserved.userMessageId,
       });
       let replayPilotage: TurnResult["pilotageEffect"] = null;
+      let replayPilotageEffects: TurnResult["pilotageEffects"] = undefined;
       let replayDecision = false;
+      let replayIntentIds: string[] = [];
       if (reserved.resultJson) {
         try {
           const parsed = JSON.parse(reserved.resultJson) as TurnResult;
           replayPilotage = parsed.pilotageEffect ?? null;
+          replayPilotageEffects = parsed.pilotageEffects;
           replayDecision = Boolean(parsed.humanDecisionCreated);
+          if (parsed.pilotageEffects?.length) {
+            replayIntentIds = parsed.pilotageEffects
+              .map((e) => e.semanticIntentId?.trim() || "")
+              .filter(Boolean);
+          }
         } catch {
           /* ignore */
         }
@@ -1012,7 +1059,9 @@ export async function postUserMessageAndNora(
         clientTurnKey: reserved.clientTurnKey ?? clientTurnKey,
         userMessageId: reserved.userMessageId,
         fromJson: replayPilotage,
+        fromJsonEffects: replayPilotageEffects,
         humanDecisionCreated: replayDecision,
+        semanticIntentIds: replayIntentIds,
       });
       return {
         operationId: reserved.operationId,
@@ -1024,6 +1073,7 @@ export async function postUserMessageAndNora(
         assistantMessageId: reserved.assistantMessageId,
         humanDecisionCreated: resolved.humanDecisionCreated,
         pilotageEffect: resolved.pilotageEffect,
+        pilotageEffects: resolved.pilotageEffects,
         reconciled: reserved.reconciled,
         noraMode: "replay-terminal",
         capitalisation: reconstituted.capitalisation,
@@ -1065,6 +1115,8 @@ export async function postUserMessageAndNora(

   /** SEM/TV: D5/D6 after Nora semantic qualification — not before. */
   let authority: ConversationalAuthorityOutcome | null = null;
+  const pilotageEffectRecords: TurnPilotageEffect[] = [];
+  let conversationalHumanDecisionCreated = false;

   const existing = await listMessages(pilotId, preparationId);
   const contextSnippets = existing
@@ -1649,14 +1701,16 @@ export async function postUserMessageAndNora(
     }
   }

-  const pilotageBinding = extractPilotageBinding(qualification);
+  const pilotageBindings = listPilotageEffectBindings(qualification);
   const knowledgeHints = extractKnowledgeSelectionHints(qualification);
   if (
     knowledgeHints.acquisIds.length ||
     knowledgeHints.openPointIds.length ||
     knowledgeHints.subjectIds.length
   ) {
+    // E2 A.4 — pass projectId so resume reactivation / DERIVED_HIT can run (mirror pre-Nora).
     knowledgeResumeHints = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
+      projectId: ctx.project?.id ?? null,
       preferredAcquisIds: knowledgeHints.acquisIds,
       preferredOpenPointIds: knowledgeHints.openPointIds,
       preferredSubjectIds: knowledgeHints.subjectIds,
@@ -1829,80 +1883,281 @@ export async function postUserMessageAndNora(
   }
   // DIALOGUE_INDEPENDANT may answer without métier mutations that bypass A.

-  // D5/D6 after semantic qualification — typed binding only (never parameters.notes).
+  let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
+    capitalisations: [],
+    selectionMethod: "semantic-proposals",
+    selectionLimit:
+      "SEM-02: capitalisation depuis propositions Nora typées (d4.record_knowledge).",
+    humanDecisionCreated: false,
+    ownershipLost: false,
+  };
+  let capitalisationError: string | undefined;
+  let ownershipLostBeforeD4 = false;
+
+  // E2-REL-02 — when D5/D6 dependsOn D4 knowledge intents, run capitalisation first so
+  // cross-cap preconditions can be satisfied (not permanently blocked).
+  const crossCapOutcomeByIntentId = new Map<string, string>();
+  let capitalisationRanBeforePilotage = false;
+  const pilotageIntentIdsEarly = intentIdsFromPilotageBindings(pilotageBindings);
+  const intentDependsOnEarly = new Map(
+    qualification.intents.map((i) => [i.id, i.dependsOn] as const),
+  );
+  const d4DepsForPilotage = new Set<string>();
+  for (const b of pilotageBindings) {
+    const id = b.intentId;
+    for (const dep of intentDependsOnEarly.get(id) ?? []) {
+      if (pilotageIntentIdsEarly.has(dep)) continue;
+      const depIntent = qualification.intents.find((i) => i.id === dep);
+      if (
+        depIntent?.capabilityId === "d4.record_knowledge" &&
+        depIntent.mode === "REQUEST_EFFECT"
+      ) {
+        d4DepsForPilotage.add(dep);
+      }
+    }
+  }
   if (
     allowOwnerEffects &&
-    pilotageBinding &&
-    !("ambiguous" in pilotageBinding) &&
-    ctx.project?.id
+    d4DepsForPilotage.size > 0 &&
+    reply.status === "COMPLETE" &&
+    (await requireTurnOwnership(reserved.commandId, reserved.ownerToken))
   ) {
-    const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
-    if (stillOwned) {
-      const preQualified = {
-        clarity: "CLEAR" as const,
-        operation: pilotageBinding.operation,
-        objective: pilotageBinding.objective ?? content,
-        statement: pilotageBinding.statement,
-        objectRef: pilotageBinding.objectRef,
-        decisionId: pilotageBinding.decisionId,
-        methodRef: pilotageBinding.methodRef,
-        methodVersion: pilotageBinding.methodVersion,
-        restrictionKindHint: pilotageBinding.restrictionKindHint,
-        restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
-        cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
-        toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
-        semanticIntentId: pilotageBinding.intentId,
-        semanticSchemaVersion: pilotageBinding.schemaVersion,
-      };
-      authority = await applyConversationalAuthority({
-        pilotId,
-        projectId: ctx.project.id,
+    try {
+      const knowledgeProposals = extractKnowledgeProposals(qualification);
+      capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
+        userText: content,
+        assistantText: reply.content,
+        generationId: reply.generationId,
         userMessageId: reserved.userMessageId,
-        content,
-        clientTurnKey,
-        preQualified,
+        // Assistant message id not yet reserved — provenance still carries USER + generation.
+        assistantMessageId: null,
+        proposals: knowledgeProposals,
+        turnFence: {
+          commandId: reserved.commandId,
+          ownerToken: reserved.ownerToken,
+          beforeFenceCheck: turnRaceHooks.beforeD4Effect,
+        },
       });
+      capitalisationRanBeforePilotage = true;
+      if (capitalisation.ownershipLost) {
+        ownershipLostBeforeD4 = true;
+      }
+      for (const dep of d4DepsForPilotage) {
+        const related = capitalisation.capitalisations.filter(
+          (c) => (c as { intentId?: string }).intentId === dep,
+        );
+        if (capitalisation.ownershipLost) {
+          crossCapOutcomeByIntentId.set(dep, "SKIPPED");
+        } else if (related.length === 0) {
+          // Proposal absent or not mapped — try aggregate write signal for that intent's proposals.
+          const hadProposal = knowledgeProposals.some((p) => p.intentId === dep);
+          crossCapOutcomeByIntentId.set(
+            dep,
+            hadProposal &&
+              capitalisation.capitalisations.some(
+                (c) => c.status === "AVAILABLE" || c.status === "OK",
+              )
+              ? "APPLIED"
+              : hadProposal
+                ? "FAILED"
+                : "SKIPPED",
+          );
+        } else if (related.some((c) => c.status === "AVAILABLE" || c.status === "OK")) {
+          crossCapOutcomeByIntentId.set(dep, "APPLIED");
+        } else {
+          crossCapOutcomeByIntentId.set(dep, "FAILED");
+        }
+      }
       emitObs({
-        event_name: "d3.turn.conversational_authority",
+        event_name: "d3.turn.knowledge_capitalisation",
         component: "d3.conversation",
         request_id: requestId,
         operation_id: reserved.operationId,
-        outcome: authority.attempted
-          ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
-            ? "SUCCESS"
-            : authority.command?.status === "UNKNOWN"
-              ? "UNKNOWN"
-              : "FAILED"
-          : "PARTIAL",
+        generation_id: reply.generationId,
+        outcome: "PARTIAL",
         meta: {
-          attempted: authority.attempted,
-          intent_clarity: authority.intentClarity,
-          operation: authority.operation ?? null,
-          command_status: authority.command?.status ?? null,
-          reason_code: authority.command?.reasonCode ?? null,
-          decision_id: authority.decisionId,
-          source: authority.source,
-          semantic_gate: true,
-          semantic_intent_id: pilotageBinding.intentId,
+          early_before_pilotage: true,
+          d4_deps: d4DepsForPilotage.size,
+          capitalisation_written: capitalisation.capitalisations.filter(
+            (c) => c.status === "AVAILABLE" || c.status === "OK",
+          ).length,
         },
       });
+    } catch {
+      capitalisationError = "CAPITALISATION_EXCEPTION";
+      for (const dep of d4DepsForPilotage) {
+        crossCapOutcomeByIntentId.set(dep, "FAILED");
+      }
     }
-  } else if (pilotageBinding && "ambiguous" in pilotageBinding) {
-    emitObs({
-      event_name: "d3.turn.conversational_authority",
-      component: "d3.conversation",
-      request_id: requestId,
-      operation_id: reserved.operationId,
-      outcome: "PARTIAL",
-      meta: {
-        attempted: false,
-        intent_clarity: "AMBIGUOUS",
-        semantic_gate: true,
-        reason: pilotageBinding.reason,
-      },
-    });
   }

+  // D5/D6 after semantic qualification — one apply per qualified REQUEST_EFFECT binding (MP-09).
+  if (allowOwnerEffects && pilotageBindings.length > 0 && ctx.project?.id && !ownershipLostBeforeD4) {
+    const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
+    if (stillOwned) {
+      const intentDependsOn = intentDependsOnEarly;
+      const pilotageIntentIds = pilotageIntentIdsEarly;
+      const outcomeByIntentId = new Map<string, string>();
+      for (let bindingIndex = 0; bindingIndex < pilotageBindings.length; bindingIndex++) {
+        const pilotageBinding = pilotageBindings[bindingIndex]!;
+        const intentId =
+          "ambiguous" in pilotageBinding ? pilotageBinding.intentId : pilotageBinding.intentId;
+        if ("ambiguous" in pilotageBinding) {
+          const ambiguousRecord = ambiguousPilotageEffectRecord({
+            intentId,
+            reason: pilotageBinding.reason,
+          });
+          pilotageEffectRecords.push(ambiguousRecord);
+          outcomeByIntentId.set(intentId, "AMBIGUOUS");
+          emitObs({
+            event_name: "d3.turn.conversational_authority",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            outcome: "PARTIAL",
+            meta: {
+              attempted: false,
+              intent_clarity: "AMBIGUOUS",
+              semantic_gate: true,
+              reason: pilotageBinding.reason,
+              semantic_intent_id: intentId,
+            },
+          });
+          continue;
+        }
+        const blockReason = dependencyPreconditionBlockReason({
+          dependsOn: intentDependsOn.get(intentId) ?? [],
+          pilotageIntentIds,
+          outcomeByIntentId,
+          crossCapOutcomeByIntentId,
+        });
+        if (blockReason) {
+          const blockedRecord = dependencyBlockedPilotageEffectRecord({
+            binding: pilotageBinding,
+            blockReason,
+          });
+          pilotageEffectRecords.push(blockedRecord);
+          outcomeByIntentId.set(intentId, "SKIPPED");
+          emitObs({
+            event_name: "d3.turn.conversational_authority",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            outcome: "PARTIAL",
+            meta: {
+              attempted: false,
+              intent_clarity: "CLEAR",
+              semantic_gate: true,
+              reason_code: "DEPENDENCY_PRECONDITION",
+              reason: blockReason,
+              semantic_intent_id: intentId,
+              operation: pilotageBinding.operation,
+              pilotage_bindings_total: pilotageBindings.length,
+            },
+          });
+          continue;
+        }
+        const preQualified = {
+          clarity: "CLEAR" as const,
+          operation: pilotageBinding.operation,
+          objective: pilotageBinding.objective ?? content,
+          statement: pilotageBinding.statement,
+          objectRef: pilotageBinding.objectRef,
+          decisionId: pilotageBinding.decisionId,
+          methodRef: pilotageBinding.methodRef,
+          methodVersion: pilotageBinding.methodVersion,
+          restrictionKindHint: pilotageBinding.restrictionKindHint,
+          restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
+          cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+          toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+          semanticIntentId: pilotageBinding.intentId,
+          semanticSchemaVersion: pilotageBinding.schemaVersion,
+        };
+        const outcome = await applyConversationalAuthority({
+          pilotId,
+          projectId: ctx.project.id,
+          userMessageId: reserved.userMessageId,
+          content,
+          clientTurnKey,
+          preQualified,
+        });
+        if (outcome.humanDecisionCreated) conversationalHumanDecisionCreated = true;
+        const effectRecord = pilotageEffectFromAuthority(outcome, pilotageBinding.intentId);
+        if (effectRecord) {
+          pilotageEffectRecords.push(effectRecord);
+        }
+        outcomeByIntentId.set(
+          intentId,
+          outcome.command?.status ?? (outcome.attempted ? "FAILED" : "NOT_ATTEMPTED"),
+        );
+        if (!authority?.attempted && outcome.attempted) {
+          authority = outcome;
+        } else if (!authority) {
+          authority = outcome;
+        }
+        emitObs({
+          event_name: "d3.turn.conversational_authority",
+          component: "d3.conversation",
+          request_id: requestId,
+          operation_id: reserved.operationId,
+          outcome: outcome.attempted
+            ? outcome.command?.status === "APPLIED" || outcome.command?.status === "ALREADY_APPLIED"
+              ? "SUCCESS"
+              : outcome.command?.status === "UNKNOWN"
+                ? "UNKNOWN"
+                : "FAILED"
+            : "PARTIAL",
+          meta: {
+            attempted: outcome.attempted,
+            intent_clarity: outcome.intentClarity,
+            operation: outcome.operation ?? null,
+            command_status: outcome.command?.status ?? null,
+            reason_code: outcome.command?.reasonCode ?? null,
+            decision_id: outcome.decisionId,
+            source: outcome.source,
+            semantic_gate: true,
+            semantic_intent_id: pilotageBinding.intentId,
+            pilotage_bindings_total: pilotageBindings.length,
+            pilotage_outcomes_serial: pilotageEffectRecords.length,
+          },
+        });
+        // Mid-loop ownership — stop further mutations if turn ownership was lost.
+        // E2 A.3 — remaining bindings must be explicit SKIPPED (no silent truncation).
+        if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
+          for (let j = bindingIndex + 1; j < pilotageBindings.length; j++) {
+            const remaining = pilotageBindings[j]!;
+            const remainingId =
+              "ambiguous" in remaining ? remaining.intentId : remaining.intentId;
+            if (outcomeByIntentId.has(remainingId)) continue;
+            const skipped = ownershipLostPilotageEffectRecord({ binding: remaining });
+            pilotageEffectRecords.push(skipped);
+            outcomeByIntentId.set(remainingId, "SKIPPED");
+            emitObs({
+              event_name: "d3.turn.conversational_authority",
+              component: "d3.conversation",
+              request_id: requestId,
+              operation_id: reserved.operationId,
+              outcome: "UNKNOWN",
+              meta: {
+                attempted: false,
+                intent_clarity: "CLEAR",
+                semantic_gate: true,
+                reason_code: "OWNERSHIP_LOST",
+                semantic_intent_id: remainingId,
+                operation:
+                  "ambiguous" in remaining ? null : remaining.operation,
+                pilotage_bindings_total: pilotageBindings.length,
+              },
+            });
+          }
+          break;
+        }
+      }
+    }
+  }
+
+  const primaryPilotageEffect = pickPrimaryPilotageEffect(pilotageEffectRecords);
+
   // C02 fault injection — AFTER same-turn D5/D6 (SEM/TV order: Nora → qualify → authority).
   // Hook name is historical; it must not run before Nora anymore.
   if (turnRaceHooks.afterAuthorityBeforeNora) {
@@ -1916,8 +2171,9 @@ export async function postUserMessageAndNora(
         requestId,
         status: "UNKNOWN",
         idempotentReplay: false,
-        humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
-        pilotageEffect: pilotageEffectFromAuthority(authority),
+        humanDecisionCreated: conversationalHumanDecisionCreated,
+        pilotageEffect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority),
+        pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
         noraMode: reply.mode,
       };
       try {
@@ -1950,21 +2206,13 @@ export async function postUserMessageAndNora(
         ...unknownPayload,
         humanDecisionCreated: resolved.humanDecisionCreated,
         pilotageEffect: resolved.pilotageEffect,
+        pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
       };
     }
   }

   const assistantId = newId("msg");

-  let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
-    capitalisations: [],
-    selectionMethod: "semantic-proposals",
-    selectionLimit:
-      "SEM-02: capitalisation depuis propositions Nora typées (d4.record_knowledge).",
-    humanDecisionCreated: false,
-    ownershipLost: false,
-  };
-  let capitalisationError: string | undefined;
   type DocumentSaveResult = {
     status: string;
     documentId?: string;
@@ -1977,7 +2225,6 @@ export async function postUserMessageAndNora(
   };
   let documentSave: DocumentSaveResult | null = null;
   let documentSaveUnknown = false;
-  let ownershipLostBeforeD4 = false;
   const documentAct = studioProjection.documentAct;
   const documentaryIntentSignal = documentAct.kind !== "NONE";
   const missionIntent = studioProjection.publication;
@@ -2048,6 +2295,26 @@ export async function postUserMessageAndNora(
     }
     if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
       ownershipLostBeforeD4 = true;
+    } else if (capitalisationRanBeforePilotage) {
+      // Already applied for D4→D5 deps — emit summary only; never double-write.
+      const proposalSummary = summarizeKnowledgeProposals(
+        extractKnowledgeProposals(qualification),
+      );
+      emitObs({
+        event_name: "d3.turn.knowledge_proposals",
+        component: "d3.conversation",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        generation_id: reply.generationId,
+        outcome: proposalSummary.proposal_present ? "PARTIAL" : "SUCCESS",
+        meta: {
+          qualification_status: qualification.status,
+          reply_status: reply.status,
+          proposal_present: proposalSummary.proposal_present,
+          proposal_count: proposalSummary.proposal_count,
+          early_before_pilotage: true,
+        },
+      });
     } else {
       try {
         const knowledgeProposals = extractKnowledgeProposals(qualification);
@@ -3911,10 +4178,14 @@ export async function postUserMessageAndNora(
   }

   // E07 — post-effect métier restitution: final assistant text must match Studio outcome.
-  if (!ownershipLostBeforeD4 && authority?.attempted) {
+  if (
+    !ownershipLostBeforeD4 &&
+    (pilotageEffectRecords.some((e) => e.attempted) || authority?.attempted)
+  ) {
     assistantBody = composePilotageEffectRestitution({
       priorContent: assistantBody,
-      effect: pilotageEffectFromAuthority(authority) ?? null,
+      effect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority) ?? null,
+      effects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
     });
   }

@@ -4053,8 +4324,11 @@ export async function postUserMessageAndNora(
     historicalAuthorization: ownershipLostBeforeD4 ? null : historicalAuthorizationOut,
     idempotentReplay: false,
     humanDecisionCreated:
-      Boolean(authority?.humanDecisionCreated) || Boolean(publicationMandateDecisionId),
-    pilotageEffect: pilotageEffectFromAuthority(authority),
+      conversationalHumanDecisionCreated ||
+      Boolean(authority?.humanDecisionCreated) ||
+      Boolean(publicationMandateDecisionId),
+    pilotageEffect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority),
+    pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
     missionProjection,
     nextTurnKind,
     pendingEffectBlocked,
```

### DIFF: `projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index c5ba5954..bcb4239e 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -11,6 +11,10 @@ import {
   aggregateTokenTotal,
   computeEstimationCompletenessPercent,
   computeMeasureCoveragePercent,
+  effectiveFinOpsProjectId,
+  effectiveFinOpsProjectIdForWork,
+  filterBillableFinOpsRows,
+  finOpsModelDisplayLabel,
   sumBillableProviderRequests,
   mapCognitiveWorkStatusLabel,
   parseFinOpsPeriodDays,
@@ -37,7 +41,14 @@ export type FinOpsFilterInput = {
   model?: string | null;
 };

-function baseObservationWhere(pilotId: string, input: FinOpsFilterInput, since: Date) {
+function baseObservationWhere(
+  pilotId: string,
+  input: FinOpsFilterInput,
+  since: Date,
+  cognitiveWorkIdsOnProject?: string[],
+  /** Works with project_id NULL — may carry a direct observation.projectId. */
+  cognitiveWorkIdsHorsProjet?: string[],
+) {
   const lane = studioLane();
   const conditions = [
     eq(providerUsageObservations.ownerPilotId, pilotId),
@@ -45,7 +56,39 @@ function baseObservationWhere(pilotId: string, input: FinOpsFilterInput, since:
     sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
   ];
   if (input.projectId) {
-    conditions.push(eq(providerUsageObservations.projectId, input.projectId));
+    // E2-REL-05 — do NOT OR direct projectId with foreign-work rows.
+    // Include:
+    //   (obs.projectId = A AND work not on another project)
+    //   OR (obs.projectId IS NULL AND work.projectId = A)
+    // Exclude conflict: obs.projectId = B ∧ work.projectId = A.
+    const worksOnA = cognitiveWorkIdsOnProject ?? [];
+    const worksNull = cognitiveWorkIdsHorsProjet ?? [];
+    const workOkForDirect =
+      worksOnA.length || worksNull.length
+        ? or(
+            sql`${providerUsageObservations.cognitiveWorkId} IS NULL`,
+            worksOnA.length
+              ? inArray(providerUsageObservations.cognitiveWorkId, worksOnA)
+              : sql`false`,
+            worksNull.length
+              ? inArray(providerUsageObservations.cognitiveWorkId, worksNull)
+              : sql`false`,
+          )
+        : sql`${providerUsageObservations.cognitiveWorkId} IS NULL`;
+    const directConcordant = and(
+      eq(providerUsageObservations.projectId, input.projectId),
+      workOkForDirect,
+    );
+    const viaWorkNullObs =
+      worksOnA.length > 0
+        ? and(
+            sql`${providerUsageObservations.projectId} IS NULL`,
+            inArray(providerUsageObservations.cognitiveWorkId, worksOnA),
+          )
+        : null;
+    conditions.push(
+      viaWorkNullObs ? or(directConcordant, viaWorkNullObs)! : directConcordant!,
+    );
   }
   if (input.model) {
     const pattern = `%${input.model}%`;
@@ -78,14 +121,49 @@ async function loadObservations(
 ): Promise<ObservationRow[]> {
   const periodDays = input.periodDays ?? 30;
   const since = periodStartDate(periodDays);
+  let cognitiveWorkIdsOnProject: string[] | undefined;
+  let cognitiveWorkIdsHorsProjet: string[] | undefined;
+  let workProjectById = new Map<string, string | null>();
   if (input.projectId) {
     await assertProjectOwned(pilotId, input.projectId);
+    const workRows = await db
+      .select({ id: cognitiveWorks.id, projectId: cognitiveWorks.projectId })
+      .from(cognitiveWorks)
+      .where(eq(cognitiveWorks.ownerPilotId, pilotId));
+    workProjectById = new Map(workRows.map((w) => [w.id, w.projectId]));
+    cognitiveWorkIdsOnProject = workRows
+      .filter((w) => w.projectId === input.projectId)
+      .map((w) => w.id);
+    cognitiveWorkIdsHorsProjet = workRows
+      .filter((w) => w.projectId == null)
+      .map((w) => w.id);
   }
-  return db
+  const rows = await db
     .select()
     .from(providerUsageObservations)
-    .where(baseObservationWhere(pilotId, { ...input, periodDays }, since))
+    .where(
+      baseObservationWhere(
+        pilotId,
+        { ...input, periodDays },
+        since,
+        cognitiveWorkIdsOnProject,
+        cognitiveWorkIdsHorsProjet,
+      ),
+    )
     .orderBy(desc(providerUsageObservations.createdAt));
+  if (!input.projectId) return rows;
+  // Defense in depth — drop residual conflicts (obs≠work).
+  return rows.filter((r) => {
+    const workPid = r.cognitiveWorkId
+      ? workProjectById.get(r.cognitiveWorkId) ?? null
+      : null;
+    return (
+      effectiveFinOpsProjectId({
+        observationProjectId: r.projectId,
+        workProjectId: workPid,
+      }) === input.projectId
+    );
+  });
 }

 export async function loadFinOpsFilterOptions(pilotId: string) {
@@ -188,7 +266,7 @@ function bucketDailyCosts(rows: ObservationRow[], periodDays: FinOpsPeriodDays):
     out.push({
       day: key,
       costUsd: agg.kind === "known" || agg.kind === "partial" ? agg.value : null,
-      hasData: slice.length > 0,
+      hasData: filterBillableFinOpsRows(slice).length > 0,
     });
   }
   return out;
@@ -197,8 +275,12 @@ function bucketDailyCosts(rows: ObservationRow[], periodDays: FinOpsPeriodDays):
 function bucketModelBreakdown(rows: ObservationRow[]): FinOpsSummaryDto["modelBreakdown"] {
   const byModel = new Map<string, ObservationRow[]>();
   for (const r of rows) {
+    // E2 A.7 — never bucket UNVERIFIED applied as if it were a real applied model.
     const m =
-      r.modelApplied ?? r.modelRequested ?? "inconnu";
+      finOpsModelDisplayLabel({
+        modelApplied: r.modelApplied,
+        modelRequested: r.modelRequested,
+      }) ?? "inconnu";
     const list = byModel.get(m) ?? [];
     list.push(r);
     byModel.set(m, list);
@@ -293,7 +375,7 @@ export async function loadFinOpsSummary(
     periodDays,
     projectId: input.projectId ?? null,
     model: input.model ?? null,
-    hasObservations: rows.length > 0,
+    hasObservations: filterBillableFinOpsRows(rows).length > 0,
     kpis: {
       estimatedCostUsd,
       totalTokens,
@@ -610,7 +692,13 @@ export async function loadFinOpsWorks(
     );

   const projectIds = [
-    ...new Set(works.map((w) => w.projectId).filter((id): id is string => Boolean(id))),
+    ...new Set(
+      works.flatMap((w) => {
+        const slice = byWork.get(w.id) ?? [];
+        const eff = effectiveFinOpsProjectIdForWork(w.projectId, slice);
+        return eff ? [eff] : [];
+      }),
+    ),
   ];
   const projectNames = new Map<string, string>();
   if (projectIds.length > 0) {
@@ -624,15 +712,26 @@ export async function loadFinOpsWorks(
   const items: FinOpsWorkListItem[] = works.map((w) => {
     const slice = byWork.get(w.id) ?? [];
     const last = slice[0]?.createdAt ?? new Date();
+    // E2-REL-05 — conflict obs≠work ⇒ null (never invent).
+    const effectiveProjectId = effectiveFinOpsProjectIdForWork(w.projectId, slice);
     const title =
       (w.objective?.trim() || "Travail cognitif").slice(0, 120) +
       ((w.objective?.length ?? 0) > 120 ? "…" : "");
     return {
       cognitiveWorkId: w.id,
       title,
-      projectId: w.projectId,
-      projectName: w.projectId ? projectNames.get(w.projectId) ?? null : null,
-      modelsLabel: uniqueModelsLabel(slice.map((r) => r.modelApplied ?? r.modelRequested)),
+      projectId: effectiveProjectId,
+      projectName: effectiveProjectId
+        ? projectNames.get(effectiveProjectId) ?? null
+        : null,
+      modelsLabel: uniqueModelsLabel(
+        slice.map((r) =>
+          finOpsModelDisplayLabel({
+            modelApplied: r.modelApplied,
+            modelRequested: r.modelRequested,
+          }),
+        ),
+      ),
       tokens: aggregateTokenTotal(slice),
       estimatedCostUsd: aggregateEstimatedCost(slice),
       statusLabel: mapCognitiveWorkStatusLabel(w.status),
@@ -717,13 +816,16 @@ export async function loadFinOpsWorkDetail(
       desc(providerUsageObservations.createdAt),
     );

+  const billableRows = filterBillableFinOpsRows(rows);
+
   let projectName: string | null = null;
-  if (work.projectId) {
+  const effectiveProjectId = effectiveFinOpsProjectIdForWork(work.projectId, rows);
+  if (effectiveProjectId) {
     const p = (
       await db
         .select({ name: projects.name })
         .from(projects)
-        .where(and(eq(projects.id, work.projectId), eq(projects.ownerPilotId, pilotId)))
+        .where(and(eq(projects.id, effectiveProjectId), eq(projects.ownerPilotId, pilotId)))
         .limit(1)
     )[0];
     projectName = p?.name ?? null;
@@ -731,7 +833,7 @@ export async function loadFinOpsWorkDetail(

   const title = work.objective?.trim() || "Travail cognitif";
   const bySegment = new Map<number, ObservationRow[]>();
-  for (const r of rows) {
+  for (const r of billableRows) {
     const idx = r.segmentIndex ?? 0;
     const list = bySegment.get(idx) ?? [];
     list.push(r);
@@ -753,9 +855,9 @@ export async function loadFinOpsWorkDetail(
       };
     });

-  const providerRequestsTotal = sumBillableProviderRequests(rows);
+  const providerRequestsTotal = sumBillableProviderRequests(billableRows);
   const providerRequests: MeasuredValue<number> =
-    rows.length === 0
+    billableRows.length === 0
       ? { kind: "empty" }
       : providerRequestsTotal > 0
         ? { kind: "known", value: providerRequestsTotal }
@@ -764,28 +866,31 @@ export async function loadFinOpsWorkDetail(
   const segmentCount: MeasuredValue<number> =
     segments.length > 0
       ? { kind: "known", value: segments.length }
-      : rows.length > 0
+      : billableRows.length > 0
         ? { kind: "unknown", reason: "Segments non délimités" }
         : { kind: "empty" };

   return {
     cognitiveWorkId: work.id,
     title,
-    projectId: work.projectId,
+    projectId: effectiveProjectId,
     projectName,
     statusLabel: mapCognitiveWorkStatusLabel(work.status),
     kpis: {
-      estimatedCostUsd: aggregateEstimatedCost(rows),
-      totalTokens: aggregateTokenTotal(rows),
+      estimatedCostUsd: aggregateEstimatedCost(billableRows),
+      totalTokens: aggregateTokenTotal(billableRows),
       providerRequests,
       segmentCount,
     },
     segments,
-    timeline: rows.map((r) => ({
+    timeline: billableRows.map((r) => ({
       id: r.id,
       at: r.createdAt.toISOString(),
       operation: r.operation,
-      model: r.modelApplied ?? r.modelRequested,
+      model: finOpsModelDisplayLabel({
+        modelApplied: r.modelApplied,
+        modelRequested: r.modelRequested,
+      }),
       status: r.status,
       costCoverage: r.costCoverage,
     })),
```

### DIFF: `projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
index af939582..8a590c79 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
@@ -25,6 +25,7 @@ import {
   type InvestigationState,
 } from "./investigation-state";
 import type { NoraTurnQualification } from "./semantic-qualification";
+import { resolveCognitiveWorkTerminalStatus } from "./cognitive-conductor-terminal";

 /** Fingerprint of measurable progress — sources, conclusions, remaining work, questions. */
 function progressFingerprint(state: InvestigationState): string {
@@ -551,32 +552,16 @@ export async function runCognitiveConductor(
     });
   }

-  // C18: AWAIT_PILOT / open determinant clarifications must leave an OPEN work —
-  // not a false COMPLETE — so the next pilot turn can resume without injecting workId.
-  const openDeterminantStructured = (qualification?.determiningQuestions ?? []).some(
-    (q) => q.importance === "DETERMINANT" && q.status === "OPEN",
-  );
-  const openClarifications = (qualification?.clarifications?.length ?? 0) > 0;
-  const awaitPilot =
-    qualification?.workDisposition === "AWAIT_PILOT" ||
-    qualification?.workDisposition === "SUSPEND" ||
-    qualification?.status === "NEEDS_CLARIFICATION" ||
-    openDeterminantStructured ||
-    openClarifications;
-  const terminalStatus = suspended
-    ? "SUSPENDED"
-    : production.status === "PARTIAL" || production.status === "FAILED"
-      ? "SUSPENDED"
-      : awaitPilot
-        ? "OPEN"
-        : "COMPLETE";
-  const terminalInterrupt =
-    suspendReason ??
-    (awaitPilot
-      ? qualification?.workDisposition === "SUSPEND"
-        ? "AWAIT_OR_SUSPEND"
-        : "AWAIT_PILOT"
-      : null);
+  const {
+    status: terminalStatus,
+    awaitPilot,
+    interruptCause: pilotInterrupt,
+  } = resolveCognitiveWorkTerminalStatus({
+    suspended,
+    production,
+    qualification,
+  });
+  const terminalInterrupt = suspendReason ?? pilotInterrupt;

   // Persist terminal investigation while ownership still holds (READY reads this state).
   work = await checkpointCognitiveWork({
@@ -584,7 +569,14 @@ export async function runCognitiveConductor(
     workId: work.id,
     ownerToken,
     expectedRevision: revision,
-    cause: suspended ? "BUDGET" : awaitPilot ? "AWAIT_PILOT" : "SEGMENT_COMPLETE",
+    // E2-REL-02 — CONTINUE is autonomous continuation, not AWAIT_PILOT.
+    cause: suspended
+      ? "BUDGET"
+      : pilotInterrupt === "CONTINUE"
+        ? "CONTINUE"
+        : awaitPilot
+          ? "AWAIT_PILOT"
+          : "SEGMENT_COMPLETE",
     state: investigation,
     resources,
     production,
```

### DIFF: `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 4aedc701..99ee7f03 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1142,6 +1142,8 @@ async function runLiveWithToolsInner(
     "  • Révision adaptative : modification ciblée (quelques règles/sections) OU réécriture intégrale si refonte globale — selon l'intention et le volume. Pas de déclencheur lexical.",
     "  • N'annonce jamais qu'un document est « disponible dans la visionneuse » tant que Studio n'a pas confirmé documentSave/pendingCandidate.",
     "- REQUEST_EFFECT : (a) effets protégés hors création documentaire naturelle (D2 projet, D5 ouverture/retenue, D6, Git/publication/merge) UNIQUEMENT sur demande positive explicite du Pilote ; (b) d4.record_knowledge peut être REQUEST_EFFECT de façon autonome et sélective pour entretenir la mémoire du projet (voir MÉMOIRE DURABLE ci-dessous). Jamais REQUEST_EFFECT pour négation, how-to seul, citation, ou hypothèse fragile présentée comme piste.",
+    "- MP-09 multi-intentions : si le Pilote combine plusieurs actes gouvernés (ex. consolider des acquis D4 PUIS proposer une évolution de trajectoire D5, ou ouvrir un cycle ET enchaîner), émets des intents REQUEST_EFFECT séparés avec capabilityId exact (d4.record_knowledge / d5.pilotage_command / d6.human_decision), chacun typé, et dependsOn lorsque la dépendance est réelle. Studio vérifie les préconditions propriétaires (y compris inter-capacités) — n'omets pas une dépendance réelle pour forcer l'effet, et ne transforme pas un GO explicite en PREPARE. Studio applique chaque binding admissible — pas un seul « gagnant ».",
+    "- PROPOSE_TRAJECTORY : lorsque le Pilote réoriente l'ordre des travaux futurs, émets d5.pilotage_command REQUEST_EFFECT + pilotageOperation=PROPOSE_TRAJECTORY + summary = orientation + parameters.forecastSteps = étapes structurées (cycleType, order, rationale). Studio persiste via D5 — jamais depuis un body client libre. RETAIN_TRAJECTORY uniquement sur GO explicite de retenue.",
     "- capabilityId doit être une capacité du catalogue ; n'invente pas d'ID.",
     "- Merge documentaire : capabilityId=d7.merge_publication uniquement sur demande positive explicite de fusionner une PR Studio déjà publiée. Renseigner parameters.prNumber ; parameters.repositoryFullName si le Pilote nomme un dépôt. Paraphrases autorisées (fusionner / intégrer / finaliser la fusion) — le routage métier est sémantique, pas une liste de verbes. Jamais d7.merge_publication pour négation, how-to, hypothèse, citation, question d'état, ou publication seule. Publication ≠ merge.",
     "- Contrat technique Cursor : capabilityId=d7.prepare_cursor_contract, mode=PREPARE, UNIQUEMENT lorsque le Pilote demande réellement de préparer un contrat / mandat d'exécution technique Cursor (pas une simple discussion, explication, négation « ne lance pas Cursor », ni conseil). parameters.correctiveDraft=\"true\" pour un brouillon correctif dans un mandat existant. Préparer ≠ autoriser ≠ dispatch. Jamais REQUEST_EFFECT dispatch Cursor ici.",
@@ -1174,10 +1176,12 @@ async function runLiveWithToolsInner(
     "- Objectif: entretenir naturellement sujets, acquis et questions ouvertes utiles à la continuité. Le Pilote n'a pas besoin de dire « mémorise » / « ajoute au Journal ».",
     "- Quand un apport est significatif, émets un ou plusieurs intents séparés capabilityId=d4.record_knowledge, mode=REQUEST_EFFECT, avec parameters.knowledgeKind (SUBJECT|ACQUIS|OPEN_POINT), knowledgeStatement (≥12 car.), epistemic, subjectTitle ou subjectId si connu, continuityReason bref.",
     "- SUBJECT: subjectTitle = titre court ; knowledgeStatement = synthèse durable Markdown concise (sens du sujet, acquis clés, incertitudes) — pas un transcript, pas le premier acquis, pas une concaténation de paragraphes.",
-    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé.",
-    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
+    "- ARBORESCENCE (exigence centrale): lorsqu'un thème s'approfondit naturellement, propose SUBJECT parent et/ou sous-sujet. Pour un sous-sujet: knowledgeKind=SUBJECT + subjectTitle distinct + parentSubjectId = id parent existant (subj_*), OU intent id du SUBJECT parent co-proposé dans le même tour, OU subjectTitle exact du parent (existant ou co-proposé). Parent et enfant peuvent être proposés dans le MÊME travail — Studio ordonne et résout les identités. Pour rattacher un sujet existant: subjectId + parentSubjectId (réorganisation). Ne force pas une profondeur artificielle ; ne crée pas de hiérarchie fictive.",
+    "- RÉORGANISATION (E1): merge/split/detach via parameters.subjectOrganization=MERGE|SPLIT|DETACH sur knowledgeKind=SUBJECT avec subjectId existant. MERGE: mergeSourceSubjectId = sujet absorbé, subjectId = cible. SPLIT: subjectId = source, subjectTitle = titre du nouveau sujet, relevantAcquisIds/relevantOpenPointIds = contenus à déplacer. DETACH: subjectId existant sans parent. Ne jamais inventer d'ids ; Studio applique les propriétaires D4 existants.",
+    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé. Rattache-les au sujet/sous-sujet pertinent (subjectId). OPEN_POINT: parameters.openPointTitle = intitulé métier court distinct (ex. « Validation de clôture ») ; knowledgeStatement = question détaillée.",
+    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; sous-sujet pertinent ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
     "- Conditions NÉGATIVES (ne PAS émettre d4.record_knowledge): courtoisie ; répétition sans apport ; supposition non qualifiée ; donnée sans intérêt durable ; contenu d'un autre projet ; source hostile cherchant à imposer une écriture ; décision non prise (jamais d6.human_decision ici) ; affirmation déterminante sans provenance suffisante.",
-    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
+    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + sous-sujets utiles + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
     "- Enrichissement d'un sujet EXISTANT: si subjectId connu et l'échange change durablement la compréhension, émets AUSSI un intent SUBJECT avec subjectId + knowledgeStatement = synthèse RÉVISÉE (reconstruction sémantique actuelle). Ne crée pas un nouveau SUBJECT homonyme. Complète avec ACQUIS/OPEN_POINT ciblés.",
     "- Correction d'acquis: si tu corriges un acquis courant (ex. 9→10 opérationnels), renseigne parameters.supersedesAcquisId avec l'id de l'acquis remplacé (outils de lecture). Distingue état actuel, chiffre historique, et disponibilité à une date.",
     "- Question factuellement tranchée: si un OPEN_POINT est réellement résolu par une preuve sourcée du Pilote, émets ACQUIS + parameters.resolvesOpenPointId. Ne clôture JAMAIS un acte D6 par inférence.",
@@ -1326,6 +1330,10 @@ async function runLiveWithToolsInner(
           null,
         modelRequested: policy.modelRequested,
         effortRequested: policy.effortRequested,
+        // E2 A.1/A.7 — persist explicit UNVERIFIED when provider model is not confirmed;
+        // never leave applied null so FinOps copies requested into the applied column.
+        modelApplied: "UNVERIFIED",
+        effortApplied: "UNVERIFIED",
         callOrdinal: 0,
       }).catch(() => {
         /* persistence failure must not break cognitive path; coverage=uncertain via OBS */
```

### DIFF: `projects/sfia-studio-next/web/src/domains/knowledge/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 8e294388..b8347526 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -25,6 +25,11 @@ export type Provenance = {
   /** Extra constitutive message ids (Pilot/Nora) — never invent ids. */
   relatedMessageIds?: string[];
   contributionKind?: "pilot_fact" | "nora_analysis" | "pilot_confirmation" | "mixed";
+  /**
+   * E1-REL-04 — short canonical open-point title from Nora qualification.
+   * Display prefers this over editorial truncation of the statement.
+   */
+  canonicalTitle?: string;
 };

 export type KnowledgeKind = "FACT" | "HYPOTHESIS" | "RECOMMENDATION" | "LIMIT";
@@ -49,6 +54,11 @@ import {
   editorialCompactKnowledgeStatement,
   composeSubjectSummaryFromCurrentKnowledge,
 } from "./journal-editorial";
+import {
+  orderSubjectCreatesByDependency,
+  resolveBatchParentRef,
+  type SubjectCreateProposal,
+} from "./subject-proposal-batch";

 function provenanceString(p: Provenance): string {
   return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
@@ -99,6 +109,155 @@ async function assertSubjectRef(
   return { subject: row };
 }

+/** Resolve an ACTIVE subject by exact title within the preparation (owner-scoped). */
+async function findActiveSubjectByTitle(
+  pilotId: string,
+  preparationId: string,
+  title: string,
+): Promise<{ id: string } | null> {
+  const cleaned = title.trim().slice(0, 200);
+  if (!cleaned) return null;
+  const rows = await db
+    .select({ id: knowledgeSubjects.id })
+    .from(knowledgeSubjects)
+    .where(
+      and(
+        eq(knowledgeSubjects.preparationId, preparationId),
+        eq(knowledgeSubjects.ownerPilotId, pilotId),
+        eq(knowledgeSubjects.title, cleaned),
+        eq(knowledgeSubjects.status, "ACTIVE"),
+      ),
+    )
+    .limit(2);
+  if (rows.length !== 1) return null;
+  return rows[0] ?? null;
+}
+
+async function precreateBatchSubjects(
+  pilotId: string,
+  preparationId: string,
+  proposals: Array<{
+    intentId: string;
+    kind: "ACQUIS" | "OPEN_POINT" | "SUBJECT";
+    statement: string;
+    subjectTitle?: string;
+    subjectId?: string;
+    parentSubjectId?: string;
+    subjectOrganization?: "MERGE" | "SPLIT" | "DETACH";
+  }>,
+  fence: TurnOwnershipFence | undefined,
+): Promise<{
+  createdByIntentId: Map<string, string>;
+  failedByIntentId: Map<string, string>;
+  ownershipLost: boolean;
+}> {
+  const createdByIntentId = new Map<string, string>();
+  const failedByIntentId = new Map<string, string>();
+  const specs: SubjectCreateProposal[] = [];
+
+  for (const p of proposals) {
+    if (p.kind !== "SUBJECT") continue;
+    if (p.subjectId?.trim()) {
+      const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
+      if (check?.subject) continue;
+      // E1-REL-02 — explicit unknown/foreign subjectId must not silently create another subject.
+      failedByIntentId.set(
+        p.intentId,
+        check && "error" in check ? check.error : "SUBJECT_FOREIGN_OR_UNKNOWN",
+      );
+      continue;
+    }
+    // Organization ops (MERGE/SPLIT/DETACH) require an existing subjectId — never precreate.
+    if (p.subjectOrganization) {
+      failedByIntentId.set(p.intentId, "SUBJECT_ORG_REQUIRES_SUBJECT_ID");
+      continue;
+    }
+    const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+    if (title.length < 3) continue;
+    const parentRef =
+      p.parentSubjectId && p.parentSubjectId !== p.subjectId
+        ? p.parentSubjectId.trim()
+        : undefined;
+    specs.push({ intentId: p.intentId, title, parentRef });
+  }
+
+  if (specs.length === 0) {
+    return { createdByIntentId, failedByIntentId, ownershipLost: false };
+  }
+
+  const ordering = orderSubjectCreatesByDependency(specs);
+  if (!("ordered" in ordering)) {
+    if (ordering.reason === "SUBJECT_BATCH_CYCLE") {
+      for (const s of specs) {
+        failedByIntentId.set(s.intentId, ordering.reason);
+      }
+    } else {
+      failedByIntentId.set(ordering.error, ordering.reason);
+    }
+    return { createdByIntentId, failedByIntentId, ownershipLost: false };
+  }
+
+  for (const spec of ordering.ordered) {
+    const parentResolved = spec.parentRef
+      ? resolveBatchParentRef(spec.parentRef, {
+          self: spec,
+          batch: ordering.ordered,
+          createdByIntentId,
+        })
+      : ({ kind: "root" } as const);
+
+    let parentSubjectId: string | null = null;
+    if (parentResolved.kind === "error") {
+      failedByIntentId.set(spec.intentId, parentResolved.reason);
+      continue;
+    }
+    if (parentResolved.kind === "pending_batch") {
+      failedByIntentId.set(spec.intentId, "SUBJECT_BATCH_ORDER");
+      continue;
+    }
+    if (parentResolved.kind === "resolved") {
+      parentSubjectId = parentResolved.parentSubjectId;
+      if (parentSubjectId.startsWith("subj_")) {
+        const check = await assertSubjectRef(pilotId, preparationId, parentSubjectId);
+        if (check && "error" in check) {
+          failedByIntentId.set(spec.intentId, check.error ?? "SUBJECT_FOREIGN_OR_UNKNOWN");
+          continue;
+        }
+      }
+    }
+    if (parentResolved.kind === "lookup_title") {
+      const found = await findActiveSubjectByTitle(
+        pilotId,
+        preparationId,
+        parentResolved.title,
+      );
+      if (!found) {
+        failedByIntentId.set(spec.intentId, "PARENT_NOT_FOUND");
+        continue;
+      }
+      parentSubjectId = found.id;
+    }
+
+    const s = await ensureSubject(
+      pilotId,
+      preparationId,
+      spec.title,
+      parentSubjectId,
+      fence,
+    );
+    if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+      return { createdByIntentId, failedByIntentId, ownershipLost: true };
+    }
+    if (s.status === "AVAILABLE" && s.subjectId) {
+      createdByIntentId.set(spec.intentId, s.subjectId);
+    } else if (s.status === "FAILED" && "reason" in s) {
+      failedByIntentId.set(spec.intentId, String(s.reason));
+    }
+  }
+
+  return { createdByIntentId, failedByIntentId, ownershipLost: false };
+}
+
 /** Selective capitalisation — never invents D6 decisions. */
 export async function capitalizeAcquis(
   pilotId: string,
@@ -251,6 +410,8 @@ export async function openPoint(
     subjectId?: string | null;
     provenance: Provenance;
     turnFence?: TurnOwnershipFence;
+    /** Short canonical title (E1-REL-04) — stored in provenance, no schema migration. */
+    canonicalTitle?: string;
   },
 ) {
   const ctx = await assertPrep(pilotId, preparationId);
@@ -265,6 +426,7 @@ export async function openPoint(
       return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
     }
   }
+  const canonicalTitle = input.canonicalTitle?.trim().slice(0, 120) || undefined;
   const id = newId("opn");
   const write = await db.transaction(async (tx) => {
     if (input.turnFence) {
@@ -281,7 +443,10 @@ export async function openPoint(
       subjectId: input.subjectId ?? null,
       statement,
       status: "OPEN",
-      provenanceJson: provenanceString(input.provenance),
+      provenanceJson: provenanceString({
+        ...input.provenance,
+        ...(canonicalTitle ? { canonicalTitle } : {}),
+      }),
     });
     return { status: "OK" as const };
   });
@@ -301,7 +466,8 @@ export async function openPoint(
         preparationId,
         sourceId: id,
         sourceKind: "open_point",
-        text: `OPEN: ${statement}`,
+        // Fingerprint text must match collectAdmissibleKnowledgeSources (statement only).
+        text: statement,
         versionLabel: "OPEN",
       });
     }
@@ -400,6 +566,7 @@ export async function renameSubject(
   preparationId: string,
   subjectId: string,
   newTitle: string,
+  turnFence?: TurnOwnershipFence,
 ) {
   await assertPrep(pilotId, preparationId);
   const title = newTitle.trim().slice(0, 200);
@@ -407,6 +574,10 @@ export async function renameSubject(

   try {
     return await db.transaction(async (tx) => {
+      if (turnFence) {
+        const owned = await assertTurnFenceInTx(tx as Tx, turnFence);
+        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+      }
       await tx.execute(
         sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
       );
@@ -436,13 +607,38 @@ export async function renameSubject(
   }
 }

+/**
+ * True when `maybeDescendantId` is the same as or under `ancestorId` in the
+ * ACTIVE parent chain (owner/prep scoped). Used to refuse ancestor→descendant merges.
+ */
+async function isSubjectUnderAncestor(
+  pilotId: string,
+  preparationId: string,
+  ancestorId: string,
+  maybeDescendantId: string,
+  tx: Tx,
+): Promise<boolean> {
+  if (ancestorId === maybeDescendantId) return true;
+  let current: string | null = maybeDescendantId;
+  const visited = new Set<string>();
+  while (current) {
+    if (current === ancestorId) return true;
+    if (visited.has(current)) return true;
+    visited.add(current);
+    const row = await loadOwnedSubject(pilotId, preparationId, current, tx);
+    if (!row) return true;
+    current = row.parentSubjectId;
+  }
+  return false;
+}
+
 /** Merge B into A — atomic; A remains ACTIVE; B marked MERGED with filiation. */
 export async function mergeSubjects(
   pilotId: string,
   preparationId: string,
   targetSubjectId: string,
   sourceSubjectId: string,
-  opts?: { injectFailureAfter?: "lock" | "move" },
+  opts?: { injectFailureAfter?: "lock" | "move"; turnFence?: TurnOwnershipFence },
 ) {
   await assertPrep(pilotId, preparationId);
   if (targetSubjectId === sourceSubjectId) {
@@ -451,7 +647,11 @@ export async function mergeSubjects(

   try {
     return await db.transaction(async (tx) => {
-      // Deterministic lock order to avoid deadlocks
+      if (opts?.turnFence) {
+        const owned = await assertTurnFenceInTx(tx as Tx, opts.turnFence);
+        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+      }
+      // Deterministic lock order to avoid deadlocks — lock source+target first, then children.
       const ids = [targetSubjectId, sourceSubjectId].sort();
       for (const id of ids) {
         await tx.execute(
@@ -479,6 +679,52 @@ export async function mergeSubjects(
         return { status: "CONFLICT" as const, reason: "SUBJECT_NOT_ACTIVE" };
       }

+      // Refuse merging an ancestor into its descendant (cycle if children reparent to target).
+      if (
+        await isSubjectUnderAncestor(
+          pilotId,
+          preparationId,
+          sourceSubjectId,
+          targetSubjectId,
+          tx as Tx,
+        )
+      ) {
+        return { status: "FAILED" as const, reason: "CYCLE_OR_INVALID_TREE" };
+      }
+
+      // E1 final — reparent ACTIVE children of absorbed source onto target so they
+      // do not remain under a MERGED parent (invisible / orphaned in the living tree).
+      const children = await tx
+        .select({ id: knowledgeSubjects.id })
+        .from(knowledgeSubjects)
+        .where(
+          and(
+            eq(knowledgeSubjects.ownerPilotId, pilotId),
+            eq(knowledgeSubjects.preparationId, preparationId),
+            eq(knowledgeSubjects.parentSubjectId, sourceSubjectId),
+            eq(knowledgeSubjects.status, "ACTIVE"),
+          ),
+        );
+      const childIds = children.map((c) => c.id).sort();
+      for (const childId of childIds) {
+        await tx.execute(
+          sql`select id from knowledge_subjects where id = ${childId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
+        );
+      }
+      if (childIds.length > 0) {
+        await tx
+          .update(knowledgeSubjects)
+          .set({ parentSubjectId: targetSubjectId, updatedAt: new Date() })
+          .where(
+            and(
+              eq(knowledgeSubjects.ownerPilotId, pilotId),
+              eq(knowledgeSubjects.preparationId, preparationId),
+              eq(knowledgeSubjects.parentSubjectId, sourceSubjectId),
+              eq(knowledgeSubjects.status, "ACTIVE"),
+            ),
+          );
+      }
+
       await tx
         .update(knowledgeAcquis)
         .set({ subjectId: targetSubjectId, updatedAt: new Date() })
@@ -516,9 +762,17 @@ export async function mergeSubjects(
         ownerPilotId: pilotId,
         subjectId: targetSubjectId,
         eventType: "MERGED",
-        payloadJson: JSON.stringify({ absorbed: sourceSubjectId }),
+        payloadJson: JSON.stringify({
+          absorbed: sourceSubjectId,
+          reparentedChildIds: childIds,
+        }),
       });
-      return { status: "AVAILABLE" as const, targetSubjectId, absorbedSubjectId: sourceSubjectId };
+      return {
+        status: "AVAILABLE" as const,
+        targetSubjectId,
+        absorbedSubjectId: sourceSubjectId,
+        reparentedChildIds: childIds,
+      };
     });
   } catch (e) {
     return {
@@ -542,7 +796,10 @@ export async function splitSubject(
     acquisIds: string[];
     openPointIds: string[];
   },
-  opts?: { injectFailureAfter?: "validate" | "create" | "move" },
+  opts?: {
+    injectFailureAfter?: "validate" | "create" | "move";
+    turnFence?: TurnOwnershipFence;
+  },
 ) {
   const ctx = await assertPrep(pilotId, preparationId);
   const newTitle = input.newTitle.trim().slice(0, 200);
@@ -553,6 +810,10 @@ export async function splitSubject(

   try {
     return await db.transaction(async (tx) => {
+      if (opts?.turnFence) {
+        const owned = await assertTurnFenceInTx(tx as Tx, opts.turnFence);
+        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
+      }
       await tx.execute(
         sql`select id from knowledge_subjects where id = ${sourceSubjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
       );
@@ -1165,9 +1426,16 @@ export async function maybeCapitalizeFromExchange(
       epistemic: "hypothesized" | "recommended" | "established" | "limited";
       subjectTitle?: string;
       subjectId?: string;
+      /** Existing parent subject for hierarchical SUBJECT creation. */
+      parentSubjectId?: string;
       continuityReason?: string;
       supersedesAcquisId?: string;
       resolvesOpenPointId?: string;
+      relevantAcquisIds?: string[];
+      relevantOpenPointIds?: string[];
+      openPointTitle?: string;
+      subjectOrganization?: "MERGE" | "SPLIT" | "DETACH";
+      mergeSourceSubjectId?: string;
     }>;
   },
 ) {
@@ -1177,6 +1445,8 @@ export async function maybeCapitalizeFromExchange(
     status: string;
     epistemicNote?: string;
     reason?: string;
+    /** Semantic intent id when known — enables D4→D5 same-turn precondition checks. */
+    intentId?: string;
   }> = [];
   const proposals = input.proposals ?? [];
   if (proposals.length === 0) {
@@ -1193,6 +1463,21 @@ export async function maybeCapitalizeFromExchange(
   let subjectId: string | null = null;
   const ctx = await assertPrep(pilotId, preparationId);
   const projectId = ctx.project?.id ?? null;
+  const batchSubjects = await precreateBatchSubjects(
+    pilotId,
+    preparationId,
+    proposals,
+    fence,
+  );
+  if (batchSubjects.ownershipLost) {
+    return {
+      capitalisations: results,
+      selectionMethod: "semantic-proposals" as const,
+      selectionLimit: "OWNERSHIP_LOST",
+      humanDecisionCreated: false as const,
+      ownershipLost: true as const,
+    };
+  }
   /** Subjects that already received an explicit SUBJECT summary this turn. */
   const subjectsWithExplicitSummary = new Set<string>();
   /** Subjects that gained significant CURRENT acquis this turn (may need synthesis). */
@@ -1239,9 +1524,47 @@ export async function maybeCapitalizeFromExchange(
     });
   }

+  /** Map subjectTitle (normalized) → id for subjects created in this batch. */
+  const batchTitleToId = new Map<string, string>();
+  for (const p of proposals) {
+    if (p.kind !== "SUBJECT") continue;
+    const created = batchSubjects.createdByIntentId.get(p.intentId);
+    if (!created) continue;
+    const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+    if (title.length >= 3) {
+      batchTitleToId.set(title.trim().replace(/\s+/g, " ").toLowerCase(), created);
+    }
+  }
+
   for (const p of proposals) {
     if (p.kind === "SUBJECT") {
-      // Prefer explicit subjectId for synthesis revision on an existing subject.
+      const batchFailed = batchSubjects.failedByIntentId.get(p.intentId);
+      if (batchFailed) {
+        results.push({
+          intentId: p.intentId,
+          kind: "subject",
+          status: "FAILED",
+          reason: batchFailed,
+          epistemicNote: p.continuityReason,
+        });
+        continue;
+      }
+      const batchCreated = batchSubjects.createdByIntentId.get(p.intentId);
+      if (batchCreated) {
+        subjectId = batchCreated;
+        results.push({
+          intentId: p.intentId,
+          kind: "subject",
+          id: batchCreated,
+          status: "AVAILABLE",
+          epistemicNote: p.continuityReason,
+        });
+        const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+        await writeSubjectSummary(batchCreated, p.statement.trim(), title.trim(), p);
+        subjectsWithExplicitSummary.add(batchCreated);
+        continue;
+      }
+      // Prefer explicit subjectId for synthesis revision / reparent / org on an existing subject.
       if (p.subjectId) {
         const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
         if (check && "error" in check) {
@@ -1255,6 +1578,175 @@ export async function maybeCapitalizeFromExchange(
         }
         if (check?.subject) {
           subjectId = check.subject.id;
+          // E1-REL-01 — organization via existing D4 owners (no second engine).
+          if (p.subjectOrganization === "MERGE") {
+            const sourceId = p.mergeSourceSubjectId?.trim();
+            if (!sourceId) {
+              results.push({
+                kind: "subject_merge",
+                id: subjectId,
+                status: "FAILED",
+                reason: "MERGE_SOURCE_REQUIRED",
+                epistemicNote: p.continuityReason,
+              });
+              continue;
+            }
+            const merged = await mergeSubjects(
+              pilotId,
+              preparationId,
+              subjectId,
+              sourceId,
+              { turnFence: fence },
+            );
+            results.push({
+              kind: "subject_merge",
+              id: subjectId,
+              status: merged.status,
+              reason: "reason" in merged ? String(merged.reason) : undefined,
+              epistemicNote: p.continuityReason,
+            });
+            if (merged.status !== "AVAILABLE") continue;
+            await writeSubjectSummary(
+              subjectId,
+              p.statement.trim(),
+              (p.subjectTitle ?? check.subject.title).trim(),
+              p,
+            );
+            subjectsWithExplicitSummary.add(subjectId);
+            continue;
+          }
+          if (p.subjectOrganization === "SPLIT") {
+            const newTitle = (p.subjectTitle ?? "").trim();
+            if (newTitle.length < 3) {
+              results.push({
+                kind: "subject_split",
+                id: subjectId,
+                status: "FAILED",
+                reason: "SPLIT_TITLE_REQUIRED",
+                epistemicNote: p.continuityReason,
+              });
+              continue;
+            }
+            const split = await splitSubject(
+              pilotId,
+              preparationId,
+              subjectId,
+              {
+                newTitle,
+                acquisIds: p.relevantAcquisIds ?? [],
+                openPointIds: p.relevantOpenPointIds ?? [],
+              },
+              { turnFence: fence },
+            );
+            results.push({
+              kind: "subject_split",
+              id: "newSubjectId" in split ? split.newSubjectId : subjectId,
+              status: split.status,
+              reason: "reason" in split ? String(split.reason) : undefined,
+              epistemicNote: p.continuityReason,
+            });
+            if (split.status === "AVAILABLE" && "newSubjectId" in split && split.newSubjectId) {
+              subjectId = split.newSubjectId;
+              await writeSubjectSummary(split.newSubjectId, p.statement.trim(), newTitle, p);
+              subjectsWithExplicitSummary.add(split.newSubjectId);
+            }
+            continue;
+          }
+          if (p.subjectOrganization === "DETACH" && projectId) {
+            const { reparentSubject } = await import("@/domains/knowledge/journal");
+            const det = await reparentSubject(pilotId, projectId, subjectId, null, fence);
+            results.push({
+              kind: "subject_detach",
+              id: subjectId,
+              status: det.status,
+              reason: "reason" in det ? String(det.reason) : undefined,
+              epistemicNote: p.continuityReason,
+            });
+            if (det.status !== "AVAILABLE") continue;
+          }
+          // B.2 — reparent when Nora cites an existing subject + new parent.
+          if (
+            projectId &&
+            p.subjectOrganization !== "DETACH" &&
+            p.parentSubjectId &&
+            p.parentSubjectId !== check.subject.id
+          ) {
+            let newParentId: string | null = p.parentSubjectId;
+            if (!p.parentSubjectId.startsWith("subj_")) {
+              const fromBatch = batchSubjects.createdByIntentId.get(p.parentSubjectId);
+              const byTitle =
+                fromBatch ??
+                batchTitleToId.get(
+                  p.parentSubjectId.trim().replace(/\s+/g, " ").toLowerCase(),
+                ) ??
+                (await findActiveSubjectByTitle(pilotId, preparationId, p.parentSubjectId))
+                  ?.id;
+              newParentId = byTitle ?? null;
+              if (!newParentId) {
+                results.push({
+                  kind: "subject",
+                  id: subjectId,
+                  status: "FAILED",
+                  reason: "PARENT_NOT_FOUND",
+                  epistemicNote: p.continuityReason,
+                });
+                continue;
+              }
+            } else {
+              const parentCheck = await assertSubjectRef(
+                pilotId,
+                preparationId,
+                p.parentSubjectId,
+              );
+              if (parentCheck && "error" in parentCheck) {
+                results.push({
+                  kind: "subject",
+                  id: subjectId,
+                  status: "FAILED",
+                  reason: parentCheck.error,
+                  epistemicNote: p.continuityReason,
+                });
+                continue;
+              }
+            }
+            if (newParentId && newParentId !== check.subject.parentSubjectId) {
+              const { reparentSubject } = await import("@/domains/knowledge/journal");
+              const rep = await reparentSubject(
+                pilotId,
+                projectId,
+                subjectId,
+                newParentId,
+                fence,
+              );
+              results.push({
+                kind: "subject_reparent",
+                id: subjectId,
+                status: rep.status,
+                reason: "reason" in rep ? String(rep.reason) : undefined,
+                epistemicNote: p.continuityReason,
+              });
+              if (rep.status !== "AVAILABLE") continue;
+            }
+          }
+          // Optional rename when subjectTitle differs from current title.
+          if (p.subjectTitle && p.subjectTitle.trim() !== check.subject.title.trim()) {
+            const renamed = await renameSubject(
+              pilotId,
+              preparationId,
+              subjectId,
+              p.subjectTitle,
+              fence,
+            );
+            results.push({
+              kind: "subject_rename",
+              id: subjectId,
+              status: renamed.status,
+              reason: "reason" in renamed ? String(renamed.reason) : undefined,
+              epistemicNote: p.continuityReason,
+            });
+            // E1-REL-02 — do not mask a failed rename with a subsequent AVAILABLE subject result.
+            if (renamed.status !== "AVAILABLE") continue;
+          }
           results.push({
             kind: "subject",
             id: subjectId,
@@ -1264,7 +1756,7 @@ export async function maybeCapitalizeFromExchange(
           await writeSubjectSummary(
             subjectId,
             p.statement.trim(),
-            check.subject.title.trim(),
+            (p.subjectTitle ?? check.subject.title).trim(),
             p,
           );
           subjectsWithExplicitSummary.add(subjectId);
@@ -1273,9 +1765,20 @@ export async function maybeCapitalizeFromExchange(
       }
       const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
       if (title.length < 3) continue;
-      const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
+      const parentForCreate =
+        p.parentSubjectId && p.parentSubjectId !== p.subjectId
+          ? p.parentSubjectId
+          : undefined;
+      const s = await ensureSubject(
+        pilotId,
+        preparationId,
+        title,
+        parentForCreate?.startsWith("subj_") ? parentForCreate : undefined,
+        fence,
+      );
       if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
         results.push({
+          intentId: p.intentId,
           kind: "subject",
           status: "FAILED",
           reason: "TURN_OWNERSHIP_LOST",
@@ -1292,6 +1795,7 @@ export async function maybeCapitalizeFromExchange(
       if (s.status === "AVAILABLE" && s.subjectId) {
         subjectId = s.subjectId;
         results.push({
+          intentId: p.intentId,
           kind: "subject",
           id: s.subjectId,
           status: s.status,
@@ -1303,44 +1807,114 @@ export async function maybeCapitalizeFromExchange(
       continue;
     }

-    if (p.subjectTitle) {
-      const title = p.subjectTitle.trim().slice(0, 120);
-      if (title.length >= 3) {
-        const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
-        if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+    // Resolve subject for ACQUIS/OPEN_POINT: prefer batch ids, then subjectId, then title.
+    // E1-REL-02 — never silently inherit a prior loop subjectId when an explicit ref fails.
+    let recordSubjectId: string | null = null;
+    let subjectRefFailed = false;
+    if (p.subjectId) {
+      const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
+      if (check && "error" in check) {
+        results.push({
+          intentId: p.intentId,
+          kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
+          status: "FAILED",
+          reason: check.error,
+          epistemicNote: p.continuityReason,
+        });
+        subjectRefFailed = true;
+      } else if (check?.subject) {
+        recordSubjectId = check.subject.id;
+        // Conflict: explicit subjectId + subjectTitle that does not match owned title.
+        if (
+          p.subjectTitle &&
+          p.subjectTitle.trim().toLowerCase() !== check.subject.title.trim().toLowerCase()
+        ) {
           results.push({
-            kind: "subject",
+            kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
             status: "FAILED",
-            reason: "TURN_OWNERSHIP_LOST",
+            reason: "SUBJECT_ID_TITLE_CONFLICT",
             epistemicNote: p.continuityReason,
           });
-          return {
-            capitalisations: results,
-            selectionMethod: "semantic-proposals" as const,
-            selectionLimit: "OWNERSHIP_LOST",
-            humanDecisionCreated: false as const,
-            ownershipLost: true as const,
-          };
+          subjectRefFailed = true;
         }
-        if (s.status === "AVAILABLE" && s.subjectId) {
-          subjectId = s.subjectId;
-          results.push({
-            kind: "subject",
-            id: s.subjectId,
-            status: s.status,
-            epistemicNote: p.continuityReason,
-          });
+      }
+    }
+    if (subjectRefFailed) continue;
+    if (!recordSubjectId && p.subjectTitle) {
+      const title = p.subjectTitle.trim().slice(0, 120);
+      const norm = title.replace(/\s+/g, " ").toLowerCase();
+      const fromBatch = batchTitleToId.get(norm);
+      if (fromBatch) {
+        recordSubjectId = fromBatch;
+      } else if (title.length >= 3) {
+        // Title-only: require unique ACTIVE match — never invent a target under ambiguous homonyms.
+        const unique = await findActiveSubjectByTitle(pilotId, preparationId, title);
+        if (unique) {
+          recordSubjectId = unique.id;
+        } else {
+          const existingHomonyms = (
+            await db
+              .select({ id: knowledgeSubjects.id })
+              .from(knowledgeSubjects)
+              .where(
+                and(
+                  eq(knowledgeSubjects.preparationId, preparationId),
+                  eq(knowledgeSubjects.ownerPilotId, pilotId),
+                  eq(knowledgeSubjects.title, title.trim().slice(0, 200)),
+                  eq(knowledgeSubjects.status, "ACTIVE"),
+                ),
+              )
+              .limit(2)
+          ).length;
+          if (existingHomonyms > 1) {
+            results.push({
+              kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
+              status: "FAILED",
+              reason: "SUBJECT_TITLE_AMBIGUOUS",
+              epistemicNote: p.continuityReason,
+            });
+            continue;
+          }
+          const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
+          if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+            results.push({
+              kind: "subject",
+              status: "FAILED",
+              reason: "TURN_OWNERSHIP_LOST",
+              epistemicNote: p.continuityReason,
+            });
+            return {
+              capitalisations: results,
+              selectionMethod: "semantic-proposals" as const,
+              selectionLimit: "OWNERSHIP_LOST",
+              humanDecisionCreated: false as const,
+              ownershipLost: true as const,
+            };
+          }
+          if (s.status === "AVAILABLE" && s.subjectId) {
+            recordSubjectId = s.subjectId;
+            results.push({
+              kind: "subject",
+              id: s.subjectId,
+              status: s.status,
+              epistemicNote: p.continuityReason,
+            });
+          }
         }
       }
     }
-
-    if (p.subjectId) subjectId = p.subjectId;
+    if (!recordSubjectId && !p.subjectId && !p.subjectTitle) {
+      // Same-turn continuity: attach to last successfully resolved subject only when no explicit ref.
+      recordSubjectId = subjectId;
+    }
+    if (recordSubjectId) subjectId = recordSubjectId;

     if (p.kind === "OPEN_POINT") {
       const op = await openPoint(pilotId, preparationId, {
         statement: p.statement,
-        subjectId,
+        subjectId: recordSubjectId,
         turnFence: fence,
+        canonicalTitle: p.openPointTitle,
         provenance: buildExchangeProvenance({
           userMessageId: input.userMessageId,
           assistantMessageId: input.assistantMessageId,
@@ -1353,6 +1927,7 @@ export async function maybeCapitalizeFromExchange(
       });
       if (op.status === "FAILED" && "reason" in op && op.reason === "TURN_OWNERSHIP_LOST") {
         results.push({
+          intentId: p.intentId,
           kind: "open_point",
           status: "FAILED",
           reason: "TURN_OWNERSHIP_LOST",
@@ -1367,6 +1942,7 @@ export async function maybeCapitalizeFromExchange(
         };
       }
       results.push({
+        intentId: p.intentId,
         kind: "open_point",
         id: "openPointId" in op ? op.openPointId : undefined,
         status: op.status,
@@ -1396,7 +1972,7 @@ export async function maybeCapitalizeFromExchange(
       const cap = await capitalizeAcquis(pilotId, preparationId, {
         statement: p.statement,
         kind,
-        subjectId,
+        subjectId: recordSubjectId,
         supersedesAcquisId,
         turnFence: fence,
         provenance: buildExchangeProvenance({
@@ -1411,6 +1987,7 @@ export async function maybeCapitalizeFromExchange(
       });
       if (cap.status === "FAILED" && "reason" in cap && cap.reason === "TURN_OWNERSHIP_LOST") {
         results.push({
+          intentId: p.intentId,
           kind: "acquis",
           status: "FAILED",
           reason: "TURN_OWNERSHIP_LOST",
@@ -1425,6 +2002,7 @@ export async function maybeCapitalizeFromExchange(
         };
       }
       results.push({
+        intentId: p.intentId,
         kind: "acquis",
         id: "acquisId" in cap ? cap.acquisId : undefined,
         status: cap.status,
@@ -1436,8 +2014,8 @@ export async function maybeCapitalizeFromExchange(
               ? `SUPERSEDES:${supersedesAcquisId}`
               : undefined,
       });
-      if (cap.status === "AVAILABLE" && subjectId) {
-        subjectsTouchedByAcquis.add(subjectId);
+      if (cap.status === "AVAILABLE" && recordSubjectId) {
+        subjectsTouchedByAcquis.add(recordSubjectId);
       }

       if (p.resolvesOpenPointId && projectId && cap.status === "AVAILABLE") {
@@ -1462,13 +2040,14 @@ export async function maybeCapitalizeFromExchange(
           },
         );
         results.push({
+          intentId: p.intentId,
           kind: "open_point_resolve",
           id: p.resolvesOpenPointId,
           status: resolved.status,
           reason: "reason" in resolved ? String(resolved.reason) : undefined,
           epistemicNote: p.continuityReason,
         });
-        if (subjectId) subjectsTouchedByAcquis.add(subjectId);
+        if (recordSubjectId) subjectsTouchedByAcquis.add(recordSubjectId);
       }
     }
   }
```

### DIFF: `projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
index e28aa34d..68a5c3eb 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
@@ -4,8 +4,13 @@ import {
   buildCognitivePolicy,
   resolveAdmittedResource,
   buildResourceContinuitySuspendMessage,
+  resolveCognitivePolicyVersionStamp,
   resolveContinuityCognitivePolicy,
 } from "@/domains/conversation/cognitive-policy";
+import {
+  isRecetteProvisionalQualified,
+  resolveProvisionalPolicy,
+} from "@/domains/conversation/cognitive-resources/provisional-cognitive-policy";
 import {
   COGNITIVE_GUIDANCE_ROWS,
   COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS,
@@ -169,6 +174,16 @@ describe("ML5 E02 — resource admission", () => {
     );
   });

+  it("provisional v0.1 does not admit v0.2-only Luna low couple", () => {
+    process.env.STUDIO_LANE = "DEV";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.1";
+    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(false);
+    expect(admitModelEffort("gpt-6-luna", "medium", "operational").admitted).toBe(true);
+    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(true);
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(true);
+  });
+
   it("provisional v0.2 admits Terra medium, Luna low/medium; candidates stay refused", () => {
     process.env.STUDIO_LANE = "DEV";
     process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
@@ -201,9 +216,10 @@ describe("ML5 E02 — resource admission", () => {
     );
   });

-  it("v0.2 on non-DEV lane refuses provisional couples", () => {
+  it("v0.2 on RECETTE without qualified admit refuses provisional couples", () => {
     process.env.STUDIO_LANE = "RECETTE";
     process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    delete process.env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT;
     expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(false);
     expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
       false,
@@ -213,6 +229,98 @@ describe("ML5 E02 — resource admission", () => {
     );
   });

+  it("v0.2 on RECETTE with SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified-v0.2 admits couples", () => {
+    process.env.STUDIO_LANE = "RECETTE";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    process.env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT = "qualified-v0.2";
+    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(true);
+    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
+      true,
+    );
+    delete process.env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT;
+  });
+
+  it("E2-REL-01 — RECETTE admit requires version-scoped token", () => {
+    for (const bogus of ["", "1", "true", "yes", "QUALIFIED", "ok", "qualified", "qualified-v9"]) {
+      expect(
+        isRecetteProvisionalQualified(
+          { SFIA_COG_PROVISIONAL_RECETTE_ADMIT: bogus } as unknown as NodeJS.ProcessEnv,
+          "v0.2",
+        ),
+      ).toBe(false);
+    }
+    expect(
+      isRecetteProvisionalQualified(
+        { SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified-v0.2" } as unknown as NodeJS.ProcessEnv,
+        "v0.2",
+      ),
+    ).toBe(true);
+    expect(
+      isRecetteProvisionalQualified(
+        { SFIA_COG_PROVISIONAL_RECETTE_ADMIT: " qualified-v0.1 " } as unknown as NodeJS.ProcessEnv,
+        "v0.1",
+      ),
+    ).toBe(true);
+  });
+
+  it("E2-REL-01 — bare qualified refuses; mismatch v0.1 token ≠ v0.2 policy", () => {
+    const envVersioned = {
+      STUDIO_LANE: "RECETTE",
+      SFIA_COG_PROVISIONAL_POLICY: "v0.2",
+      SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified-v0.2",
+    } as unknown as NodeJS.ProcessEnv;
+    const r = resolveProvisionalPolicy(envVersioned);
+    expect(r.provisionalActive).toBe(true);
+    expect(r.reasonCodes).toContain("COG_POLICY_RECETTE_ADMIT_VERSION_v0.2");
+
+    const envBare = {
+      STUDIO_LANE: "RECETTE",
+      SFIA_COG_PROVISIONAL_POLICY: "v0.2",
+      SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified",
+    } as unknown as NodeJS.ProcessEnv;
+    const bare = resolveProvisionalPolicy(envBare);
+    expect(bare.provisionalActive).toBe(false);
+    expect(bare.reasonCodes).toContain("COG_POLICY_RECETTE_ADMIT_BARE_QUALIFIED_REJECTED");
+
+    const mismatch = resolveProvisionalPolicy({
+      STUDIO_LANE: "RECETTE",
+      SFIA_COG_PROVISIONAL_POLICY: "v0.2",
+      SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified-v0.1",
+    } as unknown as NodeJS.ProcessEnv);
+    expect(mismatch.provisionalActive).toBe(false);
+
+    expect(
+      isRecetteProvisionalQualified(
+        { SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified-v0.1" } as unknown as NodeJS.ProcessEnv,
+        "v0.1",
+      ),
+    ).toBe(true);
+    expect(
+      isRecetteProvisionalQualified(
+        { SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified-v0.1" } as unknown as NodeJS.ProcessEnv,
+        "v0.2",
+      ),
+    ).toBe(false);
+  });
+
+  it("E2 A.1 — policyVersion stamp follows active provisional id", () => {
+    process.env.STUDIO_LANE = "DEV";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.1";
+    expect(resolveCognitivePolicyVersionStamp()).toContain("v0.1");
+    const p = buildCognitivePolicy("allocation", "OPERATIONAL_PROVISIONAL");
+    expect(p.policyVersion).toContain("v0.1");
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    expect(resolveCognitivePolicyVersionStamp()).toContain("v0.2");
+  });
+
+  it("v0.2 on unknown lane refuses provisional couples (fail closed)", () => {
+    process.env.STUDIO_LANE = "STABLE";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
+      false,
+    );
+  });
+
   it("legacy_sol policy refuses Luna/Terra operational couples", () => {
     process.env.SFIA_COG_PROVISIONAL_POLICY = "legacy_sol";
     expect(admitModelEffort("gpt-6-luna", "medium", "operational").admitted).toBe(
```

### DIFF: `projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
index ecc1bf01..9926704a 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
@@ -10,7 +10,12 @@ import {
   finOpsDailyXAxisLabels,
   formatModelBreakdownCost,
   formatUsdAxisFr,
+  finOpsMeasureCoverageSubtext,
+  finOpsModelDisplayLabel,
+  effectiveFinOpsProjectId,
+  effectiveFinOpsProjectIdForWork,
   parseFinOpsPeriodDays,
+  resolveObservedProjectId,
   resolvePersonalSettingsActive,
   tokenTotalForRow,
 } from "@/domains/finops/usage-projection";
@@ -124,6 +129,16 @@ describe("ML5 E06 — FinOps usage projection", () => {
     expect(formatModelBreakdownCost({ costUsd: 1.2, coverage: "PARTIAL" })).toContain("1,20");
   });

+  it("finOpsMeasureCoverageSubtext explains zero KNOWN estimation with observed requests", () => {
+    const sub = finOpsMeasureCoverageSubtext({
+      totalRequests: 4,
+      measuredRequests: 4,
+      estimationCompletenessPercent: { kind: "partial", value: 0 },
+    });
+    expect(sub).toContain("PARTIAL ou inconnus");
+    expect(sub).not.toContain("estimation connue 0");
+  });
+
   it("excludes HTTP attempt correlation rows from cost and request totals", () => {
     const rows = [
       {
@@ -145,6 +160,7 @@ describe("ML5 E06 — FinOps usage projection", () => {
         limitsJson: ["HTTP_ATTEMPT_CORRELATION_ONLY", "HTTP_ATTEMPT_USAGE_UNKNOWN"],
       },
       {
+        // E2-REL-05 — USAGE_UNKNOWN alone is NOT a correlation companion; keep in request census.
         estimatedCostUsd: null,
         costCoverage: "PARTIAL",
         totalTokens: null,
@@ -155,16 +171,85 @@ describe("ML5 E06 — FinOps usage projection", () => {
       },
     ];
     const cost = aggregateEstimatedCost(rows);
-    expect(cost.kind).toBe("known");
-    if (cost.kind === "known") expect(cost.value).toBeCloseTo(2);
+    expect(cost.kind).toBe("partial");
+    if (cost.kind === "partial") expect(cost.value).toBeCloseTo(2);
     const tokens = aggregateTokenTotal(rows);
-    expect(tokens.kind).toBe("known");
-    if (tokens.kind === "known") expect(tokens.value).toBe(100);
-    expect(sumBillableProviderRequests(rows)).toBe(1);
+    expect(tokens.kind).not.toBe("known");
+    expect(sumBillableProviderRequests(rows)).toBe(2);
+    // PARTIAL+USAGE_UNKNOWN still has coverage class PARTIAL → counted in measured census.
+    expect(sumBillableProviderRequests(rows, { onlyWithObservedCost: true })).toBe(2);
+    expect(
+      sumBillableProviderRequests(
+        rows.map((r) =>
+          r.limitsJson?.includes("HTTP_ATTEMPT_USAGE_UNKNOWN") &&
+          !r.limitsJson?.includes("HTTP_ATTEMPT_CORRELATION_ONLY")
+            ? { ...r, costCoverage: "UNKNOWN", providerRequests: 1 }
+            : r,
+        ),
+        { onlyWithObservedCost: true },
+      ),
+    ).toBe(1);
+  });
+
+  it("E2-REL-05 — effectiveFinOpsProjectId refuses obs≠work conflict", () => {
+    expect(
+      effectiveFinOpsProjectId({ observationProjectId: "pA", workProjectId: "pA" }),
+    ).toBe("pA");
+    expect(
+      effectiveFinOpsProjectId({ observationProjectId: null, workProjectId: "pA" }),
+    ).toBe("pA");
+    expect(
+      effectiveFinOpsProjectId({ observationProjectId: "pA", workProjectId: null }),
+    ).toBe("pA");
+    expect(
+      effectiveFinOpsProjectId({ observationProjectId: "pB", workProjectId: "pA" }),
+    ).toBeNull();
+  });
+
+  it("E2-REL-05 — effectiveFinOpsProjectIdForWork null on any conflicting row", () => {
+    expect(
+      effectiveFinOpsProjectIdForWork("pA", [
+        { projectId: "pA" },
+        { projectId: null },
+      ]),
+    ).toBe("pA");
+    expect(
+      effectiveFinOpsProjectIdForWork("pA", [
+        { projectId: "pA" },
+        { projectId: "pB" },
+      ]),
+    ).toBeNull();
+    expect(
+      effectiveFinOpsProjectIdForWork(null, [{ projectId: "pA" }, { projectId: "pB" }]),
+    ).toBeNull();
+  });
+
+  it("E2 A.7 — resolveObservedProjectId refuses multi-project attribution", () => {
+    expect(resolveObservedProjectId([])).toBeNull();
+    expect(resolveObservedProjectId([{ projectId: null }])).toBeNull();
+    expect(
+      resolveObservedProjectId([{ projectId: "p1" }, { projectId: "p1" }]),
+    ).toBe("p1");
+    expect(
+      resolveObservedProjectId([{ projectId: "p1" }, { projectId: "p2" }]),
+    ).toBeNull();
+  });
+
+  it("E2 A.7 — finOpsModelDisplayLabel never presents UNVERIFIED as applied", () => {
+    expect(
+      finOpsModelDisplayLabel({
+        modelApplied: "UNVERIFIED",
+        modelRequested: "gpt-6.2-sol",
+      }),
+    ).toBe("gpt-6.2-sol (demandé)");
+    expect(
+      finOpsModelDisplayLabel({
+        modelApplied: "gpt-6.1-terra",
+        modelRequested: "gpt-6.2-sol",
+      }),
+    ).toBe("gpt-6.1-terra");
     expect(
-      computeMeasureCoveragePercent(rows).kind === "known" ||
-        computeMeasureCoveragePercent(rows).kind === "partial",
-    ).toBe(true);
-    expect(sumBillableProviderRequests(rows, { onlyWithObservedCost: true })).toBe(1);
+      finOpsModelDisplayLabel({ modelApplied: null, modelRequested: null }),
+    ).toBeNull();
   });
 });
\ No newline at end of file
```

### FILE (working tree): `projects/sfia-studio-next/web/tests/unit/mp09-pilotage-multi-restitution.test.ts`

```
import { describe, expect, it } from "vitest";
import { composePilotageEffectRestitution } from "@/domains/conversation/pilotage-effect-restitution";
import {
  dependencyPreconditionBlockReason,
  pickPrimaryPilotageEffect,
  type TurnPilotageEffect,
} from "@/domains/conversation/pilotage-effect-aggregate";

describe("MP-09 — multi pilotage restitution", () => {
  it("compose renders A applied + B rejected without false success", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Je traite les deux demandes.",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "TRANSITION_CYCLE",
          status: "REJECTED",
          reason: "Cycle source absent",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
    expect(out).toMatch(/pas pu appliquer/i);
    expect(out).toMatch(/Cycle source absent/);
    expect(out).not.toMatch(/transition.*maintenant/i);
  });

  it("compose renders two applied outcomes", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "ok",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "TRANSITION_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
    expect(out).toMatch(/transition de cycle/i);
  });

  it("first rejected second applied surfaces both", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "REJECTED",
          reason: "Type de cycle requis",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "RETAIN_TRAJECTORY",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/pas pu appliquer/i);
    expect(out).toMatch(/orientation de trajectoire est retenue/i);
  });

  it("ambiguous binding restitutes clarification", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Analyse.",
      effects: [
        {
          attempted: true,
          intentClarity: "AMBIGUOUS",
          reason: "Deux cycles cités",
          status: null,
          decisionId: null,
        },
      ],
    });
    expect(out).toMatch(/intention ambiguë/i);
    expect(out).toMatch(/Deux cycles cités/);
  });

  it("ALREADY_APPLIED honest wording", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "ok",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "ALREADY_APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/déjà en place/i);
  });

  it("pickPrimary returns first attempted in binding order", () => {
    const records: TurnPilotageEffect[] = [
      {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "APPLIED",
        intentClarity: "CLEAR",
        source: "user_message_command",
        decisionId: null,
      },
      {
        attempted: true,
        operation: "TRANSITION_CYCLE",
        status: "REJECTED",
        intentClarity: "CLEAR",
        source: "user_message_command",
        decisionId: null,
      },
    ];
    const primary = pickPrimaryPilotageEffect(records);
    expect(primary?.operation).toBe("OPEN_CYCLE");
  });
});

describe("MP-09 — dependsOn precondition gate", () => {
  const pilotageIntentIds = new Set(["i-open", "i-trans"]);

  it("blocks dependent when predecessor rejected", () => {
    const map = new Map([["i-open", "REJECTED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/prérequis/i);
  });

  it("allows dependent when predecessor applied", () => {
    const map = new Map([["i-open", "APPLIED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toBeNull();
  });

  it("blocks when predecessor ambiguous", () => {
    const map = new Map([["i-open", "AMBIGUOUS"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/ambiguë/i);
  });

  it("E2 A.3 — fail-closed on non-pilotage dependsOn when unresolved", () => {
    const map = new Map([["i-open", "APPLIED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4-knowledge"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/hors intentions D5\/D6|inter-capacité|non encore satisfaite/i);
  });

  it("E2-REL-02 — allows D5 when cross-cap D4 outcome is APPLIED", () => {
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4-knowledge"],
        pilotageIntentIds,
        outcomeByIntentId: new Map(),
        crossCapOutcomeByIntentId: new Map([["i-d4-knowledge", "APPLIED"]]),
      }),
    ).toBeNull();
  });

  it("E2-REL-02 — blocks D5 when cross-cap D4 outcome FAILED", () => {
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4-knowledge"],
        pilotageIntentIds,
        outcomeByIntentId: new Map(),
        crossCapOutcomeByIntentId: new Map([["i-d4-knowledge", "FAILED"]]),
      }),
    ).toMatch(/hors pilotage|n'est pas appliqué/i);
  });
});
```

### DIFF: `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 8d0adfbd..6098c598 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,60 @@
+## delivery_id: DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV
+
+- **date_local**: 2026-11-27 (Europe/Paris)
+- **lane**: DEV only — macro-lot correctif intégré (17 MP + continuité Morris)
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `58ca9486003805f74e69a0842f2c0792a7184437`
+- **tree/diff**: worktree dirty (construction in progress) — NOT identical to HEAD commit
+- **schema_revision**: unchanged (no migration)
+- **build_DEV**: `next dev` :3100 (Turbopack) — not an immutable release build
+- **portée**: axes A–D — allocation Option C env-gated ; multi-intent command keys ; context efficiency ; work terminalisation ; FinOps projections ; parentSubjectId capitalisation ; shared composer + prep dictation ; panneau droit Repères ; rail settings ; restitution naturelle ; typographie ; spinner
+- **tests**: 88+ focused unit PASS (policy, FinOps, terminal, composer, dictation session, MP-09 keys/bindings, recent items, restitution, A.4)
+- **browser_DEV**: sas — Paramètres menu + mic « Dicter un message » visibles (auto-session)
+- **réserves**: LIVE OpenAI non autorisé (allocation réelle, dictée Realtime, autonomie hiérarchie naturelle, réutilisation cognitive LIVE) ; UX panneau → E3 ; transport audio → E4 ; RECETTE inchangée ; NO project commit
+- **classe**: NO RELEASE
+- **E2_périmètre** (2026-11-27, Ensemble 2 — garanties cognitives résiduelles A.1–A.7):
+  - A.1: stamp `policyVersion` = politique active ; RECETTE admit versionné (`qualified` / `qualified-v0.x`) + reason codes ; `modelApplied=UNVERIFIED` persisté (pas de copie silencieuse du demandé)
+  - A.2: SEM-02 lexical métier primary écarté (inspection) ; guidance dependsOn inter-capacité
+  - A.3: dependsOn hors D5/D6 → fail-closed ; ownership mid-loop → SKIPPED explicites restants
+  - A.4: resume `selectRelevantKnowledgeContext` + `projectId` ; hybrid `derivedUsed=false` instruit (FLAG_OFF / BACKEND=pg fixture) ; oracle file-index corrigé
+  - A.5: `workDisposition=CONTINUE` → OPEN / interrupt CONTINUE
+  - A.6/A.7: attribution projet multi-obs sans first-of-many ; labels modèle demandé vs appliqué ; `hasObservations`/`hasData` billable-only
+  - tests ciblés: **91 PASS** (mp09, A.5 terminal, FinOps projection, cognitive-resources, hybrid index, A.6 attribution, e1 B.7/B.8, hybrid guarantees)
+  - schéma: **027 inchangé** ; build DEV non figé ; NO RELEASE ; LIVE/RECETTE non mutés
+  - preuves reportées: calibration réelle ; T08 comparatif ; allocation adaptative naturelle ; coût facturé fournisseur ; DOM :3100
+- **E2_complément_reliquats** (2026-11-27, E2-REL-01…06 — même livraison, pas de nouvelle DELIV):
+  - E2-REL-01: admission RECETTE **versionnée uniquement** (`qualified-v0.1`/`qualified-v0.2`) ; bare `qualified` → REJECTED + reason codes
+  - E2-REL-02: D4 early capitalisation → `crossCapOutcomeByIntentId` ; dependsOn D4→D5/D6 vérifiable ; C02 replay multi-intent `pilotageEffects[]` ; CONTINUE ≠ AWAIT_PILOT (checkpoint cause CONTINUE)
+  - E2-REL-03: hybrid PG path DET (`e2-hybrid-pg-path.pg.test.ts` PASS) ; FP open_point aligné collectAdmissible ; efficience A.4 préservée (omit marker)
+  - E2-REL-04: cartographie OBS → pack (événements d3.* / FinOps / D4) ; E3 propriétaire présentation
+  - E2-REL-05: SQL attribution sans OR contaminateur ; `effectiveFinOpsProjectId` / `ForWork` ; billable = CORRELATION_ONLY only
+  - E2-REL-06: delivery-history + registre synchronisés ; verdict Cursor ≠ ChatGPT
+  - tests ciblés complément: **89+ PASS** unit/PG (cognitive-resources, mp09, FinOps, A.4/A.5/A.6, e2-hybrid-pg, mp09-multi-pilotage)
+  - schéma: **027 inchangé** ; LIVE/RECETTE non mutés ; NO RELEASE
+  - verdict Cursor (complément): READY WITH RESERVES — gate Morris avant E3 ; ChatGPT revue indépendante requise
+- **E1_périmètre** (2026-11-27, ensemble Continuité cognitive B.1–B.8 uniquement):
+  - même tour parent+enfant (`subject-proposal-batch` + `precreateBatchSubjects`);
+  - reparent/rename via capitalisation SUBJECT existant;
+  - PROPOSE_TRAJECTORY USER_MESSAGE sans body objective (gate durable);
+  - compteurs décisions applicables (supersede uniquement si successeur APPLICABLE);
+  - `openPointShortTitle` pour E3; B.7 PREFERRED + omit marker;
+  - suite E1 focalisée: **52 PASS** (unit+PG B.1–B.8) puis **58 PASS** rapportés handoff `d08fc94e`
+- **E1_complément_reliquats** (2026-11-27, E1-REL-01…09 — même livraison, pas de nouvelle DELIV):
+  - E1-REL-01: merge/split/detach raccordés via `subjectOrganization` → propriétaires D4;
+  - E1-REL-02: refus subjectId invalide/étranger ; conflit id/titre ; fence rename/merge/split/reparent ; rename fail non masqué;
+  - E1-REL-04: `openPointTitle` → `provenance.canonicalTitle` + shortTitle projection;
+  - E1-REL-05: `forecastSteps` durable → ClassifiedCommand → PG ; RETAIN supersède PROPOSED (RETAIN_VIS);
+  - E1-REL-03/06/07/08: raccordements vérifiés ; preuves naturelles → registre recette ; DOM :3100 HTTP 500 tooling;
+  - E1-REL-09: as-built + registre + delivery-history synchronisés;
+  - tests complément: `e1-reliquats-integrity.pg.test.ts` **5 PASS** + non-régression B.5/B.6 (**10 PASS**) + B.7/B.8 PG (**3 PASS**) + units E1/projection;
+  - état testé: DETERMINISTIC PROVEN ciblé ; LIVE/navigateur NON PROUVÉS ; RECETTE préservée
+- **E1_final_safeguards** (2026-11-27, 3 contrôles — même livraison):
+  - merge: réparent enfants ACTIVE + refus cycle ancêtre→descendant ;
+  - forecast USER_MESSAGE: refuse body.forecastJson ; mutate ignore body hors chemins directs ;
+  - tests: `e1-final-safeguards.pg.test.ts` **5 PASS** + non-régression reliquats/ensemble/ml2-corrective (**38 PASS** lot) ;
+  - Review Pack régularisé (RETAIN + fichiers delta)
+- **statut**: E2 GARANTIES + complément REL-01…06 DEV — Cursor READY WITH RESERVES (avant revue ChatGPT / gate Morris E3); E1 CONSTRUCTION EXIT ACCEPTED WITH RESERVES; Livraison 1 NOT ACCEPTED; NO RELEASE
+
 ## delivery_id: DELIV-2026-11-27-ML5-RECETTE-OPERATIONAL-ACTIVATION

 - **date_utc**: 2026-11-27T10:00Z
```

### DIFF: `projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md`

```diff
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index a22275cd..d77d020d 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.29 candidate — 27 novembre 2026 : **RECETTE operational activation A1–A6** (`e8e6e069` · BUILD `rpEczSp61evIZ7d6fnIWR` · PG password rotated · flags LIVE · index borné 10 chunks · WEB/Admin OFF) — **RECETTE OPERATIONAL ACTIVATION COMPLETE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING** ; v0.28 : cutover ; v0.27 : dictation nominal path final DEV ; … |
+| Version | v0.31 candidate — 27 novembre 2026 : **E2 complément REL-01…06** (admission versionnée ; orchestration D4→D5 ; C02 multi-intent ; hybrid PG DET ; FinOps attribution) sur `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` dirty — **Cursor READY WITH RESERVES** (ChatGPT revue indépendante pending) ; v0.30 : E2 A.1–A.7 ; v0.29 : RECETTE A1–A6 ; … |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
@@ -428,6 +428,63 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme
 | R-004 | 23/11/2026 | ML5 complétude — inventaire 99, P0 sendIntent, provenance sources, B1 frontier, synthèse≠Nora | même worktree DIRTY ; HEAD entrée `6cf33e99…` | Review Pack 4 → `sfia/review-handoff` | Impl **1/74/24** (réconcilié explore + cycle 4) ; T-01…T-12 corrigés | ML5 PARTIAL — GOVERNED GAPS ; unit 53 + PG 9 ; BROWSER/F2/LIVE ouverts |
 | R-PROV-01 | 26/11/2026 | ML5 politique cognitive provisoire v0.1 + qualification intégrée A/B/E/F LIVE | `sfia/next-ml5-integrated-delivery-20261123` · base `4f1bb0f2` · DEV build `-8zagoVhrLvhtuKL7ThVc` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | Politique v0.1 · FinOps WEB attribution · LIVE Terra→Sol · WEB gate dossier | DEV CANDIDATE — PROVISIONAL POLICY QUALIFIED IN DEV — WEB GATE PENDING — C/D différés |
 | R-AT-CAP | 25/11/2026 | ML5 Nora×Studio capability interactions — AssetTrack AT-01…13 (AT-10 retirée) · Option B+A+C | `sfia/next-ml5-integrated-delivery-20261123` · base `0d37b12a` · DEV build `BMd8qv-bn6m9Hj6YEtdee` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | AT-01…13 · PREPARE documentaire · forecast cognitif · LIVE activité · Git REAL RO | DEV CANDIDATE — INTEGRATED CORRECTIVE — READY FOR CHATGPT REVIEW ; RECETTE `ca0b114c` préservée |
+| R-E1 | 27/11/2026 | E1 Continuité cognitive B.1–B.8 (MP-03/10/12/13 + interfaces) — Critical Cycle 8 | `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` dirty ; no project commit | Review Pack E1 → `sfia/review-handoff` (publish-in-cycle) | B.1–B.8 · oracles 1–18 (E1 niveau) · suite 52 PASS unit/PG | E1 DETERMINISTIC PROVEN partiel ; autonomie LIVE NON PROUVÉE ; embedding residual → E2 ; UX panneau → E3 ; Livraison 1 NOT ACCEPTED |
+| R-E1r | 27/11/2026 | E1 complément neuf reliquats E1-REL-01…09 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E1r → `sfia/review-handoff` (publish-in-cycle) | E1-REL-01…09 · e1-reliquats 5 PASS + non-régression B.5–B.8 | E1 COMPLÉMENT — DETERMINISTIC PROVEN ciblé ; preuves naturelles → recette ; LIVE/DOM NON PROUVÉS ; E2 non engagé |
+| R-E1f | 27/11/2026 | E1 sécurisation finale — merge enfants + forecast USER_MESSAGE + pack | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E1f → `sfia/review-handoff` | merge reparent/cycle · BODY_FORECASTJSON refuse · e1-final-safeguards 5 PASS | E1 FINAL SAFEGUARDS — DET PROVEN ; R-REC-E1-01/02 conservés ; E2 non engagé |
+| R-E2 | 27/11/2026 | E2 garanties cognitives résiduelles A.1–A.7 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2 → `sfia/review-handoff` @`80cdef6c` | A.1–A.7 · 91 PASS unit ciblés · hybrid instruit | **Cursor** READY WITH RESERVES ; ChatGPT PARTIEL NOT READY E3 ; six reliquats → R-E2c |
+| R-E2c | 27/11/2026 | E2 complément six reliquats E2-REL-01…06 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2c → `sfia/review-handoff` | REL-01…06 · 89+ PASS unit/PG · hybrid PG DET | **Cursor** READY WITH RESERVES ; ChatGPT revue indépendante pending ; E3 non engagé |
+
+### E2 — lignes de couverture (2026-11-27)
+
+| Capacité | Niveau E2 | Preuve | Reliquat |
+| --- | --- | --- | --- |
+| A.1 Allocation | RACCORDÉ DET + REL-01 | policy stamp ; **admit `qualified-v0.x` only** ; bare `qualified` rejected ; UNVERIFIED applied | Calibration réelle / choix adaptatif naturel → recette |
+| A.2 Qualification | VÉRIFIÉ INSPECTION | pas de routeur lexical métier primary ; tests SEM existants | Qualification multi-langues naturelle → recette |
+| A.3 Orchestration | RACCORDÉ DET + REL-02 | early D4 + crossCap map ; D4→D5 dependsOn ; C02 multi-intent replay ; ownership SKIPPED | Preuves naturelles multi-cap → recette ; D7 hors scope |
+| A.4 Contexte / hybrid | RACCORDÉ DET + REL-03 | resume+projectId ; **hybrid PG path PASS** (fake embed) ; omit marker A.4 ; open_point FP aligné | Mesure T08 ; embedding LIVE fournisseur |
+| A.5 Finalisation | RACCORDÉ DET | CONTINUE → OPEN / cause CONTINUE ≠ AWAIT_PILOT | Travaux OPEN naturels → recette |
+| A.6 Observabilité | RACCORDÉ DET + REL-04 | billable hasObservations/hasData ; cartographie événements → pack E3 | Libellés activité E3 ; corrélation LIVE |
+| A.7 FinOps | RACCORDÉ DET + REL-05 | **effectiveFinOpsProjectId** ; SQL sans OR conflict ; populations billable | Coût facturé ; Admin OFF ; MP-06 audio interface only |
+
+### E2-REL — matrice complément (2026-11-27)
+
+| ID | Exigence | État | Validation | Preuve restante |
+| --- | --- | --- | --- | --- |
+| E2-REL-01 | Admission versionnée | IMPLEMENTED + DET | ml5-cognitive-resources | Calibration LIVE → Morris GO |
+| E2-REL-02 | Orchestration/reprise/finalisation | IMPLEMENTED + DET | mp09 + conductor A.5 + early D4 | Conversation naturelle multi-cap → recette |
+| E2-REL-03 | Hybrid PG + efficience | IMPLEMENTED + DET (PG fake embed) | e2-hybrid-pg-path | Embedding LIVE ; pertinence cognitive → recette |
+| E2-REL-04 | Observabilité E3 | DOCUMENTED + INSPECTION | cartographie pack | Surface E3 ; latences non instrumentées |
+| E2-REL-05 | FinOps attribution | IMPLEMENTED + DET | FinOps projection + A.6 contract | Agrégats PG population ; Admin OFF |
+| E2-REL-06 | Dossier/qualité | SYNCHRONIZED | delivery-history + registre | Revue ChatGPT ; gate Morris |
+
+**MP mapping (OPEN RECETTE)** : MP-09→REL-02 ; MP-11→REL-04 ; MP-14→REL-03 ; MP-15→REL-01 ; MP-16→REL-05 ; MP-10 continuité interface ; MP-06 audio only.
+
+### E1 — lignes de couverture (2026-11-27)
+
+| Capacité | Niveau E1 | Preuve | Reliquat |
+| --- | --- | --- | --- |
+| B.1 Capitalisation sélective | RACCORDÉ DET | extractKnowledgeProposals + maybeCapitalize ; unit e1-b1 | Autonomie qualification LIVE |
+| B.2 Arborescence | RACCORDÉ DET | same-turn parent/child PG ; reparent capitalisation+API ; **merge/split/detach via subjectOrganization** (E1-REL-01) | Pertinence cognitive naturelle → recette |
+| B.3 Synthèses/acquis | EXISTANT+EXERCÉ | summarize/capitalize/supersede paths ; intégrité refs (E1-REL-02) | Consolidation CampusNova-like → recette |
+| B.4 Points ouverts | RACCORDÉ DET | open/resolve PG ; **canonicalTitle** + shortTitle (E1-REL-04) | Accès UX E3 |
+| B.5 Décisions durables | RACCORDÉ DET | e1-ensemble-b5-b6 PG (record/revise/revoke/négatifs) | Reconnaissance naturelle → recette |
+| B.6 Trajectoire vivante | RACCORDÉ DET | propose/retain/open ; **forecastSteps conversationnel + RETAIN_VIS** (E1-REL-05) | Orientation naturelle → recette |
+| B.7 Réutilisation | RACCORDÉ DET | PREFERRED + omit marker PG ; outils D4 exposés | Mesure T08 / hybrid embedding → E2+recette |
+| B.8 Projections | RACCORDÉ DET | filterApplicableDecisions + library identity + shortTitle | DOM :3100 HTTP 500 tooling ; E3 multi-types |
+
+### E1-REL — matrice complément (2026-11-27)
+
+| ID | Exigence | État | Validation | Preuve restante |
+| --- | --- | --- | --- | --- |
+| E1-REL-01 | Réorganisation complète | IMPLEMENTED + DET PROVEN (merge) | e1-reliquats merge | Pertinence naturelle merge/split → recette |
+| E1-REL-02 | Intégrité D4 | IMPLEMENTED + DET PROVEN | invalid id, conflict, fence | — |
+| E1-REL-03 | Capitalisation réelle | IMPLEMENTED + VERIFIED BY INSPECTION | chaîne extract→D4 ; tests E1 | Conversation réelle → recette |
+| E1-REL-04 | Titre point ouvert | IMPLEMENTED + DET PROVEN | canonicalTitle PG + unit | Affichage DOM → recette/E3 |
+| E1-REL-05 | Trajectoire forecast+retain | IMPLEMENTED + DET PROVEN | forecast USER_MESSAGE ; RETAIN_VIS | Réorientation naturelle → recette |
+| E1-REL-06 | D6 complémentaire | VERIFIED BY INSPECTION + DET antérieur | e1-ensemble-b5-b6 | Actes naturels T07 → recette |
+| E1-REL-07 | Réutilisation D4 tools | VERIFIED BY INSPECTION + DET B.7 | tools exposés ; PREFERRED | Sélection naturelle → recette |
+| E1-REL-08 | Projections | VERIFIED BY INSPECTION | counters/identity/shortTitle code | DOM DEV bloqué tooling |
+| E1-REL-09 | Documentation | IMPLEMENTED | as-built + delivery + registre | Review Pack L3 |

 Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est justifié ; `.tmp-sfia-review/chatgpt-review.md` reste la source mono-cycle, avec Review Handoff L3 distinct de l'historique produit Studio. Ne jamais considérer un résumé seul comme contenu complet des fichiers modifiés.
```

---

## 13. Diffstat ciblé

```
.../construction/delivery-history.md               |  57 ++
 ...5-registre-couverture-et-revue-developpement.md |  59 +-
 .../domains/conversation/cognitive-conductor.ts    |  46 +-
 .../provisional-cognitive-policy.ts                |  93 ++-
 .../web/src/domains/conversation/service.ts        | 512 ++++++++++++----
 .../web/src/domains/finops/usage-projection.ts     | 100 +++-
 .../web/src/domains/finops/usage-read-service.ts   | 149 ++++-
 .../web/src/domains/knowledge/service.ts           | 657 +++++++++++++++++++--
 8 files changed, 1448 insertions(+), 225 deletions(-)
?? projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts
?? projects/sfia-studio-next/web/tests/integration/e2-hybrid-pg-path.pg.test.ts
```

Fin du Review Pack E2c — 2026-11-27T19:05:16+01:00
