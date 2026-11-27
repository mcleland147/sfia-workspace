# Cartographie de complétude ML1/ML2 — consolidation 2026-11-27

| Capacité | Contrat | Implémentation | Consommateurs réels | Cycle de vie | Niveau | Écart | Action |
|---|---|---|---|---|---|---|---|
| Decisions bornés | CF §4 / CT | `bounded-judgment.ts` | D8 `d8-cognitive-criterion-eval` | flag OFF défaut | wired / available | C/F RECETTE pertinence | KEEP |
| Fallback Responses | CF | dans `runBoundedJudgment` | D8 | — | wired | — | KEEP |
| Embeddings + hybrid | Arch E lock | `derived-embedding-*` + `hybrid-knowledge-search` | `d4-read-tools.searchProjectResources` · `journal/search` · `selectRelevantKnowledgeContext` (supplément) | **upsert produit** capitalize/openPoint + revoke supersede · rebuild scripts | available (flag) | B→corrigé lifecycle | ADAPT done |
| Index PG 027 | GO A | `derived_embedding_chunks` | search PG | reconstructible | available | — | KEEP |
| Droits/fingerprint | F23 | hybrid re-read + fp filter | hybridSearch | concurrent revoke | unit+parcours | — | KEEP |
| Vision ponctuelle | CF | `document-vision-punctual.ts` | `git-read-tools.read_git_pdf` | flag OFF | wired | F RECETTE schémas | KEEP |
| Frontier commun | CT | `createFrontierBoundOpenAIClient` | judgment · embeddings · vision · Nora | campaign only if `SFIA_G_LIVE_API` | available | expérimentale ≠ produit | KEEP |
| Allocation cognitive | ML1 | policy + admitModelEffort | Nora adapter | — | available | F RECETTE | KEEP |
| Conducteur D3 V1 | ML1 | cognitive-conductor / work | postUserMessageAndNora | lease/CAS | available | F RECETTE | KEEP |
| FinOps usages | CT | usage-accounting | rebuild/upsert/judgment/vision | PARTIAL tariff | available | C Admin reserve | KEEP |
| WEB | ML1 | public-web | Nora | LIVE OFF | preserved | — | KEEP |
| VS / File Search | DEFER | — | — | — | deferred | — | DEFER |
| Audio ML3 | OUT | — | — | — | not started | — | OUT |

## Écarts classés (mandat §6)

| Id | Classe | Description | Traitement |
|---|---|---|---|
| LIFECYCLE-01 | A défaut réel | Rebuild index uniquement via scripts ; capitalize ne faisait que revoke | **Corrigé** : `upsertDerivedAdmissibleSource` + wiring capitalize/openPoint |
| CONTEXT-01 | B couverture | `selectRelevantKnowledgeContext` sans canal hybrid | **Corrigé** : supplément DERIVED_HIT si flag ON |
| FINOPS-IDEM-01 | B | `callOrdinal: Date.now()` sur rebuild | **Corrigé** : ordinal stable fingerprint |
| EXP-TOKENS-01 | E tooling | Campagne LIVE tokens reserved→committed sans mesure | Documenté ; Frontier commentaire clarifié ; **pas** de nouvelle campagne |
| EXP-EMB-FAM-01 | E/D | Famille embeddings 12/12 saturée sous flag search + multi-tool D4 | Limite **expérimentale** ; produit sans campaign familyHttp |
| F25-REST-01 | F RECETTE | Restitution Nora COMPLETE non obtenue en DEV LIVE | QUALIFICATION RECETTE REQUIRED |
| TYPECHECK-BASELINE | E | Erreurs tsc historiques hors ML2 | non bloquant delivery ; pas de remédiation générale |

## Protections produit vs campagne

| Mécanisme | Produit | Campagne expérimentale |
|---|---|---|
| Cognitive max tokens / reeval / segments | `cognitiveEnvelopeLimits` 2M / 1M / 120 | non |
| Frontier campaign envelope | seulement si `SFIA_G_LIVE_API` ou WEB gate | oui |
| familyHttp | null hors campagne | oui (ML2 LIVE) |
| Flags SEARCH/JUDGMENT/VISION | OFF défaut | ON temporaire qualify |

## Dépendances ML3 (préparation, non engagement)

- Frontier + Responses path stable
- D3 continuity V1
- D4/D9 rights
- FinOps attribution
- Pas d’audio/Realtime dans ce delivery
