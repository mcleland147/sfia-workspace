# Diagnostic causal UAT-03

## Cause racine (démontrée sur reproduction LIVE)

Le modèle produit une composition `sequence` dont au moins un `steps[n].detail` **dépasse 400 caractères**.  
La validation Zod du schéma Agent (`NoraTurnQualificationAgentSchema` → `visual-composition` sequence) échoue.  
`@openai/agents` 0.21.0 lève `ModelBehaviorError` pendant la finalisation du stream (`stream_drain`, chunks déjà livrés).  
Le catch D3 classe UNKNOWN (fail-closed, une tentative).

**Chemin exact (EXP-02) :**  
`visualComposition.blocks.1.steps.0.detail` — `Too big: expected string to have <=400 characters`.

## Localisation

| Couche | Élément |
|---|---|
| Contrat applicatif | `visual-composition.ts` — `detail: z.string().max(400)` sur steps sequence |
| SDK | `agents-core` `processFinalOutput` / `formatFinalOutputTypeError` |
| Adapter | `nora-adapter.ts` catch stream → UNKNOWN |
| Observabilité historique | regex ratant `Invalid output type` ; `dontLogModelData` redacte le path Zod ; `new.target.name` minify → `"h"` |

## Pourquoi UAT-01 / UAT-02 ont réussi

Ils ont produit des compositions **comparison** (champs plus courts / autre forme), pas une sequence dense « résultats + vigilance » par étape.  
EXP-03 (comparison) COMPLETE ; EXP-04 (sequence 6 steps, détails courts) COMPLETE.

## Pourquoi `PROVIDER_ERROR` en RECETTE

1. Message SDK souvent redacted : `Invalid output type: final assistant output did not match the expected schema.`  
2. Même avec path : ancienne regex exigeait `output_type` (underscore) et ratait `output type`.  
3. Nom d'erreur minifié `"h"`.

## Messages UNKNOWN historiques

Ne pas relancer ni requalifier automatiquement. Conserver tels quels. Nouveau candidat après correctif seulement.

## Verdict

`ROOT CAUSE OF REPRODUCED FAILURE PROVEN`  
Lien historique UAT-03a/b : **élevé / quasi certain** (même prompt, même phase, même classe d'échec).
