# ChatGPT Review Pack — SFIA Studio OpenAI GPT Spike (stabilisation finale verdict)

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 20:12:12 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery / implémentation · sous-cycle 9 — QA / validation live finale bornée |
| **Profil SFIA** | Critical |
| **Typologie** | INC — stabilisation finale du verdict GPT |
| **Branche spike** | `spike/sfia-studio-openai-gpt-adapter` (locale, **non pushée**) |
| **HEAD** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| **Review niveau** | full |

---

## GO Morris consommé

GO stabilisation finale bornée du verdict GPT :

- remplacer JSON mode par `json_schema` strict pour **S-GPT-10** ;
- imposer constantes, enums, types, required, `additionalProperties=false` conformément au contrat existant ;
- ne modifier ni assouplir le contrat ou le validateur ;
- conserver `gpt-5-mini`, Chat Completions, `max_completion_tokens=8192` ;
- ≤ 3 relances live · ≤ 6 appels OpenAI phase · 0 retry · aucun fallback ;
- aucun commit/push/PR de la branche spike.

---

## Truth Check

| Check | Résultat |
|-------|----------|
| `pwd` | `/Users/morris/Projects/sfia-workspace` |
| Branche | `spike/sfia-studio-openai-gpt-adapter` |
| `HEAD` | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| `origin/main` | idem |
| `merge-base` | idem |
| Staged | **aucun** |
| Remote spike | **absente** |
| Working tree | dirty volontaire (spike OpenAI cumulé) |
| Secrets dans code | redaction patterns only ; clé non affichée |
| Contrat/validateur assoupli | **non** |

**PASS**

---

## Sources

Git : `prompts/templates/sfia-cycle-execution-template.md` · branche `sfia/review-handoff` · handoff précédent `bd0fcd71…`

Local : `30-poc-gpt-openai-spike-report.md` · `07` · `28` · README · harness · `openaiRealSpike.ts` · `gptContracts.ts` · `gptOutputValidator.ts` · `run-spike.ts` · tests · prompts · preuves gitignored · compteur historique=8 avant phase.

---

## État initial prouvé (avant ce GO)

- Chat Completions · `gpt-5-mini` · `max_completion_tokens=8192` · pas de temperature · `response_format.json_object` · retries=0 · timeout 30s
- S-GPT-09 accepté ; S-GPT-10 rejeté fail-closed sur `schemaVersion: "gpt-spike-1.0.00"` vs attendu `"gpt-spike-1.0.0"`

---

## Contrat verdict de référence

Constante exacte : `GPT_CONTRACT_SCHEMA_VERSION = "gpt-spike-1.0.0"`

Interface `VerdictCandidate` — propriétés obligatoires listées dans `required` du schéma ci-dessous.  
Validateur : `validateVerdictCandidate` fail-closed ; **aucune** réparation silencieuse de schemaVersion.

Flags d’autorité optionnels (`decisionValidated`, etc.) : absents du schéma strict (donc absents de la sortie structurée) ; s’ils étaient présents ils devraient être `false` — le schéma les omet volontairement pour `additionalProperties: false`.

---

## Schéma JSON strict complet (`VERDICT_RESPONSE_FORMAT`)

