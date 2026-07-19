# ChatGPT Review Pack — SFIA Studio Cycle 8/9 OpenAI Corrective + Live Relaunch Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 19:30:30 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery / correctif adaptateur · sous-cycle 9 QA live |
| **Profil** | Critical |
| **Décision Morris** | GO correctif adaptateur OpenAI + une relance live bornée |
| **Branche spike** | `spike/sfia-studio-openai-gpt-adapter` (locale — **aucun** commit/push/PR) |
| **HEAD / base / origin/main** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| **Niveau** | full |
| **Handoff** | required |

---

## 1. Truth Check — PASS

```
pwd=/Users/morris/Projects/sfia-workspace
branch=spike/sfia-studio-openai-gpt-adapter
HEAD=origin/main=dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957
staged=aucun
remote spike=absente
```

Working tree = spike GPT/OpenAI local uniquement (+ `.tmp-sfia-review/`).

---

## 2. Sources

- Template cycle SFIA  
- `origin/sfia/review-handoff` (pack Cycle 9 précédent — échec sans cause)  
- `30`, `07`, `28`, README, harness README, `package.json`  
- `run-spike.ts`, `openaiRealSpike.ts`, `gptContracts.ts`, `gptOutputValidator.ts`, tests, prompts  
- Preuve runtime précédente (sans httpError)

---

## 3. Diagnostic du défaut de preuve

1. Transport renvoie `status` + `text`.  
2. Avant correctif, `callOnce` jetait `HarnessError` avec seulement `detail.status` (nommé `status`) + `bodyLen` — **sans** parser `error.message/code/type`.  
3. `qualify`/`verdict` exposaient `errorMessage` mais **pas** `detail`.  
4. `run-spike.ts` ne sérialisait que `errorCode` → **perte totale** du statut HTTP et du message dans la preuve.

**Cause du défaut de sérialisation :** pipeline de preuve incomplet (pas un problème d’auth ni d’endpoint).

---

## 4. Correctif de preuve (exact)

### Ajouts dans `openaiRealSpike.ts`

- `sanitizeOpenAiErrorText` — redaction Bearer / `sk-…` / `OPENAI_API_KEY=` + troncature 400.  
- `extractOpenAiHttpErrorEvidence` — parse JSON d’erreur OpenAI.  
- `GPTHttpErrorEvidence` sur `GPTCallResult`.  
- Sur `!res.ok` : remplit `httpStatus`, `apiCode`, `apiType`, `messageSanitized`, `durationMs`, `bodyLen`.

### `run-spike.ts`

Sérialise désormais : `errorMessage`, `httpError`, `retriesAttempted`, `liveInvoked`, `validatorAccepted`.

### Payload

**Non modifié** (relance unique consommée par le diagnostic ; 2ᵉ live interdit).

Corps live inchangé :

```ts
{
  model,
  temperature: 0,
  max_tokens: 2048,
  response_format: { type: "json_object" },
  messages: [...]
}
```

---

## 5. Cause racine HTTP exacte (après relance)

```json
{
  "ok": false,
  "status": "FAILED",
  "errorCode": "GPT_HTTP_ERROR",
  "errorMessage": "OpenAI HTTP 400: Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.",
  "httpError": {
    "httpStatus": 400,
    "apiCode": "unsupported_parameter",
    "apiType": "invalid_request_error",
    "messageSanitized": "Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.",
    "durationMs": 253,
    "bodyLen": 245
  },
  "retriesAttempted": 0,
  "liveInvoked": true,
  "validatorAccepted": false
}
```

**Cause démontrée :** `max_tokens` incompatible avec `gpt-5-mini` ; API demande `max_completion_tokens`.

### Hypothèses rejetées comme correctif immédiat

| Hypothèse | Statut |
|-----------|--------|
| Auth / clé invalide | Rejetée (400 + message paramètre) |
| Endpoint inexistant | Rejetée |
| `temperature` | Non cité par l’erreur — **non modifié** |
| `response_format` | Non cité — **non modifié** |
| Changement de modèle / Responses API | Hors GO |

---

## 6. Fichiers modifiés (ce cycle)

