# SFIA Studio — Spike GPT / OpenAI (Cycle 8/9 — stabilisation finale verdict `json_schema`)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `30-poc-gpt-openai-spike-report.md` |
| **Horodatage** | 2026-07-19 20:12:12 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery · sous-cycle 9 QA live finale bornée |
| **Profil** | Critical |
| **Branche** | `spike/sfia-studio-openai-gpt-adapter` (**locale, non versionnée**) |
| **HEAD / base** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` = `origin/main` |
| **Décision Morris** | GO stabilisation finale bornée du verdict GPT (`json_schema` strict S-GPT-10) |
| **Marqueur** | EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION |

---

## 1. Truth Check

**PASS** — `pwd` workspace · branche spike · HEAD = `origin/main` = `dce5a41…` · working tree volontairement dirty · aucun staged · remote spike absente · pas de secret dans le diff code.

## 2. Décision Morris consommée

GO stabilisation finale bornée :

- `json_schema` strict pour **S-GPT-10 uniquement**
- conserver config prouvée S-GPT-09 (`json_object`, `gpt-5-mini`, Chat Completions, `max_completion_tokens=8192`)
- ≤ 3 relances · ≤ 6 appels phase · 0 retry · aucun fallback · aucun assouplissement contrat/validateur

## 3. Configuration finale prouvée (même run)

| Scénario | `response_format` | Modèle | Tokens max | Timeout | Retries |
|----------|-------------------|--------|------------|---------|---------|
| S-GPT-09 qualification | `{ type: "json_object" }` | `gpt-5-mini` | 8192 | 30s | 0 |
| S-GPT-10 verdict | `{ type: "json_schema", json_schema: { name, strict: true, schema } }` | idem | 8192 | 30s | 0 |

Pas de `temperature`. Endpoint : `https://api.openai.com/v1/chat/completions`.

## 4. Contrat verdict de référence

`GPT_CONTRACT_SCHEMA_VERSION = "gpt-spike-1.0.0"` (exact ; typo `gpt-spike-1.0.00` rejetée).

Champs obligatoires `VerdictCandidate` : schemaVersion, requestId, correlationId, status, observations, provenElements, unprovenElements, risks, reserves, recommendations, decisionsRequiredFromMorris, forbiddenClaimsDetected, proposedVerdict, modelMetadata.

## 5. Schéma strict

Export `VERDICT_CANDIDATE_JSON_SCHEMA` / `VERDICT_RESPONSE_FORMAT` dans `gptContracts.ts` :

- `additionalProperties: false` (objet racine + modelMetadata)
- `schemaVersion` enum = `["gpt-spike-1.0.0"]`
- enums status / proposedVerdict alignés validateur
- tableaux string obligatoires
- modelMetadata : provider/mechanism enums openai, experimental=true, productionReadyClaimed=false
- **aucune** réparation post-génération de `schemaVersion`

## 6. Relances phase (nouvelle)

| # | Correctif | Appels phase | S-GPT-09 | S-GPT-10 |
|---|-----------|--------------|----------|----------|
| 1 | `json_schema` strict verdict + compteurs phase/historique | **2** | **SUCCEEDED** | **SUCCEEDED** |

**STOP immédiat après succès** — 1/3 relances · 2/6 appels phase.

Compteurs :

- phase : `proofs/.phase-verdict-stabilization-calls.json` → **2** / 6
- historique : `proofs/.cycle-openai-calls.json` → **10** (preuve cumulative ; non confondre avec budget phase)

## 7. Preuves live (relance 1)

### S-GPT-09

- HTTP **200** · `finishReason=stop` · JSON valide · contrat **accepté**
- usage : in 705 / out 2586 / total 3291 / reasoning 1856 · **23303 ms**
- `schemaVersion: gpt-spike-1.0.0` · `validatorAccepted=true`

### S-GPT-10

- HTTP **200** · sortie via **json_schema strict** · `finishReason=stop`
- usage : in 1502 / out 2397 / total 3899 / reasoning 1536 · **16766 ms**
- `schemaVersion: gpt-spike-1.0.0` (exact) · contrat verdict **accepté**
- aucune autorité indue · `productionReadyClaimed=false`

Preuve runtime : `spikes/gpt-openai/proofs/run-1784484725229.json` (gitignored).

## 8. Tests / contrôles locaux

- typecheck · vitest GPT **26** pass · build · fixture sans flags (live NON_EXECUTED)
- tests schéma : required, additionalProperties false, séparation qual/verdict formats, rejet typo `1.0.00`, budget phase 6

## 9. Sécurité / FinOps / autorité

- `OPENAI_API_KEY_defined=true` · modèle `gpt-5-mini` · clé jamais affichée
- 0 retry · coût monétaire **non inventé**
- `cursorRealInvoked=false` · `mergeAuthorized=false` · fixture défaut inchangée
- validateur **non assoupli** · contrat métier **inchangé**

## 10. Fichiers touchés (ce GO)

- `harness/src/types/gptContracts.ts` — schéma technique (sans changer sémantique métier)
- `harness/src/ports/openaiRealSpike.ts` — response_format par scénario + budgets
- `harness/spikes/gpt-openai/run-spike.ts` — compteurs phase/historique
- `harness/tests/gpt-openai-spike.test.ts`
- `harness/spikes/gpt-openai/prompts/verdict-system.md`
- ce rapport · review pack

## 11. Réserves

- Spike local non versionné · pas de PR · pas de merge
- Flux **Cursor réel** non invoqué
- Qualification reste en `json_object` (non migrée sauf nécessité — non requise)
- Non-déterminisme GPT · live facturé

## 12. Décisions Morris restantes

1. GO bout-en-bout GPT → Cursor réel → Git → GPT (si souhaité)
2. Versionnement / PR de la branche spike
3. Migration éventuelle Responses API / SDK / autre modèle — **fermés** sans nouveau GO
4. Migration S-GPT-09 vers `json_schema` — optionnelle, hors GO consommé

## 13. Verdict

`GPT OPENAI LIVE SPIKE PROVEN WITH RESERVES — END-TO-END CURSOR DECISION REQUIRED`

Statut : **READY WITH RESERVES** pour le flux fixture → qualification live → verdict live sous contrats stricts.
**NOT** production ready · **NOT** merge · **NOT** Cursor réel combiné.

Ne pas conclure : CHATGPT APP INTEGRATED · GPT PRODUCTION READY · POC COMPLETE · FULL END-TO-END PROVEN · CURSOR REAL COMBINED · STUDIO UI COMPLETE · READY FOR MERGE.