```json
{
  "GPT_CONTRACT_SCHEMA_VERSION": "gpt-spike-1.0.0",
  "QUALIFICATION_RESPONSE_FORMAT": {
    "type": "json_object"
  },
  "VERDICT_RESPONSE_FORMAT": {
    "type": "json_schema",
    "json_schema": {
      "name": "verdict_candidate_gpt_spike_1_0_0",
      "strict": true,
      "schema": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "schemaVersion",
          "requestId",
          "correlationId",
          "status",
          "observations",
          "provenElements",
          "unprovenElements",
          "risks",
          "reserves",
          "recommendations",
          "decisionsRequiredFromMorris",
          "forbiddenClaimsDetected",
          "proposedVerdict",
          "modelMetadata"
        ],
        "properties": {
          "schemaVersion": {
            "type": "string",
            "enum": [
              "gpt-spike-1.0.0"
            ]
          },
          "requestId": {
            "type": "string"
          },
          "correlationId": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "OBSERVED",
              "PARTIAL",
              "INCONCLUSIVE",
              "FAILED",
              "READY_FOR_MORRIS_REVIEW"
            ]
          },
          "observations": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "provenElements": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "unprovenElements": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "risks": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "reserves": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "recommendations": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "decisionsRequiredFromMorris": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "forbiddenClaimsDetected": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "proposedVerdict": {
            "type": "string",
            "enum": [
              "PASS_WITH_RESERVES",
              "FAIL",
              "INCONCLUSIVE",
              "NEEDS_MORRIS_DECISION"
            ]
          },
          "modelMetadata": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "provider",
              "mechanism",
              "model",
              "experimental",
              "productionReadyClaimed"
            ],
            "properties": {
              "provider": {
                "type": "string",
                "enum": [
                  "openai-api"
                ]
              },
              "mechanism": {
                "type": "string",
                "enum": [
                  "openai-chat-completions-https"
                ]
              },
              "model": {
                "type": "string"
              },
              "experimental": {
                "type": "boolean",
                "enum": [
                  true
                ]
              },
              "productionReadyClaimed": {
                "type": "boolean",
                "enum": [
                  false
                ]
              }
            }
          }
        }
      }
    }
  }
}
```

Qualification conserve :

```json
{ "type": "json_object" }
```

---

## Correspondance contrat ↔ schéma

| Élément contrat | Schéma |
|-----------------|--------|
| `schemaVersion === "gpt-spike-1.0.0"` | `enum: ["gpt-spike-1.0.0"]` |
| `status` enums | identiques au validateur |
| `proposedVerdict` enums | identiques |
| 8 tableaux string | `type:array items:string` + required |
| `modelMetadata` openai | enums provider/mechanism ; experimental true ; productionReadyClaimed false |
| Pas de propriétés inconnues | `additionalProperties: false` racine + nested |
| Typo `gpt-spike-1.0.00` | **impossible** via schéma + rejeté par validateur (test unitaire) |

---

## Fichiers modifiés (ce GO)

- `projects/sfia-studio/harness/src/types/gptContracts.ts` — schéma technique + response formats
- `projects/sfia-studio/harness/src/ports/openaiRealSpike.ts` — response_format par scénario ; budgets phase
- `projects/sfia-studio/harness/spikes/gpt-openai/run-spike.ts` — compteurs phase/historique
- `projects/sfia-studio/harness/tests/gpt-openai-spike.test.ts` — 26 tests
- `projects/sfia-studio/harness/spikes/gpt-openai/prompts/verdict-system.md`
- `projects/sfia-studio/harness/README.md`
- `projects/sfia-studio/30-poc-gpt-openai-spike-report.md`
- `.tmp-sfia-review/chatgpt-review.md` (ce fichier)

**Non modifiés :** `gptOutputValidator.ts` (sémantique) · `package.json` ce cycle · `app/**` · endpoint · modèle

---

## Diffs utiles

### `gptContracts.ts` — schéma (extrait source)

```ts
export const VERDICT_CANDIDATE_JSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "schemaVersion",
    "requestId",
    "correlationId",
    "status",
    "observations",
    "provenElements",
    "unprovenElements",
    "risks",
    "reserves",
    "recommendations",
    "decisionsRequiredFromMorris",
    "forbiddenClaimsDetected",
    "proposedVerdict",
    "modelMetadata",
  ],
  properties: {
    schemaVersion: { type: "string", enum: [GPT_CONTRACT_SCHEMA_VERSION] },
    requestId: { type: "string" },
    correlationId: { type: "string" },
    status: {
      type: "string",
      enum: ["OBSERVED", "PARTIAL", "INCONCLUSIVE", "FAILED", "READY_FOR_MORRIS_REVIEW"],
    },
    observations: { type: "array", items: { type: "string" } },
    provenElements: { type: "array", items: { type: "string" } },
    unprovenElements: { type: "array", items: { type: "string" } },
    risks: { type: "array", items: { type: "string" } },
    reserves: { type: "array", items: { type: "string" } },
    recommendations: { type: "array", items: { type: "string" } },
    decisionsRequiredFromMorris: { type: "array", items: { type: "string" } },
    forbiddenClaimsDetected: { type: "array", items: { type: "string" } },
    proposedVerdict: {
      type: "string",
      enum: ["PASS_WITH_RESERVES", "FAIL", "INCONCLUSIVE", "NEEDS_MORRIS_DECISION"],
    },
    modelMetadata: {
      type: "object",
      additionalProperties: false,
      required: ["provider", "mechanism", "model", "experimental", "productionReadyClaimed"],
      properties: {
        provider: { type: "string", enum: ["openai-api"] },
        mechanism: { type: "string", enum: ["openai-chat-completions-https"] },
        model: { type: "string" },
        experimental: { type: "boolean", enum: [true] },
        productionReadyClaimed: { type: "boolean", enum: [false] },
      },
    },
  },
} as const;

export const VERDICT_RESPONSE_FORMAT = {
  type: "json_schema" as const,
  json_schema: {
    name: "verdict_candidate_gpt_spike_1_0_0",
    strict: true,
    schema: VERDICT_CANDIDATE_JSON_SCHEMA,
  },
};

export const QUALIFICATION_RESPONSE_FORMAT = {
  type: "json_object" as const,
};
```

