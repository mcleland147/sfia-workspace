# ChatGPT Review Pack — SFIA Studio Cycle 8/9 Payload Conformity (no temperature) Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 19:44:57 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery / conformité payload · sous-cycle 9 QA live |
| **Profil** | Critical |
| **Décision Morris** | GO conformité bornée : retirer paramètres optionnels rejetés ; max 2 relances |
| **Branche spike** | `spike/sfia-studio-openai-gpt-adapter` (locale — **aucun** commit/push/PR) |
| **HEAD / base / origin/main** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
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

## 2. Sources

- Template cycle SFIA  
- `origin/sfia/review-handoff` @ `45bfd77…` (bloqueur `temperature: 0`)  
- `30`, harness, `openaiRealSpike.ts`, `run-spike.ts`, contrats, validateur, tests, prompts  

---

## 3. État initial du payload

```ts
{
  model,
  temperature: 0,
  max_completion_tokens: 2048,
  response_format: { type: "json_object" },
  messages: [...]
}
```

Cause héritée : HTTP 400 `unsupported_value` — `temperature` ne supporte pas `0` (seul défaut = 1).

---

## 4. Premier correctif (appliqué)

```diff
   const body = {
     model,
-    temperature: 0,
     max_completion_tokens: 2048,
     response_format: { type: "json_object" },
     messages: [ ... ],
   };
```

Conservés : modèle `gpt-5-mini`, endpoint Chat Completions, `max_completion_tokens: 2048`, `response_format`, prompts, contrats, validateurs, fixture, flags.

---

## 5. Tests / build

| Contrôle | Résultat |
|----------|----------|
| typecheck | OK |
| tests GPT | **19 passed** |
| assert `temperature` absent | PASS |
| assert `max_completion_tokens: 2048` | PASS |
| assert pas de `max_tokens` | PASS |
| sanitation HTTP | PASS |
| build | OK |
| fixture défaut | live NON_EXECUTED |

---

## 6. Première relance live

```bash
SFIA_GPT_REAL_SPIKE=1 SFIA_GPT_REAL_LIVE=1 npm run spike:gpt-openai
```

### Preuve runtime

```json
{
  "liveQualification": {
    "ok": false,
    "status": "FAILED",
    "errorCode": "GPT_INVALID_JSON",
    "errorMessage": "Output is not valid JSON",
    "retriesAttempted": 0,
    "liveInvoked": true,
    "validatorAccepted": false
  },
  "liveVerdict": { "status": "NON_EXECUTED" }
}
```

| Champ | Valeur |
|-------|--------|
| Relance | 1 / 2 |
| Appels | **1** |
| Retries | **0** |
| HTTP error sérialisé | **absent** (pas d’échec HTTP) |
| Durée process | ~22,7 s |
| Tokens | N/A dans preuve |
| Modèle demandé | `gpt-5-mini` |
| Modèle retourné | N/A |

**S-GPT-09 :** FAILED — `GPT_INVALID_JSON`  
**S-GPT-10 :** NON EXÉCUTÉ  

**Lecture :** le bloqueur HTTP `temperature` est **levé**. La réponse modèle n’est pas du JSON valide → rejet fail-closed, sans réparation.

---

## 7. Second correctif / seconde relance

**Aucun.**

L’échec ne désigne **pas** un paramètre optionnel explicite (`unsupported_parameter` / `unsupported_value` sur un champ nommé). Une 2ᵉ correction/relance n’est donc **pas** autorisée par le GO.

---

## 8. Fichiers modifiés

| Fichier | Rôle |
|---------|------|
| `harness/src/ports/openaiRealSpike.ts` | Retrait `temperature` |
| `harness/tests/gpt-openai-spike.test.ts` | Assert payload sans `temperature` |
| `projects/sfia-studio/30-poc-gpt-openai-spike-report.md` | Rapport |
| `.tmp-sfia-review/chatgpt-review.md` | Ce pack |

### Diff utile complet (payload)

```diff
-      temperature: 0,
       max_completion_tokens: 2048,
```

---

## 9. Sécurité / FinOps / invariants

- Aucun secret  
- Aucun header Authorization sérialisé  
- Aucun candidat live accepté  
- `productionReadyClaimed=false` · `cursorRealInvoked=false`  
- Coût monétaire non inventé  
- Cursor réel non invoqué · `app/**` intact · Docker absent  

---

## 10. Rapport `30`

Mis à jour intégralement (horodatage 19:44:41 CEST) : correctif température, relance 1, `GPT_INVALID_JSON`, absence de relance 2, verdict.

---

## 11. Décisions Morris encore requises

1. GO stratégie de sortie JSON utilisable (structured outputs, budget tokens, format, etc.).  
2. Versionnement spike / bout-en-bout — fermés.  
3. Ne pas retirer `response_format` sans rejet API explicite.

---

## 12. Verdict

`GPT OPENAI LIVE RESPONSE UNUSABLE — CONTRACT OR TOKEN BUDGET DECISION REQUIRED`

Statut : **NOT READY**. Conformité HTTP `temperature` **OK** ; contenu JSON **non utilisable**.

Interdits : CHATGPT APP INTEGRATED · GPT PRODUCTION READY · POC COMPLETE · END-TO-END PROVEN · CURSOR REAL COMBINED · STUDIO UI COMPLETE · READY FOR MERGE · GPT OPENAI LIVE SPIKE PROVEN.

---

## 13. Instruction ChatGPT

ChatGPT doit lire obligatoirement depuis Git la branche `sfia/review-handoff` et le fichier `sfia-review-handoff/latest-chatgpt-review.md` avant de prononcer un verdict.
