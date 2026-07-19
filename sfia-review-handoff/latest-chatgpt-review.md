# ChatGPT Review Pack — SFIA Studio Cycle 9 GPT/OpenAI Live QA Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 19:19:45 CEST (Europe/Paris) |
| **Cycle** | 9 — QA / validation |
| **Profil** | Critical |
| **Typologie** | QA / validation d’un spike expérimental |
| **Branche spike** | `spike/sfia-studio-openai-gpt-adapter` (**locale — aucun commit/push/PR**) |
| **HEAD / base / origin/main** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| **PR #225** | MERGED |
| **Niveau** | full |
| **Handoff** | required — seule action distante |

---

## 1. Local Git Truth Check — PASS

```
pwd=/Users/morris/Projects/sfia-workspace
branch=spike/sfia-studio-openai-gpt-adapter
HEAD=dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957
origin/main=dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957
merge-base=identique
staged=aucun
remote spike=absente
```

Working tree volontairement non propre = spike GPT/OpenAI du cycle précédent uniquement (docs + harness GPT + `.tmp-sfia-review/`). Aucune modification `app/**`, Docker, méthode SFIA.

---

## 2. Sources consultées

### Canoniques Git
- `prompts/templates/sfia-cycle-execution-template.md` (référence cycle)
- `origin/sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (handoff précédent Cycle 7)

### Locales cycle
- `projects/sfia-studio/30-poc-gpt-openai-spike-report.md` (**mis à jour ce cycle**)
- `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`
- `projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md`
- `projects/sfia-studio/README.md`
- `projects/sfia-studio/harness/README.md`
- `projects/sfia-studio/harness/package.json` → script `spike:gpt-openai`
- `projects/sfia-studio/harness/spikes/gpt-openai/run-spike.ts`
- `projects/sfia-studio/harness/src/ports/openaiRealSpike.ts`
- `projects/sfia-studio/harness/src/validation/gptOutputValidator.ts`
- `projects/sfia-studio/harness/src/types/gptContracts.ts`
- `projects/sfia-studio/harness/tests/gpt-openai-spike.test.ts`
- prompts qualification / verdict

---

## 3. Environnement (booléens — aucune valeur de clé)

| Variable | Statut |
|----------|--------|
| `OPENAI_API_KEY_defined` | **true** |
| `OPENAI_MODEL_defined` | **true** |
| `OPENAI_MODEL` | **gpt-5-mini** (correspondance exacte) |
| `SFIA_GPT_REAL_SPIKE` / `LIVE` hors run | absents |
| Live process | `SFIA_GPT_REAL_SPIKE=1` + `SFIA_GPT_REAL_LIVE=1` |

---

## 4. Commande logique (sans secret)

```bash
cd projects/sfia-studio/harness
npm run typecheck
npx vitest run tests/gpt-openai-spike.test.ts   # 14 passed
npm run build
npm run spike:gpt-openai                        # fixture défaut : live NON_EXECUTED
SFIA_GPT_REAL_SPIKE=1 SFIA_GPT_REAL_LIVE=1 npm run spike:gpt-openai   # 1 seule exécution live
```

- Endpoint : `https://api.openai.com/v1/chat/completions`
- Timeout : 30s
- Cap : 2 appels · retries : 0
- Corps existant : `temperature:0`, `max_tokens:2048`, `response_format:json_object`
- **Aucun retry** après échec
- **Aucune modification de code**

---

## 5. Preuve technique live (fichier runtime gitignored)

Fichier : `projects/sfia-studio/harness/spikes/gpt-openai/proofs/run-1784481562211.json`

```json
{
  "experimental": true,
  "productionReadyClaimed": false,
  "cursorRealInvoked": false,
  "apiKeyDefined": true,
  "modelDefined": true,
  "modelValue": "gpt-5-mini",
  "liveGateSatisfied": true,
  "stopReason": null,
  "fixtureQualificationOk": true,
  "fixtureVerdictOk": true,
  "liveQualification": {
    "ok": false,
    "status": "FAILED",
    "errorCode": "GPT_HTTP_ERROR"
  },
  "liveVerdict": {
    "status": "NON_EXECUTED"
  }
}
```

Limitation runner : `errorMessage` et statut HTTP numérique existent dans `HarnessError.detail` mais **ne sont pas sérialisés** par `run-spike.ts` — non corrigé ce cycle (interdit).

---

## 6. S-GPT-09 — qualification réelle

| Champ | Résultat |
|-------|----------|
| Appel | **1** |
| ok | **false** |
| status | **FAILED** |
| errorCode | **GPT_HTTP_ERROR** |
| Validateur schéma | **non atteint** |
| Tokens | **inconnus** |
| Modèle retourné | **N/A** |
| Durée appel isolée | non capturée (processus live ~1,6 s) |

---