### Snippet `reserveCycleCall+budget`
```ts
export function reserveCycleCall(counterPath: string, budget: number = CYCLE_CALL_BUDGET): number {
  mkdirSync(path.dirname(counterPath), { recursive: true });
  const current = readCycleCallCount(counterPath);
  if (current >= budget) {
    throw new HarnessError(
      "GPT_CYCLE_CALL_CAP",
      `OpenAI call budget exhausted (${budget}) at ${counterPath}; no further live calls`,
    );
  }
  const next = current + 1;
  writeFileSync(
    counterPath,
    JSON.stringify({ count: next, updatedAt: new Date().toISOString(), budget }, null, 2),
  );
  return next;
}
```

### Snippet `callOnce responseFormat`
```ts
private async callOnce(
    system: string,
    userPayload: unknown,
    model: string,
    apiKey: string,
    responseFormat: typeof QUALIFICATION_RESPONSE_FORMAT | typeof VERDICT_RESPONSE_FORMAT,
  ): Promise<{
    content: string;
    usage: GPTUsageSummary;
    responseObservation: GPTResponseObservation;
    cycleCallNumber: number;
  }> {
    let cycleCallNumber = liveCallCount + 1;
    if (this.cycleCounterPath) {
      cycleCallNumber = reserveCycleCall(this.cycleCounterPath, this.cycleCallBudget);
    }
    if (this.historicalCounterPath) {
      reserveCycleCall(this.historicalCounterPath, Number.MAX_SAFE_INTEGER);
    }
    liveCallCount += 1;
    const body = {
      model,
      max_completion_tokens: this.maxCompletionTokens,
      response_format: responseFormat,
      messages: [
        { role: "system", content: system },
        { role: "user", content: JSON.stringify(userPayload) },
      ],
    };
    let res: { ok: boolean; status: number; text: string; durationMs: number };
    try {
      res = await this.transport(body, { timeoutMs: this.timeoutMs, apiKey });
    } catch (e) {
      if (e instanceof HarnessError) throw e;
      throw new HarnessError("GPT_HTTP_ERROR", String(e), { cycleCallNumber });
    }
    if (!res.ok) {
      const evidence = extractOpenAiHttpErrorEvidence({
        status: res.status,
        bodyText: res.text,
        durationMs: res.durationMs,
      });
      throw new HarnessError("GPT_HTTP_ERROR", `OpenAI HTTP ${evidence.httpStatus}: ${evidence.messageSanitized}`, {
        httpStatus: evidence.httpStatus,
        apiCode: evidence.apiCode,
        apiType: evidence.apiType,
        messageSanitized: evidence.messageSanitized,
        durationMs: evidence.durationMs,
        bodyLen: evidence.bodyLen,
        cycleCallNumber,
      });
    }
    const data = parseStrictJson(res.text) as Record<string, unknown>;
    let content = "";
    let rawContent: unknown = undefined;
    try {
      const extracted = extractMessageContent(data);
      content = extracted.content;
      rawContent = extracted.rawContent;
    } catch (e) {
      const msg = (data.choices as unknown[])?.[0] as { message?: { content?: unknown } } | undefined;
      rawContent = msg?.message?.content;
      const observation = observeChatCompletionResponse({
        data,
        durationMs: res.durationMs,
        content: rawContent,
      });
      const err = e instanceof HarnessError ? e : new HarnessError("GPT_INVALID_JSON", String(e));
      throw new HarnessError(err.code, err.message, {
        ...err.detail,
        responseObservation: observation,
        cycleCallNumber,
      });
    }
    const usage = parseUsage(data, res.durationMs, model);
    const responseObservation = observeChatCompletionResponse({
      data,
      durationMs: res.durationMs,
      content: rawContent,
    });
    if (!content.trim()) {
      throw new HarnessError("GPT_INVALID_JSON", "Empty message.content", {
        responseObservation,
        cycleCallNumber,
      });
    }
    return { content, usage, responseObservation, cycleCallNumber };
  }
```


