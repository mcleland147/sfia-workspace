# Review Pack Full — SFIA Studio Next · ML5 · Cycle 8 EVOL Critical

**Mandat :** E2 résiduel + E3 conformité UX / panneau droit (GO Morris construction intégrée).
**Profil :** Critical · Cycle Delivery · EVOL · mono-cycle.
**Branche projet :** `sfia/next-ml5-integrated-delivery-20261123`
**Base publiée avant lot :** `3fe91745fc58ba6bf3e1d9d1cbc4dd427bbd1f51` · tree `9468026544719c877e74626040d1832a4b914f97`
**Main :** `997897fd7cf914771e7d08e8030dc7123fab7d25` (inchangé)
**Docs candidate :** `docs/next-openai-studio-convergence-20261126` @ `e23eaaa8` (suivi v0.13 §20 — non modifié)
**Handoff entrant :** `ce332f16` blob `47e8c40b`
**Candidat intégré :** `5f2ecad185b9784bc3956477601fe6a722459467` · tree `bdc37515a4bd0d21cecb4274943dde2858b200a3` · BUILD qualify `zob6mblcG4SSKcii2l54o`
**Classe :** NO RELEASE · E4/E5 NON ENGAGÉS · RECETTE non mutée · aucune PR · aucune CI distante attendue

## 1. Git Truth / ENV-01

| Contrôle | Résultat |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrant | `3fe91745` = origin (fast-forward base) |
| Delta entrant | §18.2 local non commité préservé + travaux A/B |
| Staged entrant | aucun |
| RECETTE :3200 | process distinct préservé (non redémarré) |
| DEV DB | `postgres://…@127.0.0.1:5433/sfia_next_dev` · `STUDIO_LANE=DEV` |
| Tests mutatifs | `sfia_next_e2e` @ :5433 (Vitest PG) |
| ENV ROUTING | **COMPLETE** |
| CI triggers | workflows Next/Studio → `main` only ; PR list head branche = `[]` |

## 2. Répartition SEF-08 / responsabilités

| Volet | Owner fichiers | Contenu |
|---|---|---|
| A — E2 résiduel | `conversation/service.ts`, aggregate, conduction, `knowledge-effect-restitution.ts`, SC2 PG | lecture/reprise `knowledgeEffects` ; restitution métier |
| B — E3 | `page.tsx`, `project-recent-*.ts`, `tokens.css`, qualify specs | D.1–D.6 |
| Partagés | docs technique, tests intégrés | intégration finale unique |

## 3. Contrat visuel Figma (lu avant code UI)

**FileKey :** `itgvCulInEnFY6DvgIegvP` · session `c5075664-fd55-42da-a224-1a306c06cc2b`

| Frame/node | Dimensions | Notes contrat |
|---|---|---|
| `700:39` Travail nominale | 1680×970 | Rail projet **246×970** (`700:40`) ; panneau En bref `702:123` |
| `1405:610` panneau nominal | 323×585 | Cycle/trajectoire ; REPÈRES ≤5 ; POINTS ≤5 ; accès Journal |
| `1334:70` rail personnel Paramètres | 246×970 | Pied identité + paramètres |

Captures : `projects/sfia-studio-next/construction/evidence/ml5-e3-20261127/`

## 4. Blast radius

D3 read/replay/projection + restitution ; panneau Travail ; CSS récents ; tests ; docs.
OUT : planner Option B, FinOps moteur, LIVE, RECETTE, CI, Figma edits, E4/E5.

## 5. Delta E2

### 5.1 Entrant §18.2
`TurnKnowledgeEffect` write-path ; freshness rewrite ; SC3 ; fallback capitalisation retiré.

### 5.2 Résiduel
- `lookupDurableTurnByClientKey` / replay COMPLETE·UNKNOWN·FAILED / `listTurnProjections` / unknownPayload post-autorité
- `composeKnowledgeEffectRestitution` sans ids techniques en primaire
- SC2 lookup durable sans mutation
ARCH-01…05 préservés.

## 6. Delta E3 (D.1–D.6)

| Critère | Résultat |
|---|---|
| D.1 Typo | 12.5px/1.65 runtime ; tables wrap ; qualify PASS |
| D.2 Animations | SAS ring spin PASS |
| D.3 Restitution | knowledge métier ; pas « Résultat Studio » |
| D.4 Panneau | consultation après succès ; doc+rév exacte ; git coords ; points → Journal focus |
| D.5 Rail | Paramètres pied ; F1 246/246 = 0 px |
| D.6 Qualif | captures evidence ; build `zob6mblcG4SSKcii2l54o` |

Limites : deep-link exécution/preuve = surface propriétaire ; récents empty si aucune consultation.

## 7. Créations

- `web/src/domains/conversation/knowledge-effect-restitution.ts`
- `web/tests/unit/knowledge-effect-restitution.test.ts`
- `web/tests/qualify/ml5-e3-panel-rail-capture.spec.ts`
- `construction/evidence/ml5-e3-20261127/*`

## 8. Git Review Index

`git diff 3fe91745..HEAD -- projects/sfia-studio-next` — focus :

1. `conversation/service.ts`
2. `conversation/knowledge-effect-restitution.ts` (new)
3. `pilotage-effect-aggregate.ts` / `qualified-effect-conduction.ts`
4. `app/projects/[projectId]/page.tsx`
5. `lib/project-recent-items.ts` / `project-recent-consultation.ts`
6. `components/figma/tokens.css`
7. tests unit/PG/qualify
8. docs + evidence

## 9. Validations

| Commande | Env | Résultat | Exit |
|---|---|---|---|
| vitest unit recent+knowledge+conduction | local | 12 PASS | 0 |
| vitest e2-unified + recent-items | e2e@:5433 | 6 PASS | 0 |
| qualify:build FORCE | DEV | build `zob6mblcG4SSKcii2l54o` | 0 |
| playwright ml5-ux-refinements | :3100 | 2 PASS | 0 |
| playwright ml5-e3-panel-rail-capture | :3100 | 1 PASS | 0 |
| git diff --check | — | clean | 0 |

Fake : fixture Nora / qualify. REAL : PG e2e ; navigateur Playwright ; chemins D4/Git DEV.

## 10. Figma/runtime

Voir `construction/evidence/ml5-e3-20261127/figma-runtime-compare.md`. F1/F2 rail 0 px.

## 11. Documentation

delivery-history · registre v0.36 · as-built lecture/reprise. Suivi ChatGPT non modifié.

## 12. Coverage §7.2

Mandat, Git Truth, Figma, index, validations, Fake/Real, verdicts E2/E3 : COMPLETE.

## 13. Verdicts construction (Cursor — gate Morris)

| Ensemble | Verdict |
|---|---|
| **E2** | **READY WITH RESERVES** |
| **E3** | **READY WITH RESERVES** |
| **Cycle intégré** | **READY WITH RESERVES** — ≠ ADOPTED · ≠ READY FOR REAL |

## 14. Instruction ChatGPT

Relire remote HEAD, diff depuis `3fe91745`, evidence, handoff L3. Actualiser suivi. Morris arbitre E2/E3. E4 sous GO.
