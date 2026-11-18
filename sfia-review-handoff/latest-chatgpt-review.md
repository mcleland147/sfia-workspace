# Review Pack FULL — UAT-03 root cause LIVE + observabilité

**SFIA v2.6 · R5 / ML4D / Ensemble 05 · Cycle 9 QA + Cycle 8 obs**  
**Date/heure :** 2026-11-18 ≈ 17:10 CET  
**Profil :** Critical · INC root-cause investigation  
**ENV-01 :** DEV reproduction isolée · RECETTE lecture seule  
**Versioning :** NO RELEASE · candidat RECETTE inchangé  
**Verdict unique :** `UAT-03 ROOT CAUSE PROVEN — CORRECTIVE PLAN READY`

---

## 1. Date et heure

Investigation 2026-11-18 17:03–17:10 CET (LIVE EXP-01…04).

## 2. Git Truth Check

| | |
|---|---|
| Branche DEV | `sfia/next-ml4d-ensemble05-composition-recette-candidate` |
| HEAD base candidat | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` |
| tree base | `f94e8eccf912f76506702cd8c19a5e57df9b9ba2` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree dirty | obs + evidence + scripts (non poussés produit) |
| RECETTE runtime | **inchangé** `ba1e55ec` / `_eeb9Jy2hV242myk86VTu` · `:3200` · 200 |

## 3. Sources et SHA

- Diagnostic L3 antérieur `95b511ab` / blob `31e86c4b`.  
- Agents SDK **0.21.0** (lockfile).  
- Schéma sequence `detail.max(400)` — `visual-composition.ts`.

## 4. GO Morris consommé

Investigation technique + appels LIVE autorisés, sans plafond numérique arbitraire ; pas de déploiement RECETTE ; pas de push produit.

## 5. Frontières ENV-01

- LIVE sur **DEV** DB `:5433` / `sfia_next_dev` uniquement.  
- FORCE/SIM/E2E forcés vides.  
- RECETTE / STABLE non mutées.  
- Aucun effet Git métier.

## 6. Modifications d'observabilité (DEV)

Fichiers :

- `nora-adapter.ts` — classification, diagnostics, ephemeral DEV dump, sensitive logging DEV-only.  
- `observability.ts` — META allowlist étendue.  
- `nora-adapter-corrective.test.ts` — tests UAT-03.  
- Scripts `uat03-live-investigate.mts`, `export-dev-env-for-live.mjs`.  
- `.gitignore` → `.tmp-sfia-nora-diag/`.

## 7–8. Contenus FULL / diffs (§7.2.1)

Preuves packagées :

`docs/evidence/.../ensemble05-uat03-rootcause-live-20261118/modified-content/`

- `nora-adapter-error-obs.FULL.ts` — helpers classification/diagnostics/ephemeral (**FULL** ~280 lignes).  
- `observability.ts.diff`  
- `nora-adapter-corrective.test.ts.diff`  
- scripts FULL  

### Extrait causal OBS (EXP-02, expurgé)

```json
"error_category":"PROVIDER_SCHEMA_OR_OUTPUT",
"error_name":"ModelBehaviorError",
"error_kind":"structured_output_schema_validation",
"error_phase":"stream_drain",
"streaming_delivered":true,
"zod_issue_path":"visualComposition.blocks.1.steps.0.detail",
"validation_rule_hint":"max_length"
```

Message SDK (technique, non PII) :  
`Invalid output type: final assistant output failed schema validation at "visualComposition.blocks.1.steps.0.detail" (Too big: expected string to have <=400 characters).`

## 9. Tests déterministes

`vitest run tests/unit/nora-adapter-corrective.test.ts` → **10 PASS**  
(incl. Invalid output type → SCHEMA_OR_OUTPUT + path + max_length)

Dettes tsc globales préexistantes : non présentées comme PASS global produit.

## 10. Environnement de reproduction

DEV · `gpt-6.1-sol` · `TEST_BOUNDARY` · analyse/medium · stream nominal · même schéma D3 que RECETTE · SDK 0.21.0.

## 11–14. Protocole LIVE / appels / ledger / chronologie

| ID | Résultat | Notes |
|---|---|---|
| EXP-01 | UNKNOWN | Repro exacte ; Zod redacted |
| EXP-02 | UNKNOWN | Path Zod **detail ≤400** |
| EXP-03 | COMPLETE | Contrôle comparison |
| EXP-04 | COMPLETE | Sequence 6 steps si détails courts |

**4 appels** · ledger est. **€3,40 TTC** (fallback €0,85×4) · tokens usage non exposés par adapter.

Registre : `00-ledger-and-register.md`

## 15. Traces expurgées

Voir EXP-*.json + §7–8. Dumps éphémères locaux `.tmp-sfia-nora-diag/` **non publiés** bruts hors preuves scrubbées.

## 16. Hypothèses

| H | Verdict |
|---|---|
| H1 schéma sortie | **CONFIRMÉE** — `steps[].detail` max 400 |
| H2 stream finalization | Mécanisme SDK confirmé (`stream_drain`) ; cause = validation, pas transport |
| H3 contexte long | Non nécessaire (échec en conversation vide DEV) |
| H4 profil cognitif | Même analyse/medium que UAT-03 RECETTE |
| H5 timeout | Infirmé (≪ wallClock ; catégorie schema) |
| H6 SDK alone | Interaction **contrat applicatif × SDK** |

## 17. Cause démontrée

**ROOT CAUSE OF REPRODUCED FAILURE PROVEN**

Condition : sortie `sequence` avec `detail` > 400 caractères (demande UAT-03 « résultats + vigilance »).  
Effet : `ModelBehaviorError` → UNKNOWN.  
Discriminant : EXP-04 COMPLETE avec détails courts ; EXP-03 comparison OK.

Lien historique RECETTE UAT-03a/b : **élevé** (même prompt/phase/signature ; message Zod exact non stocké en RECETTE).

## 18. Blast radius

Correctif schéma `detail` max : impacte compositions sequence uniquement.  
Obs : faible.  
Pas de migration DB.

## 19. Correctif recommandé (non déployé)

1. `detail.max(400)` → **1200** (ou champs scindés).  
2. Rappel limite dans prompt D3.  
3. Inclure obs durable dans prochain candidat.  
4. LIVE UAT-03 retest sous nouveau GO après build.  

Détail : `02-corrective-plan.md`

## 20. État données / RECETTE

RECETTE préservée. UNKNOWN historiques non réécrits. DEV DB seulement pour essais.

## 21. Gates / réserves

- Usage tokens non instrumentés → coût fallback.  
- Correctif fonctionnel **non** appliqué en RECETTE (hors mandat).  
- `setSensitiveDataLoggingEnabled` réservé DEV+ephemeral.

## 22. Verdict unique

# `UAT-03 ROOT CAUSE PROVEN — CORRECTIVE PLAN READY`

Aucun Gate C / ADOPTED / STABLE / release / push produit.