### `run-spike.ts` — compteurs

```ts
const PHASE_COUNTER = path.join(PROOF, ".phase-verdict-stabilization-calls.json");
```

---

## Tests

Commandes : `npm run typecheck` · `npx vitest run tests/gpt-openai-spike.test.ts` · `npm run build` · fixture `npm run spike:gpt-openai` (flags off)

Résultat : **26/26 pass** · typecheck OK · build OK · fixture live NON_EXECUTED · fixture qual/verdict OK

Couverture ajoutée : formats S-GPT-09 vs S-GPT-10 · schéma required/additionalProperties/enums · rejet `gpt-spike-1.0.00` · budget phase 6

---

## Tableau des relances (phase)

| Relance | Correctif | Appels | S-GPT-09 | S-GPT-10 | Notes |
|---------|-----------|--------|----------|----------|-------|
| 1 | `json_schema` strict verdict | 2 | SUCCEEDED | SUCCEEDED | STOP immédiat |

Limites phase : 1/3 relances · **2/6** appels · 0 retry

---

## Compteurs

| Compteur | Fichier | Valeur |
|----------|---------|--------|
| Phase (ce GO) | `.phase-verdict-stabilization-calls.json` | **2** / budget 6 |
| Historique cumulé | `.cycle-openai-calls.json` | **10** (était 8 avant phase) |

Ne pas confondre les deux.

---

## Résultats S-GPT-09 / S-GPT-10 (même run)

Preuve : `run-1784484725229.json`

```json
{
  "experimental": true,
  "productionReadyClaimed": false,
  "cursorRealInvoked": false,
  "apiKeyDefined": true,
  "modelDefined": true,
  "modelValue": "gpt-5-mini",
  "maxCompletionTokens": 8192,
  "phaseCallCount": 2,
  "phaseCallBudget": 6,
  "historicalCallCount": 10,
  "liveGateSatisfied": true,
  "stopReason": null,
  "fixtureQualificationOk": true,
  "fixtureVerdictOk": true,
  "liveQualification": {
    "ok": true,
    "status": "SUCCEEDED",
    "usage": {
      "inputTokens": 705,
      "outputTokens": 2586,
      "totalTokens": 3291,
      "reasoningTokens": 1856,
      "modelReturned": "gpt-5-mini-2025-08-07",
      "responseIdRedacted": "redacted:chatcm…VKZ8",
      "durationMs": 23303,
      "monetaryCostClaimed": false
    },
    "responseObservation": {
      "httpStatus": 200,
      "modelReturned": "gpt-5-mini-2025-08-07",
      "responseIdRedacted": "redacted:chatcm…VKZ8",
      "finishReason": "stop",
      "contentType": "string",
      "contentLength": 2759,
      "contentPreviewSanitized": "{\n  \"schemaVersion\": \"gpt-spike-1.0.0\",\n  \"requestId\": \"req-gpt-s1-001\",\n  \"correlationId\": \"corr-gpt-s1-001\",\n  \"proposedCycle\": \"Cycle 7\",\n  \"proposedProfile\": \"Standard\",\n  \"profileJustification\": \"Lecture seule d'un fixture synthétique et production d'une synthèse locale dans le répertoire de preuve. Le profil Standard offre un équilibre entre vérification et rapidité sans exiger contrôles critiques supplémentaires.\",\n  \"objective\": \"Analyser en lecture seule le document fixtures/input.md du…[truncated]",
      "hasMarkdownFence": false,
      "looksLikeJsonObject": true,
      "refusalPresent": false,
      "reasoningTokens": 1856,
      "durationMs": 23303
    },
    "retriesAttempted": 0,
    "liveInvoked": true,
    "cycleCallNumber": 1,
    "validatorAccepted": true
  },
  "liveVerdict": {
    "ok": true,
    "status": "SUCCEEDED",
    "usage": {
      "inputTokens": 1502,
      "outputTokens": 2397,
      "totalTokens": 3899,
      "reasoningTokens": 1536,
      "modelReturned": "gpt-5-mini-2025-08-07",
      "responseIdRedacted": "redacted:chatcm…O5HB",
      "durationMs": 16766,
      "monetaryCostClaimed": false
    },
    "responseObservation": {
      "httpStatus": 200,
      "modelReturned": "gpt-5-mini-2025-08-07",
      "responseIdRedacted": "redacted:chatcm…O5HB",
      "finishReason": "stop",
      "contentType": "string",
      "contentLength": 3297,
      "contentPreviewSanitized": "{\n  \"schemaVersion\": \"gpt-spike-1.0.0\",\n  \"requestId\": \"req-gpt-s1-001\",\n  \"correlationId\": \"corr-gpt-s1-001\",\n  \"status\": \"READY_FOR_MORRIS_REVIEW\",\n  \"observations\": [\n    \"Contrat validé (contractValidated: true).\",\n    \"Fichier fixture autorisé en lecture: projects/sfia-studio/harness/spikes/gpt-openai/fixtures/input.md.\",\n    \"Répertoire proofs listé dans allowedWritePaths mais écriture soumise à accord explicite de Morris.\",\n    \"Gate requis: GO-MORRIS-EXECUTE-AFTER-CONTRACT (Morris est l'…[truncated]",
      "hasMarkdownFence": false,
      "looksLikeJsonObject": true,
      "refusalPresent": false,
      "reasoningTokens": 1536,
      "durationMs": 16766
    },
    "retriesAttempted": 0,
    "liveInvoked": true,
    "cycleCallNumber": 2,
    "validatorAccepted": true
  }
}
```

