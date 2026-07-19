# ChatGPT Review Pack — SFIA Studio Cycle 8/9 Autonomous OpenAI Stabilization Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 20:04:34 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery / stabilisation · sous-cycle 9 QA autonome bornée |
| **Profil** | Critical |
| **Décision Morris** | GO cycle autonome borné de stabilisation du spike OpenAI |
| **Branche spike** | `spike/sfia-studio-openai-gpt-adapter` (locale — **aucun** commit/push/PR) |
| **HEAD / base** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| **Niveau** | full |
| **Handoff** | required |

---

## 1. Truth Check — PASS

```
branch=spike/sfia-studio-openai-gpt-adapter
HEAD=origin/main=dce5a41…
staged=aucun
remote spike=absente
```

---

## 2. Limites

| Limite | Consommé | Max |
|--------|----------|-----|
| Relances | **5** | 5 |
| Appels OpenAI | **8** | 10 |
| Retries | 0 | 0 |
| max_completion_tokens | 8192 | 8192 |

---

## 3. Cause exacte de GPT_INVALID_JSON initial

Relance 1 observation :

```json
{
  "errorCode": "GPT_INVALID_JSON",
  "errorMessage": "Empty message.content",
  "responseObservation": {
    "httpStatus": 200,
    "finishReason": "length",
    "contentLength": 0,
    "reasoningTokens": 2048,
    "modelReturned": "gpt-5-mini-2025-08-07"
  }
}
```

**Cause :** tokens de raisonnement saturent `max_completion_tokens=2048` → contenu vide.

---

## 4. Tableau des itérations

| # | Observation | Correctif | Appels | Qual | Verdict |
|---|-------------|-----------|--------|------|---------|
| 1 | empty + length + reasoning=2048 | observabilité + prompts JSON | 1 | FAIL | — |
| 2 | budget insuffisant | max_completion_tokens=8192 | 2 | **OK** | FAIL GPT_ENUM status |
| 3 | options non-string | enums verdict | 1 | FAIL options[0] | — |
| 4 | arrays objects | string arrays qual | 2 | **OK** | FAIL forbiddenClaimsDetected |
| 5 | champ array manquant | arrays obligatoires | 2 | **OK** | FAIL schemaVersion `1.0.00` |

---

## 5. Correctifs techniques (diff utiles)

### Observabilité

- `GPTResponseObservation` : finishReason, usage, reasoningTokens, preview≤500, fences, looksLikeJsonObject  
- Sérialisé dans `run-spike.ts` même en échec post-HTTP  

### Compteur cycle

- `proofs/.cycle-openai-calls.json` · budget 10 · `GPT_CYCLE_CALL_CAP`  

### Payload final

```diff
- max_completion_tokens: 2048
+ max_completion_tokens: 8192  // défaut runner ; env SFIA_GPT_MAX_COMPLETION_TOKENS
  // temperature déjà absent
  response_format: { type: "json_object" }
```

### Prompts

- Qualification : enums cycle/profil + **tableaux de strings uniquement**  
- Verdict : enums status/proposedVerdict + **tous les tableaux obligatoires** (`[]` si vide)  

### Validateurs

**Non assouplis.** Échecs schéma correctement rejetés.

---

## 6. Résultats finaux (relance 5)

### S-GPT-09 — PROUVÉ

- HTTP 200 · stop · contrat accepté  
- tokens : 705 / 2346 / 3051 · reasoning 1536 · 15,4 s  
- `validatorAccepted=true`  

### S-GPT-10 — INCOMPLET

- HTTP 200 · JSON syntaxique  
- preview : `"schemaVersion": "gpt-spike-1.0.00"`  
- rejet : `schemaVersion mismatch`  
- fail-closed OK · **pas de réparation silencieuse**  

---

## 7. Fichiers modifiés

| Fichier | Justification |
|---------|---------------|
| `openaiRealSpike.ts` | observabilité, compteur, prompts, budget |
| `run-spike.ts` | preuve enrichie, défaut 8192 |
| `gptContracts.ts` | type observation |
| `gpt-openai-spike.test.ts` | 22 tests |
| prompts `*.md` | alignement technique |
| `30-poc-gpt-openai-spike-report.md` | rapport |
| ce pack | review |

---

## 8. Sécurité / FinOps / fixture

- Aucun secret · fixture défaut OK · Cursor réel non invoqué · `app/**` intact  
- 8 appels · coût non inventé · `productionReadyClaimed=false`  

---

## 9. Décisions Morris encore requises

1. **Nouveau GO** pour 6ᵉ+ relance / correctif verdict (`schemaVersion` exact ou `json_schema` strict).  
2. Versionnement spike / bout-en-bout / Cursor réel — fermés.  

---

## 10. Verdict

`GPT OPENAI LIVE QUALIFICATION PROVEN — VERDICT STABILIZATION INCOMPLETE`

Aussi applicable : limite de relances atteinte.

Interdits : CHATGPT APP INTEGRATED · GPT PRODUCTION READY · POC COMPLETE · FULL END-TO-END PROVEN · CURSOR REAL COMBINED · STUDIO UI COMPLETE · READY FOR MERGE · GPT OPENAI LIVE SPIKE PROVEN.

---

## 11. Instruction ChatGPT

ChatGPT doit lire obligatoirement depuis Git la branche `sfia/review-handoff` et le fichier `sfia-review-handoff/latest-chatgpt-review.md` avant de prononcer un verdict.
