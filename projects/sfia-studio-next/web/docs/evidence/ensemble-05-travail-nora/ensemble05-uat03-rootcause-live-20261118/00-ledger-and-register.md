# UAT-03 — Registre d'expériences LIVE + ledger

**Environnement :** DEV isolé (`127.0.0.1:5433` / `sfia_next_dev`)  
**SHA code instrumenté :** worktree `sfia/next-ml4d-ensemble05-composition-recette-candidate` @ parent `ba1e55ec` + obs DEV  
**RECETTE :** non mutée (`ba1e55ec` / `_eeb9Jy2hV242myk86VTu`)  
**Modèle :** `gpt-6.1-sol` · profil `analyse` / effort `medium` · `TEST_BOUNDARY`  
**Coût :** usage tokens non remontés par l'adapter → **fallback €0,85 TTC / essai** (même règle campagne LIVE antérieure)

| ID | Hypothèse | Message | Résultat | Exception / validation | € TTC est. | Conclusion |
|---|---|---|---|---|---|---|
| EXP-01 | Repro exacte UAT-03 | exact | **UNKNOWN** | `PROVIDER_SCHEMA_OR_OUTPUT` · redacted generic Invalid output type · stream_drain · delivered=YES | 0,85 | Repro OK ; détail Zod redacted par SDK |
| EXP-02 | Déredacter Zod (DEV) | exact | **UNKNOWN** | path `visualComposition.blocks.1.steps.0.detail` · **Too big ≤400** | 0,85 | **H1 confirmée** |
| EXP-03 | Contrôle UAT-01 comparison | variante comparison | **COMPLETE** | kinds text+comparison | 0,85 | Pas une panne globale |
| EXP-04 | Retirer condition détail long | exact + contrainte phrases courtes | **COMPLETE** · sequence **6 steps** | — | 0,85 | **Condition causale isolée** |

**Total essais LIVE :** 4  
**Total estimé :** **€3,40 TTC** (fallback)  
**Aucun plafond atteint · aucune boucle**

## Preuve discriminante

1. Prompt UAT-03 exact → échec schema `steps.*.detail` max 400.  
2. Même intention + détail court → COMPLETE avec `sequence` 6 étapes.  
3. Comparison (UAT-01-like) → COMPLETE.

## Lien historique RECETTE

Même prompt, même phase `stream_drain`, `streaming_delivered=true`, `error_name` minifié `"h"` (= `ModelBehaviorError` en prod), catégorie historique `PROVIDER_ERROR` expliquée par lacune regex + redaction SDK.  
**ROOT CAUSE OF REPRODUCED FAILURE PROVEN.**  
**Historical UAT-03 :** lien causal **élevé** (même signature) — message Zod exact non récupérable sur traces RECETTE (redaction + minify).