| | S-GPT-09 | S-GPT-10 |
|--|----------|----------|
| HTTP | 200 | 200 |
| Modèle | gpt-5-mini-2025-08-07 | gpt-5-mini-2025-08-07 |
| Finish | stop | stop |
| Tokens in/out/total/reasoning | 705 / 2586 / 3291 / 1856 | 1502 / 2397 / 3899 / 1536 |
| Durée ms | 23303 | 16766 |
| JSON syntaxe | OK | OK |
| Contrat | accepté | accepté |
| schemaVersion | gpt-spike-1.0.0 | gpt-spike-1.0.0 |
| response_format | json_object | **json_schema strict** |

---

## Invariants

- `productionReadyClaimed=false`
- `mergeAuthorized=false` (non revendiqué)
- `cursorRealInvoked=false`
- `retriesAttempted=0`
- Morris seule autorité · Git source de vérité
- Aucune réparation silencieuse schemaVersion
- Aucun champ injecté pour « faire passer » le validateur avant overwrite metadata technique adapter (metadata post-réponse inchangée vs cycles précédents)

---

## Sécurité

- Clé définie, jamais affichée
- Preuves sanitisées (preview ≤500, responseId redacted)
- Scan : patterns de redaction ; tests utilisent fausses clés `sk-test*`

## FinOps

- Phase : 2 appels · historique : 10
- `max_completion_tokens=8192` · timeout 30s
- Coût monétaire **non inventé** (`monetaryCostClaimed=false`)

## Fixture

Défaut inchangé sans flags live.

---

## Réserves

- Spike non versionné / pas de PR
- Cursor réel non invoqué
- Qual reste `json_object`
- Non-déterminisme GPT

## Décisions Morris restantes

1. GO end-to-end Cursor réel combiné
2. Versionnement / PR spike
3. Migration Responses API / SDK / autre modèle
4. Migration optionnelle S-GPT-09 → json_schema

---

## Verdict final

`GPT OPENAI LIVE SPIKE PROVEN WITH RESERVES — END-TO-END CURSOR DECISION REQUIRED`

Instruction pour ChatGPT : lire depuis Git la branche `sfia/review-handoff` et le fichier `sfia-review-handoff/latest-chatgpt-review.md` avant de prononcer un verdict indépendant.

Aucun secret dans ce pack.