## 7. S-GPT-10 — verdict réel

| Champ | Résultat |
|-------|----------|
| Appel | **0** |
| Statut | **NON EXÉCUTÉ** |
| Raison | Qualification échouée → runner n’enchaîne pas |

---

## 8. FinOps / performance

| Métrique | Valeur |
|----------|--------|
| Appels totaux | **1** ≤ 2 |
| Retries | **0** |
| Tokens in/out/total | inconnus |
| Coût inventé | **non** |
| Facturation vérifiée | **inconnue** |
| Benchmark | **non** |

---

## 9. Sécurité / autorité

- Clé jamais affichée / écrite / hashée dans rapports.
- Pas de header Authorization dans preuves.
- Pas de candidat live accepté → pas de `decisionValidated`/`goConsumed`/`mergeAuthorized`/`productionReady` live.
- `productionReadyClaimed=false` · `cursorRealInvoked=false`.
- Fixture défaut confirmée sans flags.

---

## 10. Analyse stop (extrait rapport `30` — contenu modifié exploitable)

> Stop condition : **Réponse HTTP non réussie**.
>
> Hypothèse documentaire (non prouvée par statut HTTP capturé) : incompatibilité possible du corps de requête du spike (`temperature: 0` et/ou `max_tokens`) avec la famille `gpt-5-mini` / modèles reasoning — correction de code **requise** pour poursuivre, donc **hors périmètre** de ce cycle.
>
> Endpoint Chat Completions est documenté supporté pour `gpt-5-mini` côté OpenAI ; l’échec observé est donc **compatible avec une incompatibilité de paramètres de requête**, non avec une absence d’endpoint.
>
> **Aucune réparation silencieuse. Aucun second essai. Aucune modification de code.**

### Rapport `30` — sections 7–9 et 15 (complets)

Voir fichier modifié intégral `projects/sfia-studio/30-poc-gpt-openai-spike-report.md` (151 lignes). Contenu live QA intégralement réécrit ; horodatage 2026-07-19 19:19:45 CEST ; verdict final section 15.

Rôle des autres fichiers : **non modifiés** ce cycle QA (hérités cycle 7) — `07`, `28`, README, ports, tests, etc.

Fichier modifié ce cycle autorisé :
- `projects/sfia-studio/30-poc-gpt-openai-spike-report.md` — résultats live + verdict
- `.tmp-sfia-review/chatgpt-review.md` — ce pack
- handoff distant uniquement

---

## 11. Tests / build

| Contrôle | Résultat |
|----------|----------|
| typecheck | OK |
| tests GPT | 14 passed |
| build | OK |
| fixture défaut | live NON_EXECUTED / flags off |
| app/** | intact |
| Docker | absent |
| Cursor réel | non invoqué |
| commit/push/PR spike | **non** |

---

## 12. Diff stat (branche spike — inchangé hors rapport 30 untracked update)

Tracked (héritage cycle 7) :
```
 projects/sfia-studio/07-product-trajectory-and-decision-pack.md | 4 +++-
 projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md | 8 ++++++--
 projects/sfia-studio/README.md                                  | 3 ++-
 projects/sfia-studio/harness/README.md                          | 5 ++++-
 projects/sfia-studio/harness/package.json                       | 5 +++--
 projects/sfia-studio/harness/src/index.ts                       | 7 +++++++
 6 files changed, 25 insertions(+), 7 deletions(-)
```

Ce cycle QA : mise à jour de `30-poc-gpt-openai-spike-report.md` + preuves runtime gitignored + review pack. **Aucun staged.**

---

## 13. Décisions Morris

### Consommées
- GO spike GPT + clé POC + modèle `gpt-5-mini` + exécution S-GPT-09/10 dans ce périmètre.

### Encore requises
1. GO correctif adaptateur (paramètres Chat Completions / preuve HTTP enrichie).
2. Relance live S-GPT-09/10.
3. Versionnement spike — fermé.
4. Bout-en-bout — fermé.

---

## 14. Statut

**NOT READY** pour preuve live positive.  
Fixture + gates restent valides. Live invocation **tentée** puis **échouée** fail-closed.

---

## 15. Verdict

`OPENAI LIVE MODEL OR ENDPOINT INCOMPATIBLE — MORRIS DECISION REQUIRED`

Interdits : CHATGPT APP INTEGRATED · GPT PRODUCTION READY · POC COMPLETE · END-TO-END PROVEN · CURSOR REAL COMBINED · STUDIO UI COMPLETE · READY FOR MERGE · GPT OPENAI LIVE SPIKE PROVEN.

---

## 16. Instruction ChatGPT

ChatGPT doit lire obligatoirement depuis Git la branche `sfia/review-handoff` et le fichier `sfia-review-handoff/latest-chatgpt-review.md` avant de prononcer un verdict.