| Fichier | Rôle |
|---------|------|
| `harness/src/ports/openaiRealSpike.ts` | Sanitation + evidence HTTP |
| `harness/src/types/gptContracts.ts` | Type `GPTHttpErrorEvidence` |
| `harness/spikes/gpt-openai/run-spike.ts` | Sérialisation preuve |
| `harness/tests/gpt-openai-spike.test.ts` | Tests sanitation + httpError |
| `projects/sfia-studio/30-poc-gpt-openai-spike-report.md` | Rapport complet |
| `.tmp-sfia-review/chatgpt-review.md` | Ce pack |

### Extrait correctif `callOnce` (échec HTTP)

```typescript
if (!res.ok) {
  const evidence = extractOpenAiHttpErrorEvidence({
    status: res.status,
    bodyText: res.text,
    durationMs: res.durationMs,
  });
  throw new HarnessError(
    "GPT_HTTP_ERROR",
    `OpenAI HTTP ${evidence.httpStatus}: ${evidence.messageSanitized}`,
    {
      httpStatus: evidence.httpStatus,
      apiCode: evidence.apiCode,
      apiType: evidence.apiType,
      messageSanitized: evidence.messageSanitized,
      durationMs: evidence.durationMs,
      bodyLen: evidence.bodyLen,
    },
  );
}
```

### Extrait sanitation

```typescript
export function sanitizeOpenAiErrorText(raw: string, maxLen = 400): string {
  let s = raw
    .replace(/Authorization:\s*Bearer\s+\S+/gi, "Authorization: Bearer [REDACTED]")
    .replace(/Bearer\s+[A-Za-z0-9._-]{10,}/g, "Bearer [REDACTED]")
    .replace(/OPENAI_API_KEY\s*=\s*\S+/gi, "OPENAI_API_KEY=[REDACTED]")
    .replace(/sk-[a-zA-Z0-9_-]{10,}/g, "sk-[REDACTED]");
  if (s.length > maxLen) s = `${s.slice(0, maxLen)}…[truncated]`;
  return s;
}
```

---

## 7. Tests

| Suite | Résultat |
|-------|----------|
| GPT ciblés | **18 passed** |
| Sanitation (Bearer, sk-, truncate, extract, no key in result, fixture inchangée) | **PASS** |
| typecheck / build | **OK** |
| Fixture défaut sans flags | live NON_EXECUTED |

---

## 8. Commande live logique

```bash
SFIA_GPT_REAL_SPIKE=1 SFIA_GPT_REAL_LIVE=1 npm run spike:gpt-openai
```

- Relances live : **1**  
- Appels OpenAI : **1**  
- Retries : **0**  
- Timeout : 30s  
- S-GPT-10 : **NON EXÉCUTÉ**

---

## 9. FinOps / perf / sécurité

- Tokens : N/A (échec 400)  
- Coût inventé : non  
- Durée appel : 253 ms  
- Aucun secret dans preuve/rapport  
- Cursor réel : non  
- app/** : intact  
- Docker : absent  

---

## 10. Invariants

Aucun contrat/verdict live accepté.  
`productionReadyClaimed=false`.  
Validateur fail-closed non affaibli.

---

## 11. Rapport `30` — contenu modifié exploitable

Rapport intégralement mis à jour (horodatage 19:30:10 CEST) : sections diagnostic sérialisation, correctif preuve, cause HTTP 400 `max_tokens`, absence de correctif payload, S-GPT-09/10, FinOps, verdict.

Chemin : `projects/sfia-studio/30-poc-gpt-openai-spike-report.md`

---

## 12. Décisions Morris encore requises

1. **GO** : remplacer `max_tokens` par `max_completion_tokens` + **une** nouvelle relance live.  
2. Versionnement spike / PR / merge — fermés.  
3. Bout-en-bout — fermé.

---

## 13. Verdict

`GPT OPENAI LIVE ROOT CAUSE CAPTURED — FURTHER CORRECTIVE DECISION REQUIRED`

Statut : **NOT READY** (live positif) · preuve d’erreur **READY**.

Interdits : CHATGPT APP INTEGRATED · GPT PRODUCTION READY · POC COMPLETE · END-TO-END PROVEN · CURSOR REAL COMBINED · STUDIO UI COMPLETE · READY FOR MERGE · GPT OPENAI LIVE SPIKE PROVEN.

---

## 14. Instruction ChatGPT

ChatGPT doit lire obligatoirement depuis Git la branche `sfia/review-handoff` et le fichier `sfia-review-handoff/latest-chatgpt-review.md` avant de prononcer un verdict.
