# ChatGPT Review Pack — SFIA Studio Cycle 7 GPT/OpenAI Spike Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 18:35:49 CEST (Europe/Paris) |
| **Cycle** | 7 — Intégration / DevOps |
| **Profil** | Critical |
| **Décision Morris** | GO ouvrir le spike GPT/OpenAI du POC après intégration du spike Cursor réel |
| **Branche** | `spike/sfia-studio-openai-gpt-adapter` (**locale uniquement**) |
| **Base / HEAD** | `main` / `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| **origin/main** | `dce5a41a0a8c4ea1cfd08a8a99596b9dc02cb957` |
| **PR #225** | MERGED — `feat(sfia-studio): add experimental Cursor agent spike` |
| **Niveau** | full |
| **Commit / push spike / PR** | **NON AUTORISÉS** |
| **Handoff** | required — seule action distante |

---

## 1. Truth Check — PASS

- branche initiale `main` → switch local `spike/sfia-studio-openai-gpt-adapter`
- HEAD = origin/main = `dce5a41…`
- merge-base identique
- working tree initial : uniquement `?? .tmp-sfia-review/` (non bloquant)
- remote `spike/sfia-studio-openai-gpt-adapter` **absente**
- PR #225 MERGED confirmée
- Cursor réel présent expérimental ; fixture Cursor défaut
- GPT non présent avant ce cycle

---

## 2. Distinction ChatGPT / OpenAI API

| | |
|--|--|
| **ChatGPT app** | Non utilisée (pas cookies, session, Custom GPT, reverse engineering) |
| **OpenAI API** | Candidat live via HTTPS Chat Completions officiel + `OPENAI_API_KEY` |
| **Facturation** | Service API distinct de l’abonnement ChatGPT |

---

## 3. Découverte

| Élément | Valeur |
|---------|--------|
| Node | v24.16.0 |
| Package npm `openai` | **absent** (non ajouté) |
| `OPENAI_API_KEY_defined` | **false** |
| `OPENAI_MODEL_defined` | **false** |
| Org/project env | false |
| Secrets versionnés | aucun |

---

## 4. Auth / modèle / facturation

| Gate | Statut |
|------|--------|
| Auth | **Absente** → `OPENAI LIVE AUTHENTICATION REQUIRED — MORRIS API KEY DECISION NEEDED` |
| Modèle explicite | **Absent** |
| Billing | **Inconnu** (aucun appel) |

---

## 5. Options comparées → mécanisme sélectionné

1. HTTPS natif `fetch` Chat Completions — **retenu pour live** (officiel, 0 dépendance)
2. SDK officiel `openai` — non retenu (bénéfice net insuffisant sans live)
3. Fixture déterministe — **défaut stable**
4. ChatGPT app — **rejeté**

---

## 6. Architecture / ports / flags

```text
GPTQualificationPort / GPTVerdictPort
  → GPTFixtureAdapter (défaut)
  → OpenAIRealSpikeAdapter (EXPERIMENTAL — flag off)
```

Flags live : `enabled=true` + `SFIA_GPT_REAL_SPIKE=1` + `SFIA_GPT_REAL_LIVE=1` + clé + `OPENAI_MODEL` explicite. Cap 2 appels. Aucun retry. Timeout 30s.

Marqueur : **EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.**

---

## 7. Contrats / schémas / validateurs / prompts

- Contrats : `GPTQualificationRequest`, `ExecutionContractCandidate`, `GPTVerdictRequest`, `VerdictCandidate`, `GPTCallResult`, `GPTUsageSummary`
- Schéma : `gpt-spike-1.0.0`
- Validateur : schéma strict, subset paths/actions, gates, anti-autorité, anti-secret, anti-git write, anti-merge/production, taille, **aucune réparation silencieuse**
- Prompts : `spikes/gpt-openai/prompts/qualification-system.md` + `verdict-system.md`

---

## 8. Sorties structurantes (fixture)

### Run spike (live non exécuté)

```json
{
  "experimental": true,
  "productionReadyClaimed": false,
  "cursorRealInvoked": false,
  "apiKeyDefined": false,
  "modelDefined": false,
  "liveGateSatisfied": false,
  "stopReason": "OPENAI LIVE AUTHENTICATION REQUIRED — MORRIS API KEY DECISION NEEDED",
  "fixtureQualificationOk": true,
  "fixtureVerdictOk": true,
  "liveQualification": { "status": "NON_EXECUTED" },
  "liveVerdict": { "status": "NON_EXECUTED" }
}
```

### Invariants fixture vérifiés par tests

- `validatedDecisions` = uniquement décisions d’entrée
- `requiredMorrisGates` conservés
- `requestedActions` ⊂ allowlist
- `decisionValidated` / `goConsumed` / `mergeAuthorized` / `productionReady` = false
- `productionReadyClaimed` = false
- `retriesAttempted` = 0
- `monetaryCostClaimed` = false

---

## 9. Diff — fichiers

### Modifiés (tracked)

```
M projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
M projects/sfia-studio/README.md
M projects/sfia-studio/harness/README.md
M projects/sfia-studio/harness/package.json
M projects/sfia-studio/harness/src/index.ts
```

### Créés (untracked locaux)

```
projects/sfia-studio/30-poc-gpt-openai-spike-report.md
projects/sfia-studio/harness/src/types/gptContracts.ts
projects/sfia-studio/harness/src/validation/gptOutputValidator.ts
projects/sfia-studio/harness/src/ports/gptQualification.ts
projects/sfia-studio/harness/src/ports/gptVerdict.ts
projects/sfia-studio/harness/src/ports/gptFixture.ts
projects/sfia-studio/harness/src/ports/openaiRealSpike.ts
projects/sfia-studio/harness/tests/gpt-openai-spike.test.ts
projects/sfia-studio/harness/spikes/gpt-openai/.gitignore
projects/sfia-studio/harness/spikes/gpt-openai/fixtures/input.md
projects/sfia-studio/harness/spikes/gpt-openai/prompts/qualification-system.md
projects/sfia-studio/harness/spikes/gpt-openai/prompts/verdict-system.md
projects/sfia-studio/harness/spikes/gpt-openai/proofs/.gitkeep
projects/sfia-studio/harness/spikes/gpt-openai/run-spike.ts
```

### Diff tracked (complet)

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ D-NEXT-30…
-| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | UI/Docker **fermés** ; spike Cursor **prouvé avec réserves** (`29`) — versionnement ouvert |
+| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | UI/Docker **fermés** ; spike Cursor **prouvé avec réserves** (`29`, #225) |
+| D-NEXT-31 | Spike GPT/OpenAI live (clé + modèle) | Morris | **OUVERT** — code prêt fixture ; live auth/model requis (`30`) |
+| D-NEXT-32 | Test bout-en-bout GPT→harness→Cursor→GPT | Morris | **OUVERT** — non exécuté ce cycle |

(+ mises à jour README / 28 / harness README / package.json script spike:gpt-openai / index.ts exports)
```

