# ChatGPT Review Pack — SFIA Studio Cycle 8/9 max_completion_tokens + Live Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 19:35:16 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery / correctif payload · sous-cycle 9 QA live |
| **Profil** | Critical |
| **Décision Morris** | GO `max_tokens` → `max_completion_tokens` + une relance live unique |
| **Branche spike** | `spike/sfia-studio-openai-gpt-adapter` (locale — **aucun** commit/push/PR) |
| **HEAD / base / origin/main** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| **Niveau** | full |
| **Handoff** | required |

---

## 1. Truth Check — PASS

```
branch=spike/sfia-studio-openai-gpt-adapter
HEAD=origin/main=dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957
staged=aucun
remote spike=absente
```

---

## 2. Sources

- Template cycle SFIA  
- `origin/sfia/review-handoff` (pack root-cause `max_tokens` @ `ffeb623…`)  
- `30`, README, harness, `package.json`, `openaiRealSpike.ts`, `run-spike.ts`, contrats, validateur, tests, prompts  

---

## 3. Cause racine héritée

HTTP 400 · `unsupported_parameter` ·  
`Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.`

Pipeline de preuve HTTP déjà en place (sanitation + sérialisation).

---

## 4. Correctif exact

### Avant / après (seul paramètre modifié)

```diff
-      max_tokens: 2048,
+      max_completion_tokens: 2048,
```

### Preuve d’unicité du changement payload

```ts
const body = {
  model,
  temperature: 0,                    // inchangé
  max_completion_tokens: 2048,       // seul remplacement
  response_format: { type: "json_object" }, // inchangé
  messages: [ /* … */ ],
};
```

Endpoint inchangé : `https://api.openai.com/v1/chat/completions`  
Modèle inchangé : `gpt-5-mini` (env)  
Aucun autre paramètre modifié.

---

## 5. Fichiers modifiés

| Fichier | Rôle |
|---------|------|
| `harness/src/ports/openaiRealSpike.ts` | `max_completion_tokens: 2048` |
| `harness/tests/gpt-openai-spike.test.ts` | Assert payload live : présence `max_completion_tokens`, absence `max_tokens`, model/temperature/response_format inchangés |
| `projects/sfia-studio/30-poc-gpt-openai-spike-report.md` | Rapport live |
| `.tmp-sfia-review/chatgpt-review.md` | Ce pack |

`harness/README.md` : **non modifié** (ne documentait pas `max_tokens`).

---

## 6. Tests / build

| Contrôle | Résultat |
|----------|----------|
| typecheck | OK |
| tests GPT | **19 passed** |
| test payload `max_completion_tokens` | PASS |
| tests sanitation | PASS |
| build | OK |
| fixture défaut (flags absents) | live NON_EXECUTED |

---

## 7. Commande live logique

```bash
SFIA_GPT_REAL_SPIKE=1 SFIA_GPT_REAL_LIVE=1 npm run spike:gpt-openai
```

- Relances : **1**  
- Appels OpenAI : **1**  
- Retries : **0**  
- Timeout : 30s  

---

## 8. S-GPT-09 — résultat live

```json
{
  "ok": false,
  "status": "FAILED",
  "errorCode": "GPT_HTTP_ERROR",
  "errorMessage": "OpenAI HTTP 400: Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.",
  "httpError": {
    "httpStatus": 400,
    "apiCode": "unsupported_value",
    "apiType": "invalid_request_error",
    "messageSanitized": "Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.",
    "durationMs": 978,
    "bodyLen": 245
  },
  "retriesAttempted": 0,
  "liveInvoked": true,
  "validatorAccepted": false
}
```

**Efficacité du correctif `max_completion_tokens` :** l’erreur précédente sur `max_tokens` **n’apparaît plus**.  
**Nouveau bloqueur capturé :** `temperature: 0` non supporté (seul défaut API = 1).

Aucune correction supplémentaire dans ce cycle (interdit sans nouveau GO).

---

## 9. S-GPT-10

**NON EXÉCUTÉ** — S-GPT-09 échoué.

---

## 10. FinOps / sécurité / invariants

| Métrique | Valeur |
|----------|--------|
| Tokens | N/A |
| Coût inventé | non |
| Facturation vérifiée | inconnue |
| Modèle demandé | `gpt-5-mini` |
| Modèle retourné | N/A |
| Secrets | aucun dans preuve/rapport |
| Candidat live accepté | non |
| `productionReadyClaimed` | false |
| Cursor réel | non invoqué |
| `app/**` / Docker | intact / absent |

---

## 11. Rapport `30` — contenu modifié

Rapport intégralement mis à jour (horodatage 19:35:04 CEST) : correctif `max_completion_tokens`, preuve live HTTP 400 `temperature`, S-GPT-10 non exécuté, décisions Morris, verdict.

Chemin : `projects/sfia-studio/30-poc-gpt-openai-spike-report.md`

---

## 12. Décisions Morris encore requises

1. **GO** : correction démontrée de `temperature` (retirer le champ **ou** valeur explicitement supportée) + **une** relance live.  
2. Ne pas toucher `response_format` / modèle / endpoint sans preuve.  
3. Versionnement spike / bout-en-bout — **fermés**.

---

## 13. Verdict

`GPT OPENAI LIVE NEXT BLOCKER CAPTURED — FURTHER CORRECTIVE DECISION REQUIRED`

Statut : **NOT READY** (live positif). Correctif `max_completion_tokens` **prouvé** ; bloqueur suivant = `temperature: 0`.

Interdits : CHATGPT APP INTEGRATED · GPT PRODUCTION READY · POC COMPLETE · END-TO-END PROVEN · CURSOR REAL COMBINED · STUDIO UI COMPLETE · READY FOR MERGE · GPT OPENAI LIVE SPIKE PROVEN.

---

## 14. Instruction ChatGPT

ChatGPT doit lire obligatoirement depuis Git la branche `sfia/review-handoff` et le fichier `sfia-review-handoff/latest-chatgpt-review.md` avant de prononcer un verdict.