Les sources nouvelles complètes sont sur la branche locale aux chemins ci-dessus (≈1200+ lignes ports+validateur+tests). Reviewer : lire `30-poc-gpt-openai-spike-report.md` + `openaiRealSpike.ts` + `gptOutputValidator.ts` + `gpt-openai-spike.test.ts`.

---

## 10. Scénarios S-GPT-01 … 12

| ID | Résultat |
|----|----------|
| S-GPT-01 | PASS |
| S-GPT-02 | PASS |
| S-GPT-03 | PASS |
| S-GPT-04 | PASS |
| S-GPT-05 | PASS |
| S-GPT-06 | PASS |
| S-GPT-07 | PASS |
| S-GPT-08 | PASS |
| S-GPT-09 | **NON EXÉCUTÉ** — live absente |
| S-GPT-10 | **NON EXÉCUTÉ** |
| S-GPT-11 | PASS |
| S-GPT-12 | PASS (usage mock ; coût monétaire non inventé) |

Live skipped ≠ preuve GPT réelle.

---

## 11. Live / usage / coûts

- Qualification live : **non exécutée**
- Verdict live : **non exécuté**
- Usage tokens live : N/A
- Coût monétaire : **non inventé**

---

## 12. Sécurité / secrets

| Contrôle | Résultat |
|----------|----------|
| Valeur `OPENAI_API_KEY` affichée | Non |
| Clé dans repo | Non |
| `app/**` modifié | Non |
| Docker | Absent |
| Cursor réel invoqué | Non |
| Git write distant projet | Non |
| Occurrences Bearer / OPENAI_API_KEY= | Transport runtime + tests de rejet uniquement |

---

## 13. Tests

| Suite | Résultat |
|-------|----------|
| Existantes | 51 passed + 1 skipped (cursor live) |
| GPT fixture/validators/mock | inclus dans 14 tests gpt-openai-spike |
| Live réel | non exécuté / conditionnel skip |

`npm ci` · `typecheck` · `test` · `build` — OK. 0 vulnérabilités npm audit.

---

## 14. Risques / réserves / dette

**Risques :** confusion ChatGPT/API ; live non prouvé ; non-déterminisme modèle (mitigé par validateur).

**Réserves :** auth/model absents ; billing inconnu ; pas de bout-en-bout ; fixture ≠ preuve OpenAI réelle.

**Dette :** pas de wiring orchestrator ; SDK non ajouté ; Responses API non explorée live.

---

## 15. Recommandation

Accepter le spike **fixture + adaptateur expérimental** comme préparation live. Ne pas activer par défaut. Ne pas merger sans GO Morris versionnement + review.

---

## 16. Décisions Morris

1. Fournir ou non `OPENAI_API_KEY` (hors repo).
2. Décider explicitement `OPENAI_MODEL`.
3. Autoriser ou non relance live S-GPT-09/10.
4. Décider du futur bout-en-bout (sans l’exécuter ici).
5. Versionnement spike (commit/push/PR) — **fermé** ce cycle.

---

## 17. Verdict

`GPT OPENAI SPIKE READY FOR LIVE AUTH WITH RESERVES — API CREDENTIAL OR MODEL DECISION REQUIRED`

Ne pas conclure : CHATGPT APP INTEGRATED · GPT PRODUCTION READY · POC COMPLETE · END-TO-END PROVEN · CURSOR REAL COMBINED · STUDIO UI COMPLETE · READY FOR MERGE.
